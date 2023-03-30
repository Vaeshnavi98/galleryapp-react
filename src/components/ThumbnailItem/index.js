import './index.css'

const ThumbnailItem = props => {
  const {itemList, onClickChanges, isActive} = props
  const {thumbnailUrl, imageUrl, imageAltText, thumbnailAltText} = itemList

  const clickChanges = () => {
    onClickChanges(imageUrl, imageAltText)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li>
      <button>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={clickChanges}
          className={`img-deco ${activeTabBtnClassName}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
