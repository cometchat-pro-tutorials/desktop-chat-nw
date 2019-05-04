import React from "react";
import * as manifest from "../../package.json";

const Footer = () => (
  <footer>
    <h5 style={{textAlign: 'center'}}>{manifest.name} v.{manifest.version}</h5>
  </footer>
);

export default Footer;
