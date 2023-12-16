import React, { useState } from "react";

const Toggle = () => {
  const [on, setOn] = useState(false);
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`}>
        <div
          className={`spinner ${on ? "active" : ""}`}
          onClick={() => setOn(!on)}
        ></div>
      </div>
    </div>
  );
};

export default Toggle;
