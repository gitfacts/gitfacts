import React from 'react';
import './App.css';

export default class Panel extends React.Component {
  constructor(props) {
  		super(props);
  		this.state = {
        queryString: ""
      }
  }

  searchOnChange = (event) => {
    const queryString = event.target.value
    this.setState({queryString})
  }
  
  render() {
    return(
      <section className="Panel">
        <input
          type="text"
          placeholder="Search..."
          className="search"
          value={this.state.queryString}
          onChange={this.searchOnChange}
          />
        
      </section>
    );
  }
}
