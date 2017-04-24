/**
*
* NavBar
*
*/

import React from 'react';
import {Link} from 'react-router';
import Responsive from 'react-responsive';
import Menu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

class NavBar extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      menuOpen:false,
      siteName:"http://localhost:3000",
      user:JSON.parse(sessionStorage.getItem("user"))
    }
  }

  handleMenu = () => {
    if(this.state.menuOpen == false)
    {
      this.setState({
        menuOpen:true
      })
    }
    else if(this.state.menuOpen == true)
    {
      this.setState({
        menuOpen:false
      })
    }
  }

  showMenu = () => {

    const nav = {
      display:"flex",
      flexDirection:"column",
      alignSelf:'center',
      margin: "0 auto",
      padding: "0",
    }

    const navLink = {
      margin:'5px',
      border:'1px solid #999999',
      padding:'5px',
    };
    const iconButton = {
    }

    var dashLink = <Link activeStyle={{color:'#C8B560'}} to="/dashboard" style={navLink}>Dashboard</Link>;

    var signOutLink = <Link activeStyle={{color:'#C8B560'}} onTouchTap={() => this.signOut()} style={navLink}>Sign Out</Link>;

    var signInLink = "";

    var _this = this

    if(this.state.user === null)
    {
     dashLink = "";
     signOutLink = "";
     signInLink = <Link activeStyle={{color:'#C8B560'}} to="/auth" style={navLink}>Sign In</Link>;
    }
    else {
      signInLink = "";
      if(this.state.user.roleID !== 1) {
        dashLink = "";
      }
    }

    if(this.state.menuOpen == true)
    {
      return(
        <nav style={nav}>
          <Link activeStyle={{color:'#C8B560'}} to="/" style={navLink}>Home</Link>
          <Link activeStyle={{color:'#C8B560'}} to="/about" style={navLink}>About</Link>
          {dashLink}
          {signOutLink}
          {signInLink}
        </nav>
      )
    }
  }
  signOut = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    alert("Good Riddens");
    this.context.router.push(this.props.location.pathname);
  }


  render() {

    const navBar = {
      height:"50px",
      width:"100%",
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      backgroundSize: "100% 100% !important",
      background: "url(http://bgfons.com/upload/wood_texture3753.jpg)",
    }

    const titleStyle = {
      fontSize:"3em",
      fontVariant:"small-caps",
      color: "blue",
    };
    const nav = {
      display:"flex",
      flexDirection:"row",
      alignSelf:'center',
      margin: "0 auto",
      padding: "0",
      background: "none",
      backgroundSize: "100% 100% !important",

    };
    const navLink = {
      margin:'5px',
      padding:'5px',
    };
    const styles = {
      iconStyle: {
        color: "#C8B560",
      },
    };

    var signOutLink = <Link activeStyle={{color:'#C8B560'}} onTouchTap={() => this.signOut()} style={navLink}>Sign Out</Link>;

    var dashLink = <Link activeStyle={{color:'#C8B560'}} to="/dashboard" style={navLink}>Dashboard</Link>;

    var signInLink = "";

    //if user isnt logged in it will show the Sign Link
    if(this.state.user === null)
    {
     dashLink = "";
     signOutLink = "";
     signInLink = <Link activeStyle={{color:'#C8B560'}} to="/auth" style={navLink}>Sign In</Link>;
    }
    //if user is logged in it will show the dashboard and sign out links
    else {
      signInLink = "";
      if(this.state.user.roleID !== 1) {
        dashLink = "";
      }
    }


    return (
      <div>
        <Responsive minDeviceWidth={1024}>
          <nav style={navBar}>
            <div style={titleStyle}></div>
            <nav style={nav}>
              <Link activeStyle={{color:'#C8B560'}} to="/" style={navLink}>Home</Link>
              <Link activeStyle={{color:'#C8B560'}} to="/about" style={navLink}>About</Link>
              {dashLink}
              {signOutLink}
              {signInLink}
            </nav>
          </nav>
        </Responsive>

        <Responsive maxDeviceWidth={1023}>
          <nav style={navBar}>
            <div style={titleStyle}>{this.props.chicken}</div>
            <nav style={nav}>
              <IconButton
                iconStyle={styles.iconStyle}
                onTouchTap={this.handleMenu}>
                <Menu/>
              </IconButton>
            </nav>
          </nav>
          {this.showMenu()}
        </Responsive>
      </div>
    );
  }
}

NavBar.contextTypes = {
  router: React.PropTypes.object
};
export default NavBar;
