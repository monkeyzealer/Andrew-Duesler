/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import Header from 'components/Header';
import Responsive from 'react-responsive';

export default class About extends React.PureComponent {
  render() {
    const mainContainer={
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      flexGrow: "1"
    }
    const sidebar={
      width: "25%",
      background: "url(http://i1065.photobucket.com/albums/u395/monkeyzealer/wood_background-Recovered_zpspkq9xazm.gif)",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      color: "white",
      backgroundSize: "100% 100%",
    };
    const main={
      width: "75%",
      background: "url(http://i1065.photobucket.com/albums/u395/monkeyzealer/wood_background_zps0b8n5qop.gif)",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      backgroundSize: "100% 100%",
    };
    const bioHeader={
      textAlign: "center",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      marginBottom: "0"
    };
    const Bio={
      width: "40%",
      margin: ".5em auto 0 auto",
      display: "flex",
      flexDirection: "column",

    };
    const bioContent={
      width: "100%",
      textAlign: "center",
      margin: "1em auto",
      paddingLeft: "0.5em",
      paddingRight: "0.5em",
      display: "flex",
      flexDirection: "column",
    };
    const myBlog={
      width: "90%",
      maxWidth: "100%",
      height: "auto",
      margin: ".5em auto",
      display: "flex",
      flexDirection: "column",
    };
    const myBlogBanner={
      width: "95%",
      marginBottom: "10px",
      maxWidth: "100%",
      height: "auto",
      maxHeight: "300px",
      margin: "15px auto",
    };
    const About={
      width: "100%",
      margin: "1em auto",
      paddingLeft: "0.5em",
      paddingRight: "0.5em",
      display: "flex",
      flexDirection: "column",
    };
    const Container={
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "100vh"
    };
    const footerStyle ={
      alignSelf: "flex-end"
    };

    const sidebarMobile={
      width: "100%",
      background: "#5d553c",
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      color: "white",
    };
    const mainMobile={
      width: "100%",
      background: "#C2B280",
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
    };
    const mainContainerMobile={
      width: "100%",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      flexGrow: "1"
    }
    const BioMobile={
      width: "70%",
      height: "auto",
      maxWidth: "70%",
      margin: "0 auto 0 auto",
      display: "flex",
      flexDirection: "column",
    };
    const bioInfoMobile={
      textAlign: "center",
      width: "35%",
      height: "200px",
      display: "flex",
      flexDirection: "column",
      marginBottom: "0",
      marginTop: "0",
    };
    const bioHeaderMobile={
      textAlign: "center",
      width: "90%",
      height: "50px",
      display: "flex",
      flexDirection: "column",
      margin: "15px auto",
      marginBottom: "15px",
      borderBottom: "1px solid white"
    };
    const bioContainerMobile={
        width: "100%",
        height: "auto",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "row",
    };
    const bioContentMobile={
      width: "65%",
      height: "auto",
      maxWidth: "100%",
      margin: "0 auto 1em auto",
      paddingLeft: "0.5em",
      paddingRight: "0.5em",
      display: "flex",
      flexDirection: "column",
    };
    const myBlogMobile={
      width: "90%",
      maxWidth: "100%",
      height: "auto",
      margin: ".5em auto",
      display: "flex",
      flexDirection: "column",
    };
    const myBlogBannerMobile={
      width: "95%",
      marginBottom: "10px",
      maxWidth: "100%",
      height: "auto",
      maxHeight: "300px",
      margin: "15px auto",
    };
    const AboutMobile={
      width: "100%",
      margin: "1em auto",
      paddingLeft: "0.5em",
      paddingRight: "0.5em",
      display: "flex",
      flexDirection: "column",
    };

    return (
      <div style={Container}>
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>
        <Header />
        <Responsive minDeviceWidth={1024}>
        <main style={mainContainer}>
          <div style={sidebar}>
              <h2 style={bioHeader}> My Bio <br /><img style={Bio} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/13406837_1059266167461758_5025313612747858041_n.jpg?oh=8b8f6bdb42ce6bdf7c169d92ac771e25&oe=595B2028" />Andrew Duesler</h2>
              <p style={bioContent}>I Graduated North Georgia tech with a associates degree in Web Development.
              I have about 5 years of work experience working for Alpha Creative Solution.
              What I did at Alpha Creative Solutions was build wordpress sites for alot of different small businesses and schools around Augusta.
              </p>
          </div>
          <div style={main}>
            <p style={About}><img style={myBlogBanner} src="http://i1065.photobucket.com/albums/u395/monkeyzealer/blog-banner_zpsmnqclkxu.gif" />
            I made this blog to help and share my coding experience with others.
            I Started blogging after I began working for Alpha Creative Solutions.
            Alpha Creative Solutions is a web design company that works along side a non-profit organization called I-Care.
            I-Care helps women that were victims  of sex trafficking and helps get them away from that life style.
            What they do is get them in school or helps them find a job.
            Which we in Alpha Creative Solutions would help by teaching the women how to blog and maintain a blog.
            We would also ask our clients if they need a social media manager or someone to keep their blogs up and
            running. While helping and teaching the women to blog i decided to start my own blog. </p>
          </div>
        </main>
        </Responsive>
        <Responsive maxDeviceWidth={1023}>
        <main style={mainContainerMobile}>
          <div style={sidebarMobile}>
                <h2 style={bioHeaderMobile}> My Bio </h2>
                  <div style={bioContainerMobile}>
                  <h3 style={bioInfoMobile}><img style={BioMobile} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/13406837_1059266167461758_5025313612747858041_n.jpg?oh=8b8f6bdb42ce6bdf7c169d92ac771e25&oe=595B2028" />Andrew Duesler</h3>
                  <p style={bioContentMobile}>I Graduated North Georgia tech with a associates degree in Web Devolpment. I have about 5 years of work experience working for Alpha Creative Solution. What I did at Alpha Creative Solutions was build wordpress sites for many different small businesses and schools around augusta.
                  </p>
            </div>
          </div>
          <div style={mainMobile}>
            <p style={AboutMobile}><img style={myBlogBanner} src="http://i1065.photobucket.com/albums/u395/monkeyzealer/blog-banner_zpsmnqclkxu.gif" />
            I made this blog to help and share my coding experience with others.
            I Started blogging after I began working for Alpha Creative Solutions.
            Alpha Creative Solutions is a web design company that works along side a non-profit organization called I-Care.
            I-Care helps women that were victims  of sex trafficking and helps get them away from that life style.
            What they do is get them in school or helps them find a job.
            Which we in Alpha Creative Solutions would help by teaching the women how to blog and maintain a blog.
            We would also ask our clients if they need a social media manager or someone to keep their blogs up and
            running. While helping and teaching the women to blog i decided to start my own blog. </p>
          </div>
        </main>
        </Responsive>
        <Footer style={footerStyle} />
      </div>
    );
  }
}
