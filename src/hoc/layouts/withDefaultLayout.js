import React from "react";

import Header from "../../components/header";

const defaultLayout = (Component) => (props) => (
  <div>
    <Header />
    <div className="main-container">
      <Component {...props} />
    </div>
  </div>
);

export default defaultLayout;
