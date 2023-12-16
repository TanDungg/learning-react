import React from "react";
import { data } from "../../data";
import Youtube from "./Youtube";

const YoutubeList = (props) => {
  return (
    <div className="youtube">
      {data.map((dt) => {
        return (
          <Youtube
            image={dt.image}
            avatar={dt.avatar}
            title={dt.title}
            account={dt.account}
          />
        );
      })}
      {props.children}
    </div>
  );
};

export default YoutubeList;
