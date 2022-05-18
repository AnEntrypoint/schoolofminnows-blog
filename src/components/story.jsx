import React from 'react'

import PropTypes from 'prop-types'

import Post from './post'
import './story.css'
import ReactMarkdown from 'react-markdown'

const Story = (props) => {
  return (
    <div className="story-story">
    </div>
  )
}

Story.defaultProps = {
  heading: 'The Castle Looks Different at Night...',
  body: 'MARKDOWN',
}

Story.propTypes = {
  heading: PropTypes.string,
}

export default Story
