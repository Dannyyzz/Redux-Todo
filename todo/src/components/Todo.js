import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, text }) => (
  <li
    onClick={onClick}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func,
  completed: PropTypes.bool,
  text: PropTypes.string
}

export default Todo