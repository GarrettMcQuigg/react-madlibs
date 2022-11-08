import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import './MadlibForm.css';

const MadlibForm = ({ newMadlib }) => {
  const [formData, setFormData] = useState({
    noun1: "",
    noun2: "",
    adjective: "",
    color: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const getInput = (e) => {
    e.preventDefault();
    newMadlib({
      ...formData,
      id: uuid(),
    });
    setFormData({
      noun1: "",
      noun2: "",
      adjective: "",
      color: "",
    });
  };

  return (
    <div className="Madlib">
      <h1>Madlibs!</h1>
      <form className="Madlib-form" onSubmit={getInput}>
        <div>
          <input
            onChange={handleChange}
            id="noun1"
            type="text"
            name="noun1"
            value={formData.noun1}
            placeholder="noun"
            required
          />
        </div>

        <div>
          <input
            onChange={handleChange}
            id="noun2"
            type="text"
            name="noun2"
            value={formData.noun2}
            placeholder="another noun"
            required
          />
        </div>

        <div>
          <input
            onChange={handleChange}
            id="adjective"
            type="text"
            name="adjective"
            value={formData.adjective}
            placeholder="adjective"
            required
          />
        </div>

        <div>
          <input
            onChange={handleChange}
            id="color"
            type="text"
            name="color"
            value={formData.color}
            placeholder="color"
            required
          />
        </div>

        <button>Get Story</button>
      </form>
    </div>
  );
};

export default MadlibForm;
