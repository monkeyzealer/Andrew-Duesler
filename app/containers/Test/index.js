/*
 *
 * Test
 *
 */

 import React from 'react';
 import Helmet from 'react-helmet';
 import {Link} from 'react-router';
 import Avatar from 'material-ui/Avatar';
 import FileFolder from 'material-ui/svg-icons/file/folder';
 import FontIcon from 'material-ui/FontIcon';
 import List from 'material-ui/List/List';
 import ListItem from 'material-ui/List/ListItem';
 import Footer from 'components/Footer';
 import NavBar from 'components/NavBar';
 import Header from 'components/Header'
 import Responsive from 'react-responsive';

export default class Test extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      articles:[]
    }
  }
  componentWillMount(){
    fetch("http://localhost:8000/api/getArticles")
    .then(function(res){
      return res.json()
    })
    .then(function(json){
      this.setState({
        articles:json
      })
    }.bind(this))
  }
  render() {
    const footerStyle ={
      alignSelf: "flex-end",
    };
    const mainContainer={
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      flexGrow: "1",
    }
    const main={
      width: "100%",
      background: "url(http://i1065.photobucket.com/albums/u395/monkeyzealer/wood_background_zps0b8n5qop.gif)",
      backgroundSize: "100% 100%",
    };
    const flexGrid ={
      margin: "0 auto",
      padding: "0",
      display: "-webkit-flex",
      display: "flex",
      flexWrap: "wrap",
      width: "95%",
      marginBottom: "20px"
    };
    const flexGridLi ={
      position: "relative",
      listStyle: "none",
      display: "-webkit-flex",
      display: "flex",
      margin: "0",
      flex: "auto",
      width: "33.333%",  /* <-- more control */
    };
    const contentheader={
      textAlign: "center",
      width: "100%",
      fontSize: "3em",
    };
    const userAvatar={
      border: "0",
      height: "auto",
      maxWidth: "100%",
    };
    const avatar={
      width: "100%",
      height: "300px",
      background: "white",
      position: "relative",
      padding: "0",
      borderRadius: "0",
    };
    const postContent={
      width: "100%",
      height: "auto",
      overflow: "hidden",
      padding: "0.5em"
    };
    const subjectTitle={
    marginBottom: "0",
    };

    const blogPost={
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        width: "100%",
        margin: "0.5em",
        textDecoration: "none",
        color: "black"
    };
    const content={
      padding: "5px"
    };
    const chatBox={
      background: "url(http://i1065.photobucket.com/albums/u395/monkeyzealer/wood_background-Recovered_zpspkq9xazm.gif)",
      color: "white",
      backgroundSize: "100% 100%",
      height: "auto"
    };
    return (
      <div>
        <Helmet title="Test" meta={[ { name: 'description', content: 'Description of Test' }]}/>
        <Header />
        <Responsive minDeviceWidth={1024}>
          <main style={mainContainer}>
              <div style={main}>
                <h1 style={contentheader}>Welcome to My Blog</h1>
                  <ui style={flexGrid}>
                    <li style={flexGridLi}>
                  {this.state.articles.map((article,i) => (
                    <Link to={`/single/${article.id}`} style={blogPost}>
                      <div style={userAvatar}>
                        <Avatar
                            src={article.image}
                            style={avatar}
                            className="avatar"
                          />
                      </div>
                      <div style={postContent}>
                        <h3 style={subjectTitle}> {article.subject} </h3>
                        <span> {article.body}</span>
                      </div>
                    </Link>
                  ))}
                  </li>
                </ui>
                <div style={chatBox}>
                <div id="chatbox"><iframe src="http://codemonkey.ishoutbox.com" width="100%" height="555" frameborder="0" valign="middle" allowtransparency="true"></iframe></div>
                </div>
              </div>
            </main>
          </Responsive>
        <Footer style={footerStyle} />
      </div>
    );
  }
}
