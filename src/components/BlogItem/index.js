// Write your JS code here
import {Component} from 'react'

import './index.css'

class BlogItem extends Component {
  render() {
    const {eachBlog} = this.props
    const {id, title, imageUrl, avatarUrl, topic, author} = eachBlog
    return (
      <div className="actBlog">
        <div className="imgCont">
          <img src={imageUrl} className="imgInTitle" />
        </div>
        <div>
          <p>{topic}</p>
          <h1>{title}</h1>
        </div>
        <div>
          <img src={avatarUrl} className="inHere" />
          <p>{author}</p>
        </div>
      </div>
    )
  }
}

export default BlogItem
