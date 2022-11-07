import React, { useState } from "react";
import Madlib from "./Madlib";
import MadlibForm from "./MadlibForm";

const MadlibRender = () => {
  const [madlibs, setMadlibs] = useState([]);
  const create = (madlibProp) => {
    setMadlibs((madlib) => [...madlib, madlibProp]);
  };

  const renderedMadlib = madlibs.map((madlib) => (
    <Madlib
      key={madlib.id}
      id={madlib.id}
      noun1={madlib.noun1}
      noun2={madlib.noun2}
      adjective={madlib.adjective}
      color={madlib.color}
    />
  ));

  return (
    <div>
      <MadlibForm newMadlib={create} />
      {renderedMadlib}
    </div>
  );
};

export default MadlibRender;
