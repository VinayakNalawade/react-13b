import './index.css'

const AppItem = props => {
  const {item} = props

  return (
    <li className="appItem">
      <img src={item.imageUrl} alt={item.appName} className="appimg" />
      <p className="appName">{item.appName}</p>
    </li>
  )
}

export default AppItem
