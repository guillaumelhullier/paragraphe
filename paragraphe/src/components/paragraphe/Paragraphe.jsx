import React from "react";
import { Link } from "react-router-dom";
import "./pargraphe.css";

const Paragraphe = () => {
  return (
    <div>
      <h4>Premier paragraphe</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum alias
        rerum quis ut perferendis optio, ullam unde inventore numquam nesciunt?
      </p>
      <Link to="/about" className="suite">
        Lire la suite
      </Link>
    </div>
  );
};

export default Paragraphe;
