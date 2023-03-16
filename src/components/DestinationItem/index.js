// Write your code here
import './index.css'

const DestinationItem = props => {
  const {userDetails} = props
  const {name, imgUrl} = userDetails
  return (
    <li className="listItem">
      <img className="imgbox" src={imgUrl} alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
