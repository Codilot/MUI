import React from 'react'
import {
  applyUpdateResult, 
  applySetResult,  
  getHackerNewsUrl } from '../../Utils/pagination-utils'

import List from './List'


class Pagination extends React.Component {
  constructor(props) {
    super(props);
    //defaultstate
    this.state = {
      hits: [],
      offset: null,
      isLoading: false,
    };
  }

  //holt sich der value aus dem inputfeld
  onInitialSearch = (e) => {
    e.preventDefault();

    const { value } = this.input;

    if (value === '') {
      return;
    }

    this.fetchStories(value, 0)
  }

  //holt sich der nächste offset
  onPaginatedSearch = (e) => {
    console.log('hello from more button', this.state.offset)
    this.fetchStories(this.input.value, this.state.offset + 1)
}

  //fetch
  fetchStories = (value, offset) => {
    this.setState({ isLoading: true })
    this.setState({ offset: offset })
    console.log('hello from fetchStories',this.state.offset)
    fetch(getHackerNewsUrl(value, offset))
      .then(response => response.json())
      .then(result => this.onSetResult(result, offset))
  }

  //sets the state entweder ist es der erste -> setresult, sonst updateresult    
  onSetResult = (result, offset) =>
    offset === 0
      ? this.setState(applySetResult(result))
      : this.setState(applyUpdateResult(result))

  render() {
    return (
      <div className="offset">
        <div className="interactions">
          <form type="submit" onSubmit={this.onInitialSearch}>
            <input type="text" ref={node => this.input = node} />
            <button type="submit">Search</button>
          </form>
        </div>

        <List
          list={this.state.hits}
          isLoading={this.state.isLoading}
          //für den get more button musse der liste wissen was der offset ist
          offset={this.state.offset}
          //"get more" button function
          onPaginatedSearch={this.onPaginatedSearch}
        />
      </div>
    )
  }
}


export default Pagination
