import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import css from './RecentUploadedImages.module.css'

const RecentUploadedImages: React.FunctionComponent = () => {
  const [maxDisplayImage, setMaxDisplayImage] = useState(10)
  const [uploadedImageURLs, setUploadedImageURLs] = useState<string[]>([])
  const partialImageURLs = uploadedImageURLs.slice(0, maxDisplayImage)
  const handleClickMoreImage = () => setMaxDisplayImage(maxDisplayImage + 10)

  useEffect(() => {
    (async () => {
      const { data } = await Axios.get('/api/images')
      const { localStoredImages } = data
      setUploadedImageURLs(localStoredImages)
    })()
  }, [])

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

export default RecentUploadedImages
