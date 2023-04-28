import React from 'react'

const Search = () => {
  return (
    <div>
      <div className="col-lg-6 col-6 text-left">
  <form action="">
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search for products"
      />
      <div className="input-group-append">
        <span className="input-group-text bg-transparent text-primary">
          <i className="fa fa-search" />
        </span>
      </div>
    </div>
  </form>
</div>

    </div>
  )
}

export default Search
