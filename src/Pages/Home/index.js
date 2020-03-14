import React from 'react';
import PropTypes from 'prop-types'

const propTypes = {
  title: PropTypes.string
}

const defaultProps = {
  title: 'This is my Home, where my heart is'
}

const HomePage = (props) => {
  const { title } = props;
  return (
    <div>
      <h3 className="display-4"> {title} </h3>
    </div>
  )
}

HomePage.propTypes = propTypes
HomePage.defaultProps = defaultProps

export default HomePage