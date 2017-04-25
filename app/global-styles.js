import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  textarea {
	background: rgba(0, 0, 0, 0.3) !important;
  margin-top: 0;
}
  nav a {
  	margin-left: .5em;
  	margin-right: .5em;
  	font-weight: bold;
  	text-decoration: none;
    color: tan;
  }
  nav a:hover {
    color: #C8B560;
  }
  .avatar:hover {
    filter: alpha(opacity=9000);
    opacity: 0.90;
    filter: alpha(opacity=90);
  }
  button {
	background: #3E2723 !important;
  color: #C8B560 !important;
}
button:hover {
background: rgba(33, 24, 8, 1) !important;
color: #C8B560 !important;
}
  nav {
    text-align: center;
    padding-top: 5px;
    padding-bottom: 5px;
    background: url(http://bgfons.com/upload/wood_texture3753.jpg);
    background-size: 100% 100% !important;
  }
  div#chatbox {
    width: 100%;
    height: auto;
    background: rgba(0, 0, 0, 0.298039);
}
a.ContactEmail {
    color: palegoldenrod;
    text-decoration: none;
}
a.ContactEmail:hover {
    color: #C8B560;
}
iframe {
    border: none;
}

  footer p {
    margin-bottom: 0;
  }
  footer  {

  }
`;
