import React from "react";
import { connect } from "react-redux";

import "./profile.css";

const Profile = ({ user }) => {
  

  return (
    <div>
      <div className="general">
        <h1>Profile</h1>
        <div className="general-info">
          {user && (
            <div>
              <div>Gender: {user.gender}</div>
              <div>Email: {user.email}</div>
              <div>Phone: {user.phone}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({
  user: state.info.user
}))(Profile);