import React from 'react'

const Pagination = (props) => {
  const {posts, clickHandler, maxNumber} = props
  let i = 0;
  const arr = []
  const totalPages = Math.round(posts.length / maxNumber)
  for(i; i<totalPages; i++) arr.push(i + 1);

  return (
    <>
    <li className="page-item" key={i+1}><button className="page-link">Previous</button></li>
    {arr.map((a, index) => {
      return (
      <li className="page-item" key={a}><button className="page-link" data-page={a} onClick={clickHandler}>{a}</button></li>
      )
    })}
    
    <li className="page-item" key={i + 2}><button className="page-link">Next</button></li>
    </>
  )
}

export default Pagination