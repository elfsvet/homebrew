import React from "react";
import "./index.css";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://github.com/elfsvet/homebrew"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
      </div>
      <p> &copy; 2022 YASJ, INC ALL RIGHTS RESERVED.</p>
    </div>
  );
}

export default Footer;
