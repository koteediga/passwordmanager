import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import NewPassword from '../NewPassword'

class Password extends Component {
  state = {
    searchInput: '',
    initiallist: [],
    website: '',
    username: '',
    password: '',
    count: 0,
    isActive: false,
    show: false,
  }

  eventWebsite = event => {
    this.setState({
      website: event.target.value,
    })
  }

  eventUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  eventPassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  formButton = event => {
    event.preventDefault()
    const {username, website, password, initiallist, count} = this.state
    const newPassword1 = {
      id: uuidv4(),
      username,
      website,
      password,
    }

    this.setState(prevState => ({
      initiallist: [...prevState.initiallist, newPassword1],
      count: prevState.count + 1,
      website: '',
      username: '',
      password: '',
      isActive: true,
    }))
  }

  passwordshow = () => {
    const {show} = this.state
    this.setState(prevState => ({
      show: !prevState.show,
    }))
  }

  onDelete = id => {
    const {username, website, password, initiallist, count} = this.state
    const filterlist = initiallist.filter(each => each.id !== id)
    this.setState(prevState => ({
      initiallist: filterlist,
      count: prevState.count - 1,
    }))
  }

  searching = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {
      username,
      website,
      password,
      initiallist,
      count,
      show,
      searchInput,
    } = this.state
    const filteredlistafter = initiallist.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const typetext = show ? 'text' : 'password'
    const ispossword = count === 0 ? 'No Passwords' : ''
    const imageElement =
      count === 0 ? (
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
          className="image"
        />
      ) : (
        ''
      )

    return (
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
          <form onSubmit={this.formButton}>
            <h1>Add New Password</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="website"
            />
            <input
              placeholder="Enter Website"
              onChange={this.eventWebsite}
              value={website}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="username"
            />
            <input
              type="text"
              placeholder="Enter Username"
              onChange={this.eventUsername}
              value={username}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="password"
            />
            <input
              type={typetext}
              placeholder="Enter Password"
              value={password}
              onChange={this.eventPassword}
            />
            <button type="submit">Add</button>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="image"
            />
          </form>
        </div>
        <div>
          <h1>Your Passwords </h1>
          <p>{count}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            alt="search"
          />
          <input type="search" placeholder="Search" onChange={this.searching} />
          <label htmlFor="kote">Show passwords</label>
          <input id="kote" type="checkbox" onClick={this.passwordshow} />

          {imageElement}
          <p>{ispossword}</p>
          <ul>
            {filteredlistafter.map(each => (
              <NewPassword
                key={each.id}
                source={each}
                show={show}
                onDelete={this.onDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Password
