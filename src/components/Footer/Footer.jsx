import React from "react";
import * as manifest from "../../../package.json";
import "./Footer.css";

const Footer = () => (
  <footer>
    <h5>{manifest.name} v.{manifest.version}</h5>
  </footer>
);

export default Footer;
