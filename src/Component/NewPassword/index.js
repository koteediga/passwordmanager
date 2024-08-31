const NewPassword = props => {
  const {source, onDelete, show} = props
  const {username, password, website, id} = source
  const deletelist = () => {
    onDelete(id)
  }

  const display1 = show ? (
    password
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
    />
  )
  return (
    <li>
      <p>{website}</p>
      <p>{username}</p>
      <p>{display1}</p>
      <button data-testid="delete" onClick={deletelist}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default NewPassword
