import './index.css'

const TabItem = props => {
  const {item, selected, changeTab} = props

  const onChangeTab = () => {
    changeTab(item)
  }

  return (
    <li
      className={selected === item ? 'selectedtabItem' : 'tabItem'}
      onClick={onChangeTab}
    >
      <button
        type="button"
        className={selected === item ? 'selectedtabName' : 'tabName'}
      >
        {item.displayText}
      </button>
    </li>
  )
}

export default TabItem
