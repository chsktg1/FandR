/* eslint-disable camelcase */
// Write your JS code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogTodDisp: '', isLoading: true}

  componentDidMount() {
    this.fetchDataToDisp()
  }

  fetchDataToDisp = async () => {
    const {match} = this.props
    const {params} = match
    const {param} = params
    const url = `https://apis.ccbp.in/blogs/${param}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    this.setState({blogTodDisp: data, isLoading: false})
  }

  render() {
    const {blogTodDisp, isLoading} = this.state
    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line camelcase
    const {
      id,
      title,
      image_url,
      avatar_url,
      topic,
      author,
      content,
    } = blogTodDisp
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div>
            <h1>{title}</h1>
            <div>
              <img src={avatar_url} className="avatar_url" />
              <p>{author}</p>
            </div>
            <div className="imgCont">
              <img src={image_url} className="detailedImg" />
            </div>
            <p>{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
