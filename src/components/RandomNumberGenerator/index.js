// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  generateButton = () => {
    this.setState(prevState => {
      console.log(`${prevState.count}`)
      return {count: Math.ceil(Math.random() * 100)}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.generateButton}
          >
            Generate
          </button>
          <p className="count-number">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
