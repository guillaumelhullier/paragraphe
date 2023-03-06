import React from "react";
import "./multipagraphe.css";
import { Link } from "react-router-dom";
import "./multipagraphe.css";

const Multiparagraphe = () => {
  return (
    <div>
      <Link to="/" className="suite">
        <h4 className="suite">Premier paragraphe</h4>
        <p className="suite">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nemo
          illo iste sequi labore temporibus doloremque doloribus odit. Repellat,
          voluptates.
        </p>
        <br />
        <h4 className="suite">Second paragraphe</h4>
        <p className="suite">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          dignissimos laboriosam modi sequi soluta non velit nihil repellat est
          ipsum.
        </p>
        <br />
        <h4>Troisième paragraphe</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At eos
          accusamus nihil alias ex laudantium adipisci ea necessitatibus
          voluptate beatae?
        </p>
      </Link>
    </div>
  );
};

export default Multiparagraphe;
