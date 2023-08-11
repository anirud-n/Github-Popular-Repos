import Loader from 'react-loader-spinner'
import {Component} from 'react'
import './index.css'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    currentLanguageId: languageFiltersData[0].id,
    reposData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.setData()
  }

  formatData = data => {
    const formattedList = data.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      issuesCount: eachItem.issues_count,
      forksCount: eachItem.forks_count,
      starsCount: eachItem.stars_count,
      avatarUrl: eachItem.avatar_url,
    }))
    return formattedList
  }

  setData = async () => {
    this.setState({
      isLoading: true,
    })
    const {currentLanguageId} = this.state
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${currentLanguageId}`,
    )
    const data = await response.json()
    const formattedData = this.formatData(data.popular_repos)
    const popularRepos = formattedData
    this.setState({
      reposData: popularRepos,
      isLoading: false,
    })
  }

  updateRepoList = () => {
    this.setData()
  }

  changeLanguageId = newLanguageId => {
    this.setState({currentLanguageId: newLanguageId}, this.updateRepoList)
  }

  render() {
    const {currentLanguageId, reposData, isLoading} = this.state
    return (
      <div>
        <h1 className="heading">Popular</h1>
        <ul className="languages-cont">
          {languageFiltersData.map(eachItem => (
            <LanguageFilterItem
              eachItem={eachItem}
              key={eachItem.id}
              currentLanguageId={currentLanguageId}
              changeLanguageId={this.changeLanguageId}
            />
          ))}
        </ul>
        {isLoading ? (
          <div data-testid="loader" className="leader-cont">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <ul className="bottom-cont">
            {reposData.map(eachItem => (
              <RepositoryItem eachItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
