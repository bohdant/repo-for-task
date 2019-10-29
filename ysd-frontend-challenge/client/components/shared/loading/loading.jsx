import React from "react";
const Loading = () => {
  return (
    <div className="loading-icon-container">
      <h3 className="ys-secondary-title">Loading...</h3>
      <div className="loading-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ys-icon loading-icon"
        >
          <use xlinkHref="/assets/svg/sprite/icons.svg#ys-icon-update"></use>
        </svg>
      </div>
    </div>
  );
};

export default Loading;
