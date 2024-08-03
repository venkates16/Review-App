// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    count: 0,
  }

  clickLeft = () => {
    const {count} = this.state
    if (count === 0) {
      console.log('left')
      this.setState({count: 0})
    } else {
      if (count > 0) {
        this.setState(prev => {
          return {count: prev.count - 1}
        })
      }
    }
  }

  clickRight = () => {
    const {count} = this.state
    if (count === 3) {
      console.log('left')
      this.setState({count: 3})
    } else {
      if (count >= 0) {
        this.setState(prev => {
          return {count: prev.count + 1}
        })
      }
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props

    const {imgUrl, username, companyName, description} = reviewsList[count]
    // console.log(imgUrl)
    return (
      <div className="container">
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
            alt="left arrow"
            className="arrow"
            onClick={this.clickLeft}
          />
          <div className="text">
            <h1 className="h">Reviews</h1>
            <img src={imgUrl} />
            <h1>{username}</h1>
            <p>{companyName}</p>
            <p>{description}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            className="arrow"
            onClick={this.clickRight}
          />
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
