import React from 'react'

const List = ({ list, offset, onPaginatedSearch, isLoading }) =>
  <div className="list">
    {list.map(item => <div className="list-row" key={item.objectID}>
      <a href={item.url}>{item.title}</a>
    </div>)}

    <div>
      {isLoading && <span>Loading...</span>}
    </div>
    
    <div>
      {
        (offset !== null && !isLoading) &&
        <button
          type="submit"
          onClick={onPaginatedSearch}
        >
          Get next offset listitems
          
        </button>
      }
      <p>{`current offset ${offset}`}</p>
    </div>
  </div>

export default List;
