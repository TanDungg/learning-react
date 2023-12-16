import React from "react";

const Youtube = (props) => {
  return (
    <div className="item">
      <div className="image">
        <img src={props.image} alt="" />
      </div>
      <div className="footer">
        <div className="avatar">
          <img src={props.avatar} alt="" />
        </div>
        <div className="info">
          <h3 className="title">{props.title}</h3>
          <h4 className="account">{props.account}</h4>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
