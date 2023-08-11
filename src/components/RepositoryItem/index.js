import './index.css'

const RepositoryItem = props => {
  const {eachItem} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = eachItem

  return (
    <li className="each-list-item">
      <div className="image-div">
        <img src={avatarUrl} className="logo-image" alt={name} />
        <h1 className="repo-name">{name}</h1>
      </div>
      <div>
        <div className="rating-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="small-logos"
          />
          <p className="rating-text">
            {starsCount} <span className="span-text">stars</span>
          </p>
        </div>

        <div className="rating-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="small-logos"
          />
          <p className="rating-text">
            {forksCount} <span className="span-text">forks</span>
          </p>
        </div>

        <div className="rating-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="small-logos"
          />
          <p className="rating-text">
            {issuesCount} <span className="span-text">open issues</span>
          </p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
