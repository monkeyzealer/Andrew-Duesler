/*
 *
 * Single
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import {orange500, blue500, brown500, brown900, brown700,} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import RaisedButton from 'material-ui/RaisedButton';
import FileFolder from 'material-ui/svg-icons/file/folder';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import Header from 'components/Header'
import Responsive from 'react-responsive';

export default class Single extends React.PureComponent {
  constructor(props)
  {
    super(props);
    this.state={
      article:"",
      token: sessionStorage.getItem("token"),
      commentBody: "",
      comments:[],
      comment:"",
      user:JSON.parse(sessionStorage.getItem("user")),
    }
  }
  componentWillMount(){
    fetch("http://codemonkeytestsites.com/api/showArticle/" + this.props.params.id)
    .then(function(res){
      return res.json()
    })
    .then(function(json){
      this.setState({
        article:json
      })
    }.bind(this))

    fetch("http://codemonkeytestsites.com/api/getComments/" + this.props.params.id)
    .then(function(res){
      return res.json()
    })
    .then(function(json){
      this.setState({
        comments:json
      })
    }.bind(this))
  }
  handleComment = (event) =>
  {
    this.setState({
      commentBody: event.target.value
    })
  }
  storeComment = () =>{
    var comments = this.state.comments;
    var data = new FormData();
    data.append("commentBody", this.state.commentBody);
    data.append("articleID", this.props.params.id);

    fetch("http://codemonkeytestsites.com/api/storeComment?token=" + this.state.token,
    {
      method:"post",
      body: data,
      headers:{"Authorization":"bearer "+this.state.token}
    })


    .then(function(res){
      return res.json()
    })
    .then(function(json){
      if(json.error){
        alert(json.error);
      }
      else if (json.success) {
        //puts the new comment at the top of the comment box
        comments.unshift(json.data);
        this.setState({
          comments:comments
        })
        //forces it to update the comment box
        this.forceUpdate();
        alert(json.success);
      }
    }.bind(this))
  }
  deleteComment = (id) =>{
    var _this = this;
    fetch("http://codemonkeytestsites.com/api/deleteComment/" + id + "?token=" + this.state.token, {
      method: "post",
      headers:{"Authorization":"bearer "+this.state.token}
    })
    .then(function(res){
      return res.json();
    })
    .then(function(json){
      if(json.success)
      {
        alert(json.success);
        window.location.reload();
      }
      else if(json.error)
      {
        alert(json.error);
      }
    })

    var deleteComment = "";

    //if user isnt logged in it will show the Sign Link
    if(this.state.user === null)
    {
     deleteComment = "";
    }
    //if user is logged in it will show the dashboard and sign out links
    else {
      if(this.state.user.roleID !== 1) {
        deleteComment = "";
      }
    }
  }
  destroyArticle = () =>{
    var _this = this;
    fetch("http://codemonkeytestsites.com/api/destroyArticle/" + this.props.params.id + "?token=" + this.state.token, {
      method: "post",
      headers:{"Authorization":"bearer "+this.state.token}
    })
    .then(function(res){
      return res.json();
    })
    .then(function(json){
      if(json.success)
      {
        alert(json.success);
        _this.context.router.push("/");
      }
      else if(json.error)
      {
        alert(json.error);
      }
    })
    var editLink = <Link activeStyle={{color:'#C8B560'}} to={`/update/${this.props.params.id}`}>Edit</Link>;

    var deletePost = "";

    //if user isnt logged in it will show the Sign Link
    if(this.state.user === null)
    {
     editLink = "";
     deletePost = "";
    }
    //if user is logged in it will show the dashboard and sign out links
    else {
      if(this.state.user.roleID !== 1) {
        editLink = "";
        deletePost = "";
      }
    }
  }
  render() {
    const mainContainer={
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      flexGrow: "1",
    }
    const main={
      width: "100%",
      background: "url(http://i1065.photobucket.com/albums/u395/monkeyzealer/wood_background_zps0b8n5qop.gif)",
      backgroundSize: "100% 100%",
      display: "flex",
      flexDirection: "column",
      paddingBottom: "20px",
      paddingTop: "10px",
      };
    const postContent={
      marginTop: "0",
      paddingLeft: "10px",
      paddingRight: "10px",
      margin: "0 auto",
      maxWidth: "100%",
      marginBottom: "20px",
      fontSize: "20px"
    }
    const postContentheader={
      width: "100%",
      marginTop: "0px",
      paddingLeft: "10px",
      paddingRight: "10px",
      marginBottom: "0.5em",
      textAlign: "center",
    }
    const imagePost={
      width:"auto",
      maxWidth: "90%",
      height:"auto",
      marginBottom: "20px"
    }
    const imagePostContainer={
      width: "100%",
      marginTop: "20px",
      textAlign: "center",
      justifyContent: "center",
      minHeight: "150px"
    }
    const sidebarMobile={
      width: "100%",
      background: "url(http://i1065.photobucket.com/albums/u395/monkeyzealer/wood_background-Recovered_zpspkq9xazm.gif)",
      display: "flex",
      flexDirection: "column",
      color: "white",
      flexWrap: "wrap",
      backgroundSize: "100% 100%",
    };
    const mainMobile={
      width: "100%",
      background: "url(http://i1065.photobucket.com/albums/u395/monkeyzealer/wood_background_zps0b8n5qop.gif)",
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      backgroundSize: "100% 100%",
    };
    const postContentMobile={
      marginTop: "0",
      paddingLeft: "10px",
      paddingRight: "10px",
      display: "flex",
      flexDirection: "row",
      margin: "0 auto",
      maxWidth: "100%",
      marginBottom: "10px"
    }
    const Container={
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "100vh"
    };
    const footerStyle ={
      alignSelf: "flex-end",
    };
    const editLink ={
      textAlign: "center",
      marginTop: "0",
      marginBottom: "5px"
    };
    const deleteLink ={
      textAlign: "center",
      marginTop: "0",
      marginBottom: "20px"
    };
    const chatBox={
      background: "url(http://i1065.photobucket.com/albums/u395/monkeyzealer/wood_background-Recovered_zpspkq9xazm.gif)",
      color: "white",
      backgroundSize: "100% 100%",
      height: "auto"
    };
    const commentContainer={
      width: "100%",
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      background: "url(http://i1065.photobucket.com/albums/u395/monkeyzealer/wood_background-Recovered_zpspkq9xazm.gif)",
      backgroundSize: "100% 100%",
    };
    const userComment={
      display: "flex",
      width: "100%",
      flexDirection: "column",
      borderTop: "1px solid white",
      padding: "15px",
      background: "rgba(255, 255, 255, 0.298039)",
    };
    const userName={
      textDecoration: "bold",
      marginBottom: "0",
    };
    const comment={
      width: "100%",
      marginTop: "0.5em",
    };
    const timestamp={
      fontSize: "0.8em",
      margin: "0",
      paddingLeft: "5px",
    };
    const commentInputBox={
      marginLeft: "1em",
      marginRight: "0",
      marginBottom: "0",
      marginTop: "0",
      width: "90%",
      height: "255px",
    };
    const commentBox={
      width: "100%",
      borderTop: "1px solid white",
      paddingTop: "20px",
      color: "white",
    }
    const commentInputTitle={
      paddingLeft: "1em",
      paddingRight: "1em",
      marginBottom: "0",
      paddingTop: "0",
      width: "98%",
      fontWeight: "bold",
      marginTop: "0"
    };
    const deleteComment={
      float: "left",
    }
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
        paddingBottom: "5px",
        color: "white",
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
      <div style={Container}>
        <Helmet title="Single" meta={[ { name: 'description', content: 'Description of Single' }]}/>
        <Header />
        <Responsive minDeviceWidth={1024}>
        <main style={mainContainer}>
          <div style={main}>
            <div style={imagePostContainer}>
              <img style={imagePost}  src={this.state.article.image} />
            </div>
            <h1 style={postContentheader}>{this.state.article.subject}</h1>
            <p style={postContent}>{this.state.article.body}</p>
            <p style={editLink}><Link activeStyle={{color:'#C8B560'}} to={`/update/${this.props.params.id}`}>Edit</Link></p>
            <p style={deleteLink}><button activeStyle={{color:'#C8B560'}} onTouchTap={this.destroyArticle}>Delete Post</button></p>
          </div>
          <div style={commentContainer}>
            {this.state.comments.map((comment,i) => (
              <div style={userComment} key={i}>
              <p style={deleteComment}><button activeStyle={{color:'#C8B560'}} onTouchTap={() => this.deleteComment(comment.id)}>X</button></p>
                <p style={timestamp}>{comment.commentDate}</p>
                <h2 style={userName}>{comment.name}</h2>
                <p style={comment}>{comment.body}</p>
              </div>
            ))}
            <div style={commentBox}>
                <p style={commentInputTitle}>Comment here:</p>
                <TextField style={commentInputBox}
                  multiLine={true}
                  rows={10}
                  textareaStyle={styles.textareaStyle}
                  underlineStyle={styles.underlineStyle}
                  underlineFocusStyle={styles.underlineFocusStyle}
                  onChange={this.handleComment}
                  />
                 <br />
                 <RaisedButton style={styles.button2} type="submit"
                 label="Submit" onTouchTap={this.storeComment}
                 className="button-submit" primary={true} />
            </div>
          </div>
        </main>
        </Responsive>
        <Responsive maxDeviceWidth={1023}>
        <main style={mainContainer}>
          <div style={mainMobile}>
          <div style={imagePostContainer}>
            <img style={imagePost}  src={this.state.article.image} />
          </div>
          <h1 style={postContentheader}>{this.state.article.subject}</h1>
          <p style={postContent}>{this.state.article.body}</p>
          <p style={editLink}><Link activeStyle={{color:'#C8B560'}} to={`/update/${this.props.params.id}`}>Edit</Link></p>
          <p style={deleteLink}><button activeStyle={{color:'#C8B560'}} onTouchTap={this.destroyArticle}>Delete Post</button></p>
          </div>
          <div style={commentContainer}>
            {this.state.comments.map((comment,i) => (
              <div style={userComment} key={i}>>
                <p style={deleteComment}><button activeStyle={{color:'#C8B560'}} onTouchTap={() => this.deleteComment(comment.id)}>X</button></p>
                <p style={timestamp}>{comment.commentDate}</p>
                <h2 style={userName}>{comment.name}</h2>
                <p style={comment}>{comment.body}</p>
              </div>
            ))}
          </div>
          <div style={commentBox}>
              <p style={commentInputTitle}>Comment here:</p>
              <TextField style={commentInputBox}
                multiLine={true}
                rows={10}
                textareaStyle={styles.textareaStyle}
                underlineStyle={styles.underlineStyle}
                underlineFocusStyle={styles.underlineFocusStyle}
                onChange={this.handleComment}
                />
               <br />
               <RaisedButton style={styles.button2} type="submit"
               label="Submit" onTouchTap={this.storeComment}
               className="button-submit" primary={true} />
          </div>
        </main>
        </Responsive>
        <Footer style={footerStyle} />
      </div>

    );
  }
}
Single.contextTypes = {
  router: React.PropTypes.object
};
