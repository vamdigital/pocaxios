import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape([])),
  maxNumber: PropTypes.number,
  clickHandler: PropTypes.func,
  prevClickHandler: PropTypes.func,
  nextClickHandler: PropTypes.func,
  isPreviousButtonDisabled: PropTypes.bool,
  isNextButtonDisabled: PropTypes.bool,
}

const defaultProps = {
  posts: [],
  maxNumber: 10,
  clickHandler: () => {},
  prevClickHandler: () => {},
  nextClickHandler: () => {},
  isPreviousButtonDisabled: true,
  isNextButtonDisabled: false
}

const Pagination = (props) => {
  const {posts, maxNumber, clickHandler, prevClickHandler, nextClickHandler, isPreviousButtonDisabled, isNextButtonDisabled} = props
  let i = 0;
  const arr = []
  const totalPages = Math.round(posts.length / maxNumber)
  for(i; i<totalPages; i++) arr.push(i + 1);

  return (
    <>
      <li className="page-item" key={i+1}>
        <button 
          className="page-link"
          disabled={isPreviousButtonDisabled} 
          onClick={prevClickHandler}>
            Previous
        </button>
      </li>
      {arr.map((a, index) => {
        return (
        <li className="page-item" key={a}><button className="page-link" data-page={a} data-totalpage={totalPages} onClick={clickHandler}>{a}</button></li>
        )
      })}
      <li className="page-item" key={i + 2}>
        <button className="page-link" onClick={nextClickHandler} data-totalpage={totalPages} disabled={isNextButtonDisabled} >
          Next
        </button>
      </li>
    </>
  )
}

Pagination.propTypes = propTypes
Pagination.defaultProps = defaultProps
export default Pagination