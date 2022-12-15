import React from "react";

const ReviewForm = () => {
  const handleChange = () => {};

  return (
    <div>
      <div className="review-form">
        <h3>¡Comparte tu opinion sobre nuestro jardin!</h3>
        <label htmlFor="review">Deja tu mensaje</label>
        <textarea
          name="review"
          id="review"
          rows="5"
          placeholder=""
          onChange={handleChange}
          required
          maxLength={500}
        ></textarea>
      </div>
    </div>
  );
};

export default ReviewForm;
