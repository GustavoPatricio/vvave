import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footerreg">
          <small> vvave® </small>
        </div>
        <div className="footerRedeSociais">
          <img src="assets/images/icons/fb.png" className="footerfb" />
          <img src="assets/images/icons/twitter.png" className="footerfb" />
          <img src="assets/images/icons/insta.png" className="footerinsta" />
        </div>
      </footer>
    );
  }
}

export default Footer;
