import React from "react";
import PropTypes from 'prop-types';

const propTypes = {
  postId: PropTypes.number,
  postTitle: PropTypes.string,
  postBody: PropTypes.string
}

const defaultProps = {
  postId: null,
  postTitle: '',
  postBody: ''
}

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '25%',
}

const PostList = (props) => {
  const { postId, postTitle, postBody } = props;
  return (
    <div className="card" style={cardStyle}>
      <h5 className="card-header">Post: {postId}</h5>
      <div className="card-body">
        <h5 className="card-title">{postTitle}</h5>
        <p className="card-text">
          {postBody}
        </p>
      </div>
    </div>
  );
};

PostList.propTypes = propTypes
PostList.defaultProps = defaultProps

export default PostList;
