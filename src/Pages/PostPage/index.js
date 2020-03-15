/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useReducer } from "react"
import { useDispatch, useSelector } from "react-redux"
import PropTypes from 'prop-types'
import { fetchData } from "../../Utility/Fetch"

import PostList from "../../Components/PostList"
import Pagination from '../../Components/Pagination'

const propTypes = {
  showLoadMore: PropTypes.bool,
  showPagination: PropTypes.bool,
  maxNumPost: PropTypes.number
}

const defaultProps = {
  showLoadMore: false,
  showPagination: true,
  maxNumPost: 0
}

const pageStyle = {
  cardColStyle: {
    display: "flex",
    flexWrap: "wrap"
  },
  paginationStyle: {
    justifyContent: "center",
    marginTop: "1em",
    marginBottom: "1em"
  },
  paginationNav: {
    width: "100%"
  },
  loadMorePanel: {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  }
}

const initialState = {
  prevBtn: true,
  nextBtn: false
}
const PostReducer = (state, action) => {
  switch(action.type) {
    case 'disablePrevious' :
      return {
        ...state,
        prevBtn: true
      }
    case 'enablePrevious' :
      return {
        ...state,
        prevBtn: false
      }
     case 'disableNext' :
       return {
         ...state,
         nextBtn: true
       }
      case 'enableNext' :
        return {
          ...state,
          nextBtn: false
        }

    default :
      return state
  }
}

const PostPage = (props) => {
  const { showLoadMore, showPagination, maxNumPost } = props

  const dispatcher = useDispatch()

  const inFlight = useSelector(state => state.postData.uiState.inFlight)
  const inSuccess = useSelector(state => state.postData.uiState.inSuccess)
  const inError = useSelector(state => state.postData.uiState.inError)
  const posts = useSelector(state => state.postData.response[0])

  const [state, dispatch] = useReducer(PostReducer, initialState)
  const {prevBtn, nextBtn} = state

  const [startNum, setStartNum] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [endNum, setEndNum] = useState(maxNumPost)
  const [startPage, setStartPage] = useState(0)
  const [endPage, setEndPage] = useState(maxNumPost)

  useEffect(() => {
    dispatcher(fetchData());
  }, [dispatcher]);

  const loadMore = () => {
    // setStartNum(0); // load all on one page
    setStartNum(endNum); // load page by page
    setEndNum(endNum + maxNumPost);
  }
  const postList = (posts) => {
    return posts.slice(startNum, endNum).map(post => (
      <PostList
        postId={post.id}
        postTitle={post.title}
        postBody={post.postBody}
        key={post.id}
      />
    ))
  }

  const disablePrevNextButton = (pageNumber, totalPages = 0) => {
    if(pageNumber === 1) {
      dispatch({type: 'disablePrevious'})
    } else {
      dispatch({type: 'enablePrevious'})
    }
    if((pageNumber === totalPages) || (pageNumber > totalPages)) {
      dispatch({type: 'disableNext'})
    }
    if(totalPages === 0) {
      dispatch({type: 'enableNext'})
    }
  }

  const pageClickHandler = (e) => {
    e.preventDefault();
    const pageNumber = Number(e.currentTarget.dataset.page);
    const totalPage = Number(e.currentTarget.dataset.totalpage);
    const maxNumber = pageNumber * maxNumPost;
    setStartNum(maxNumber - maxNumPost);
    setEndNum(maxNumber);
    setCurrentPage(pageNumber);
    disablePrevNextButton(pageNumber, totalPage)
  }

  const nextClickHandler = (e) => {
    e.preventDefault();
    const totalPages = Number(e.currentTarget.dataset.totalpage);
    setCurrentPage(currentPage + 1)
    const maxNumber = (currentPage + 1) * maxNumPost;
    setStartNum(maxNumber - maxNumPost);
    setEndNum(maxNumber)
    disablePrevNextButton(currentPage + 1, totalPages)
    
    if(currentPage % maxNumPost === 0) {
      setStartPage(currentPage)
      setEndPage(currentPage + maxNumPost)
    }
  }
  
  const prevClickHandler = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage - 1)
    const maxNumber = (currentPage - 1) * maxNumPost;
    setStartNum(maxNumber - maxNumPost);
    setEndNum(maxNumber)
    disablePrevNextButton(currentPage-1)
    if((currentPage - 1) % maxNumPost === 0) {
      setStartPage((currentPage - 1) - maxNumPost)
      setEndPage(currentPage - 1)
    }
  }
  return (
    <div className="postpage">
      <h1 className="display-2">Posts</h1>
      {inFlight && <h1>Loading....</h1>}
      {inSuccess && 
        <div className="card-columns" style={pageStyle.cardColStyle}>
          {postList(posts)}
          {showLoadMore && 
           endNum <= posts.length && <div className="load-more" style={pageStyle.loadMorePanel}><button type="button" className="btn btn-success" onClick={loadMore}>Load More</button></div> 
          }
          {showPagination && 
            <nav aria-label="Post Navigation" style={pageStyle.paginationNav}>
              <ul className="pagination" style={pageStyle.paginationStyle}>
                <Pagination 
                  posts={posts} 
                  startNum={startPage}
                  endNum={endPage}
                  maxNumber={maxNumPost}
                  currentPage={currentPage}
                  clickHandler={pageClickHandler}
                  isPreviousButtonDisabled={prevBtn}
                  isNextButtonDisabled={nextBtn}
                  prevClickHandler={prevClickHandler}
                  nextClickHandler={nextClickHandler}
                />
              </ul>
            </nav>
          }
        </div>}
      {inError && <h1>Got Error</h1>}
    </div>
  );
};

PostPage.propTypes = propTypes
PostPage.defaultProps = defaultProps

export default PostPage;
