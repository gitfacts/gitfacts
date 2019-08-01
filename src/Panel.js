import React from 'react';
import './App.css';

export default class Panel extends React.Component {
  constructor(props) {
  		super(props);
  		this.state = {

      }
  }


  render() {
    return(
      <section className="Panel">
        <input
          type="text"
          placeholder="Search..."
          className="search"/>
        
      </section>
    );
  }
}
