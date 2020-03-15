/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Utility/Fetch";

import PostList from "../../Components/PostList";
import Pagination from '../../Components/Pagination'

const cardColStyle = {
  display: "flex",
  flexWrap: "wrap"
};

const PostPage = () => {
  const dispatch = useDispatch()
  const inFlight = useSelector(state => state.postData.uiState.inFlight)
  const inSuccess = useSelector(state => state.postData.uiState.inSuccess)
  const inError = useSelector(state => state.postData.uiState.inError)
  const posts = useSelector(state => state.postData.response[0])

  const maxNum = 8;
  const [startNum, setStartNum] = useState(0)
  const [endNum, setEndNum] = useState(maxNum)

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const loadMore = () => {
    setStartNum(endNum);
    setEndNum(endNum + maxNum);
    console.log('startNum', startNum);
    console.log('endNum', endNum);
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
  const pageClickHandler = (e) => {
    e.preventDefault();
    const pageNumber = Number(e.currentTarget.dataset.page);
    const maxNumber = pageNumber * maxNum;
    setStartNum(maxNumber - maxNum);
    setEndNum(maxNumber);
  }
  return (
    <div className="postpage">
      <h1 className="display-2">Posts</h1>
      {inFlight && <h1>Loading....</h1>}
      {inSuccess && 
        <div className="card-columns" style={cardColStyle}>
          {postList(posts)}
          {endNum <= posts.length && <button type="button" className="btn btn-success" onClick={loadMore}>Load More</button> }
         
        </div>}
        {inSuccess && 
        <nav aria-label="Page navigation example">
            <ul className="pagination">
              {<Pagination posts={posts} maxNumber={maxNum} clickHandler={pageClickHandler}/>}
            </ul>
          </nav>}
      {inError && <h1>Got Error</h1>}
    </div>
  );
};
export default PostPage;
