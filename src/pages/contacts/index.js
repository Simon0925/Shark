import React, { Component } from "react";
import { connect } from "react-redux";

import { getContacts } from "../../actions";

import "./contacts.css";

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { error, loading, contacts } = this.props;
    

    if (loading) {
      return <div>loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

  const listItems = contacts.map((contact, i) => {
    
    return(
     
  <div  className="contact-box"  key={i}>
    <div  className="contact-box-content">
    <p>Name: {contact.name.title}<span> {contact.name.first}</span> <span> {contact.name.last}</span></p>
    <p>Email: {contact.email}</p>
    <p>City: {contact.location.city}</p>
    </div>
    <div className="contact-box-img">
      <img src={contact.picture.large}/>
    </div>

  </div>
  )
});



    return (
      <div className="contact-info">
         <h1 className="contact-h1">Contacts</h1>
        <div className="contact-boxs">
         
      
            <ul>{listItems}</ul>;
        
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    contacts: state.info.contacts,
    loading: state.info.loading,
    error: state.info.error,
   
  }),
  { getContacts },
 
)(Contacts);
