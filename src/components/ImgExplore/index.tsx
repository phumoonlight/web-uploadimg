import React from 'react'
import css from './styles.module.css'

interface ImgExploreProps {
  imgUrls: string[]
}

const ImgExplore: React.FunctionComponent<ImgExploreProps> = (props: ImgExploreProps) => {
  const { imgUrls } = props
  const [maxDisplayImage, setMaxDisplayImage] = React.useState(10)
  const partialImageURLs = imgUrls.slice(0, maxDisplayImage)
  const handleClickMoreImage = () => setMaxDisplayImage(maxDisplayImage + 10)
  return (
    <div className={css.root}>
      <div className={css.divider}>RECENT UPLOADED IMAGES</div>
      {partialImageURLs.map((imgUrl) => (
        <div key={imgUrl} className={css.imgcontainer}>
          <a href={imgUrl} target="_blank" rel="noopener noreferrer">
            <img src={imgUrl} alt="public-img" />
          </a>
        </div>
      ))}
      {maxDisplayImage <= partialImageURLs.length && (
        <div>
          <input
            className={css.buttonloadimg}
            type="button"
            value="Load more images"
            onClick={handleClickMoreImage}
          />
        </div>
      )}
    </div>
  )
}

export default ImgExplore
