import React from "react";

function Footer() {
  var curr_Year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ {curr_Year}</p>
    </footer>
  );
}

export default Footer;
