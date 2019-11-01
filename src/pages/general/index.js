import React, { Component } from "react";
import { connect } from "react-redux";

import { getRandom } from "../../actions";

import "./general.css";

class General extends Component {
  componentDidMount() {
    this.props.getRandom();
  }

  render() {
    const { error, loading, randomData } = this.props;
   

    if (loading) {
      return <div>loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <div>
        <div className="general">
          <h1>
            API information returned by the 
            <a className="general-rout" href="https://api.publicapis.org/random">
               route
            </a>
          </h1>
          <div className="general-info">
            <p>Auth: {randomData.Auth}</p>
            <p>HTTPS: true{randomData.HTTPS}</p>
            <p>Api: {randomData.API}</p>
            <p> Description: {randomData.Description} </p>
            <p>Category: {randomData.Category}</p>
            <p>Cors: {randomData.Cors}</p>
            <p>Link: {randomData.Link}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    randomData: state.info.randomData,
    loading: state.info.loading,
    error: state.info.error,
    
  }),
  { getRandom },
 
)(General);
