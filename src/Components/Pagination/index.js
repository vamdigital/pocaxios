import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape([])),
  startNum: PropTypes.number,
  endNum: PropTypes.number,
  maxNumber: PropTypes.number,
  currentPage: PropTypes.number,
  clickHandler: PropTypes.func,
  prevClickHandler: PropTypes.func,
  nextClickHandler: PropTypes.func,
  isPreviousButtonDisabled: PropTypes.bool,
  isNextButtonDisabled: PropTypes.bool,
}

const defaultProps = {
  posts: [],
  startNum: 0,
  endNum: 0,
  currentPage: 1,
  maxNumber: 10,
  clickHandler: () => {},
  prevClickHandler: () => {},
  nextClickHandler: () => {},
  isPreviousButtonDisabled: true,
  isNextButtonDisabled: false
}

const Pagination = (props) => {
  const {posts, startNum, endNum, maxNumber, currentPage, clickHandler, prevClickHandler, nextClickHandler, isPreviousButtonDisabled, isNextButtonDisabled} = props
  let i = 0;
  const arr = []
  const totalPages = posts.length / maxNumber
  for(i; i<totalPages; i++) arr.push(i + 1);

  return (
    <>
      <li className="page-item" key={i+1}>
        <button 
          className="page-link"
          disabled={isPreviousButtonDisabled} 
          data-totalpage={totalPages} 
          onClick={prevClickHandler}>
            Previous
        </button>
      </li>
      {arr.slice(startNum,endNum).map((a, index) => {
        return (
        <li className={`page-item ${currentPage === a  && "active"}`} key={a}><button className="page-link" data-page={a} data-totalpage={totalPages} onClick={clickHandler}>{a}</button></li>
        )
      })}
      <li className="page-item" key={i + 2}>
        <button 
          className="page-link" 
          onClick={nextClickHandler} 
          data-totalpage={totalPages} 
          disabled={isNextButtonDisabled} 
        >
          Next
        </button>
      </li>
    </>
  )
}

Pagination.propTypes = propTypes
Pagination.defaultProps = defaultProps
export default Pagination