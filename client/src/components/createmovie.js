import React, { useState } from "react";

const CreateMovie = props => {
  const initialData = { id: null, name: "", bio: ""};
  const [Movie, setMovie] = useState(initialData);

  const onInputChange = event => {
    const { name, value } = event.target;

    setMovie({ ...Movie, [name]: value });
  };

  const cancel = event => {
    event.preventDefault();
    props.setActiveModal({ active: false });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!Movie.name || !Movie.bio) return;
        props.createMovie(Movie);
      }}
    >
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={Movie.name}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label>Bio</label>
        <input
          type="text"
          name="bio"
          value={Movie.bio}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label>Producer</label>
        <input
          type="producer"
          name="producer"
          value={Movie.producer}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group form-group--actions">
        <button className="primary-btn">Create</button>
        <button className="cancel-btn" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CreateMovie;