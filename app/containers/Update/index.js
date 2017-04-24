
/*
 *
 * Dashboard
 *
 */

 import React from 'react';
 import Helmet from 'react-helmet';
 import {Link} from 'react-router';
 import TextField from 'material-ui/TextField';
 import {orange500, blue500, brown500, brown900, brown700,} from 'material-ui/styles/colors';
 import Responsive from 'react-responsive';
 import AppBar from 'material-ui/AppBar';
 import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import RaisedButton from 'material-ui/RaisedButton';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import Header from 'components/Header';

export default class Update extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state={
      subject:"",
      image:"",
      body:"",
      preview:"",
      token:sessionStorage.getItem("token")
    }
  }
  componentWillMount(){
    fetch("http://localhost:8000/api/showArticle/" + this.props.params.id)
    .then(function(res){
      return res.json()
    })
    .then(function(json){
      this.setState({
        subject:json.subject,
        body:json.subject,
        preview:json.image,
      })
    }.bind(this))
  }

  handleSubject = (event) => {
    this.setState({
      subject:event.target.value

    })
    console.log(this.state.subject);
  }
  handleImage = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        image: file,
        preview: reader.result
      })
    }
    reader.readAsDataURL(file);
  }
  handleBody = (event) => {
    this.setState({
      body:event.target.value

    })
    console.log(this.state.body);
  }
  updateArticle = () => {
    var _this = this;
    var data = new FormData();
    data.append("image", this.state.image);
    data.append("subject", this.state.subject);
    data.append("body", this.state.body);

    fetch("http://localhost:8000/api/updateArticle/"+this.props.params.id+"?token="+this.state.token, {
      method:"post",
      body: data
    })
    .then(function(res){
      return res.json()
    })
    .then(function(json){
      if(json.error){
        alert(json.error);
      }
      else if (json.success) {
        alert(json.success);
        _this.setState({
          subject:"",
          image:"",
          body:"",
          preview:"",
        })
        _this.context.router.push("/");
      }
    })
  }
  render() {
    const main={
      width: "100%",
      height: "100%",
      background: "url(http://i1065.photobucket.com/albums/u395/monkeyzealer/wood_background_zps0b8n5qop.gif)",
      backgroundSize: "100% 100%",
    };
    const titleheader={
      paddingLeft: "0.5em",
      paddingRight: "0.5em",
      marginBottom: "0",
      paddingTop: "1em",
      marginTop: "0",
    };
    const subjectTitle={
      paddingLeft: "1em",
      paddingRight: "1em",
      marginBottom: "0",
      paddingTop: "2em",
      width: "50%",
      fontWeight: "bold",
      marginTop: "0"
    };
    const messageTitle={
      paddingLeft: "1em",
      paddingRight: "1em",
      marginBottom: "0",
      paddingTop: "0",
      width: "98%",
      fontWeight: "bold",
      marginTop: "0"
    };
    const subjectBox={
      marginLeft: "1em",
      marginRight: "1em",
      marginBottom: "0",
      marginTop: "0",
      width: "50%",
      height: "45px",
    };
    const MessageBox={
      marginLeft: "1em",
      marginRight: "0",
      marginBottom: "0",
      marginTop: "0",
      width: "90%",
      height: "255px",
    };
    const preview={
      maxWidth: "200px",
      maxHeight: "200px",
    };
    const Container={
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "100vh"
    };
    const styles = {
      underlineStyle: {
        borderColor: brown700,
      },
      underlineFocusStyle: {
        borderColor: brown900,
      },
      hintStyle: {
        width: "100%",
        height: "30px",
        color: "white",
      },
      inputStyle: {
        background: "rgba(0, 0, 0, 0.3)",
        width: "100%",
        height: "30px",
        color: "white",
        paddingLeft: "10px",
        paddingRight: "10px",
      },
      textareaStyle: {
        marginTop: "0",
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingTop: "5px",
        paddingBottom: "5px"
      },
      uploadButton: {
        verticalAlign: 'middle',
        color: "white",
      },
      uploadInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
      },
      button: {
      margin: 12,
      backgroundColor: brown700,
    },
    button2: {
    margin: 12,
    backgroundColor: brown900,
  },
    };
    return (
      <div>
        <Helmet title="Update" meta={[ { name: 'description', content: 'Description of Dashboard' }]}/>
          <Header />
        <main>
        <div style={main}>
                <h1 style={titleheader}>Write new post</h1>
                  <p style={subjectTitle}>Subject:</p>
                  <TextField
                  onChange={this.handleSubject}
                  value={this.state.subject}
                  style={subjectBox}
                  hintText="&nbsp;"
                  hintStyle={styles.hintStyle}
                  inputStyle={styles.inputStyle}
                  underlineStyle={styles.underlineStyle}
                  underlineFocusStyle={styles.underlineFocusStyle}
                    />
                    <br />
                    <RaisedButton
                        backgroundColor="brown700"
                        label="Choose an Image"
                        labelPosition="before"
                        labelColor="rgb(200, 181, 96)"
                        style={styles.uploadButton}
                        style={styles.button}
                        containerElement="label"
                      >
                        <input type="file" onChange={(e) => this.handleImage(e)}  style={styles.uploadInput} />
                      </RaisedButton>
                      <img style={preview} src={this.state.preview} />
                <p style={messageTitle}>Body:</p>
                  <TextField style={MessageBox}
                    onChange={this.handleBody}
                    value={this.state.body}
                    multiLine={true}
                    rows={10}
                    textareaStyle={styles.textareaStyle}
                    underlineStyle={styles.underlineStyle}
                    underlineFocusStyle={styles.underlineFocusStyle}
                  />
                   <br />
                   <RaisedButton style={styles.button2} type="submit"
                   backgroundColor="brown900" onTouchTap={this.updateArticle} label="Submit"
                   className="button-submit" primary={true} />
        </div>
        </main>
      <Footer />
      </div>
    );
  }
}
Update.contextTypes = {
  router: React.PropTypes.object
};
