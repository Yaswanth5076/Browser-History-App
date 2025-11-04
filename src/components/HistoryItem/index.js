import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onDelete = () => {
    deleteHistoryItem(id)
  }
  return (
    <li className="history-item">
      <div className="item-details">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <div className="title-domain">
          <p className="title">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
      </div>
      <button className="delete-button" onClick={onDelete} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem
