import React from "react";

const withAuthLayout = (Component) => (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={{ flex: "1 0 auto" }}>
        <div style={{ padding: "20px" }}>
          <Component {...props} />
        </div>
      </div>
    </div>
  );
};

export default withAuthLayout;
