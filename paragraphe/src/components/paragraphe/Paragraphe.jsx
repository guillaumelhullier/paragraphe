import React from "react";
import { Link } from "react-router-dom";

const Paragraphe = () => {
  return (
    <div>
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
