// Write your JS code here
import {Component} from 'react'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogData: '', isLoading: true}

  componentDidMount() {
    this.fetchBlogData()
  }

  fetchBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    // console.log(data)
    const updatedData = data.map(eachData => ({
      id: eachData.id,
      title: eachData.title,
      imageUrl: eachData.image_url,
      avatarUrl: eachData.avatar_url,
      author: eachData.author,
      topic: eachData.topic,
    }))
    console.log(updatedData)
    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    console.log(blogData)

    return (
      <div className="all-blog-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-container">
            {blogData.map(eachBlog => (
              <Link to={`/blogs/${eachBlog.id}`}>
                <BlogItem eachBlog={eachBlog} key={eachBlog.id} />
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default BlogList
