/**
*
* Header
*
*/

import React from 'react';
import NavBar from 'components/NavBar';

class Header extends React.PureComponent {
  render() {
    const header={
      maxWidth: "100%",
      width: "100%",
      height: "auto",
      maxHeight: "300px"
    };
    const headerbackground={
      maxWidth: "100%",
      width: "100%",
      height: "auto",
      minHeight: "400px",
      display: "flex",
      alignItems: "center",
      background: "url(http://i.imgur.com/bPQNyWN.jpg)",
      backgroundSize: "100% 100%",
    };
    const headerTitle={
          Aligncontent: "center",
          height: "100%",
          margin: "auto",
          color: "white",
          fontSize: "4.5em",
          lineHeight: "normal",
          paddingBottom: "20px",
          textAlign: "center",
    };
    const headerImg={
      width: "90%",
      height: "auto",
      display: "flex",
      margin: "0 auto",
    };
    const headercolor1={
      color: "#C2B280",
      textShadow: "moccasin 1px 1px 0px, moccasin -1px -1px 0px, moccasin 1px -1px 0px, moccasin -1px 1px 0px, moccasin 0px 1px 0px, moccasin 1px 0px 0px, moccasin 0px -1px 0px, moccasin -1px 0px 0px, rgb(0, 0, 0) 4px 4px 3px",
    }
    const headercolor2={
      color: "#5d553c",
      textShadow: "1px 1px 0 #C19A6B, -1px -1px 0 #C19A6B, 1px -1px 0 #C19A6B, -1px 1px 0 #C19A6B, 0px 1px 0 #C19A6B, 1px 0px 0 #C19A6B, 0px -1px 0 #C19A6B, -1px 0px 0 #C19A6B, 4px 4px 3px #000",
    }
    return (
      <header>
        <div style={headerbackground}>
        <h1 style={headerTitle}><img style={headerImg} src="http://i1065.photobucket.com/albums/u395/monkeyzealer/logocm_zpsmpucxtnh.png" /></h1>
        </div>
        <NavBar />
      </header>
    );
  }
}

export default Header;
