import './index.css'

const LanguageFilterItem = props => {
  const {eachItem, currentLanguageId, changeLanguageId} = props
  const {id, language} = eachItem
  let elementStyle
  if (currentLanguageId === id) {
    elementStyle = 'current-btn'
  } else {
    elementStyle = 'buttons'
  }

  const updateLanguageId = () => {
    changeLanguageId(id)
  }
  return (
    <li className="each-tab-text ">
      <button className={elementStyle} type="button" onClick={updateLanguageId}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
