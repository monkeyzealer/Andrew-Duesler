/*
 *
 * Home
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

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';


export default class Home extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      articles:[],

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
      background: "rgba(255, 255, 255, 0.3)",
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
        color: "black",
        border: "1px solid black"
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
    const flexGridmobile ={
      margin: "0 auto",
      padding: "0",
      display: "-webkit-flex",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      width: "95%",
      marginBottom: "20px"
    };
    const flexGridLiMobile ={
      position: "relative",
      listStyle: "none",
      display: "-webkit-flex",
      display: "flex",
      flexDirection: "column",
      margin: "0",
      flex: "auto",
      width: "100%",  /* <-- more control */
    };
    const mainMobile={
      width: "100%",
      background: "url(http://i1065.photobucket.com/albums/u395/monkeyzealer/wood_background_zps0b8n5qop.gif)",
      backgroundSize: "100% 100%",
    };
    const contentheaderMobile={
      textAlign: "center",
      width: "100%",
      height: "50px",
    };
    const userAvatarMobile={
      width: "100%",
      height: "auto",
    };
    const avatarMobile={
      width: "100%",
      height: "300px",
      background: "rgba(255, 255, 255, 0.3)",
      position: "relative",
      padding: "0",
      borderRadius: "0",
    };
    const postContentMoblie={
      width: "100%",
      height: "auto",
      overflow: "hidden",
      paddingLeft: "0.5em",
      paddingRight: "0.5em"
    };
    const blogPostMobile={
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        width: "95%",
        height: "auto",
        border: "1px solid black",
        paddingBottom: "20px",
        margin: "0.5em auto",
        padding: "10px",
    };
    const Container={
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "100vh"
    };
    const footerStyle ={
      alignSelf: "flex-end",
    };

    return (
      <div style={Container}>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
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
          <Responsive maxDeviceWidth={1023}>
          <main style={mainContainer}>
              <div style={mainMobile}>
                <h1 style={contentheader}> Welcome to My Blog </h1>
                <ui style={flexGridmobile}>
                  <li style={flexGridLiMobile}>
                {this.state.articles.map((article,i) => (
                <Link to={`/single/${article.id}`} style={blogPostMobile}>
                  <div style={userAvatarMobile}>
                    <Avatar
                        src={article.image}
                        style={avatarMobile}
                      />
                  </div>
                    <div style={postContentMoblie}>
                      <h3>{article.subject}</h3>
                      <span>{article.body}</span>
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
