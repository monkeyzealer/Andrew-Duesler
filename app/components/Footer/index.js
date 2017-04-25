/**
*
* Footer
*
*/

import React from 'react';

class Footer extends React.PureComponent {
  render() {
    const footer={
      background: "url(http://bgfons.com/upload/wood_texture3753.jpg)",
      backgroundSize: "100% 100%",
      color: "white",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      fontSize: "14px",
      fontFamily: "Arial",
      borderTop: "1px solid black",
    }
    const footerInfo={
      width: "50%",
      display: "flex",
      flexDirection: "column",
    };
    const footLeft={
      paddingTop: "0.2em",
      paddingBottom: "0.2em",
      paddingLeft: "10%",
      textAlign: "left",
    };
    const footRight={
      paddingTop: "0.2em",
      paddingBottom: "0.5em",
      paddingRight: "10%",
      textAlign: "right",
    };

    return (
      <footer style={footer}>
        <div style={footerInfo}>
        <p style={footLeft}> &copy; Code Monkey Web Design 2017 </p>
        </div>
        <div style={footerInfo}>
        <p style={footRight}> Powered by Code Monkey Web Design</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
