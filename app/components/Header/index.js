/**
*
* Header
*
*/

import React from 'react';
import NavBar from 'components/NavBar';
import {Link} from 'react-router';

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
    const contact={
      textAlign: "center",
      width: "100%",
      background: "url(http://bgfons.com/upload/wood_texture3753.jpg)",
      backgroundSize: "100% 100%",
      fontSize: "20px",
      color: "snow",
      borderBottom: "2px solid black",
      }
    return (
      <header>
        <div style={contact}>Contact Info - Phone number: (706) 699-6533 Email: <Link className="ContactEmail" to="mailto:monkeyzealer@gmail.com">monkeyzealer@gmail.com</Link></div>
        <div style={headerbackground}>
        <h1 style={headerTitle}><img style={headerImg} src="http://i1065.photobucket.com/albums/u395/monkeyzealer/logocm_zpsbhqtnfuc.png" /></h1>
        </div>
        <NavBar />
      </header>
    );
  }
}

export default Header;
