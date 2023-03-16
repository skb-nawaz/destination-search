// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {userInput: ''}

  userInputData = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {userInput} = this.state
    const resultData = destinationsList.filter(eachitem =>
      eachitem.name.toLowerCase().includes(userInput),
    )
    return (
      <div className="bg-box">
        <h1>Destination search</h1>
        <div className="searchbox">
          <input
            type="search"
            className="inputt"
            onChange={this.userInputData}
          />
          <img
            className="img"
            alt="search icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          />
        </div>
        <ul className="container">
          {resultData.map(eachitem => (
            <DestinationItem userDetails={eachitem} key={eachitem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
