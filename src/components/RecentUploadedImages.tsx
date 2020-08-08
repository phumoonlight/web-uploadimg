import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import LinkNewTab from './LinkNewTab'
import css from './RecentUploadedImages.module.css'

const RecentUploadedImages: React.FunctionComponent = () => {
  const [renderLoadButton, setRenderLoadButton] = useState(true)
  const [maxDisplayImage, setMaxDisplayImage] = useState(10)
  const [uploadedImageURLs, setUploadedImageURLs] = useState<string[]>([])
  const partialImageURLs = uploadedImageURLs.slice(0, maxDisplayImage)
  const handleClickMoreImage = () => {
    setMaxDisplayImage(maxDisplayImage + 10)
    setRenderLoadButton(false)
    setTimeout(() => setRenderLoadButton(true), 1500)
  }

  useEffect(() => {
    (async () => {
      const { data } = await Axios.get('/api/images')
      const { localStoredImages } = data
      setUploadedImageURLs(localStoredImages)
    })()
  }, [])

  return (
    <div className={css.root}>
      <div className={css.heading}>RECENT UPLOADED IMAGES</div>
      {partialImageURLs.map((imgUrl) => (
        <div key={imgUrl} className={css.imgcontainer}>
          <LinkNewTab href={imgUrl}>
            <img src={imgUrl} alt="public-img" />
          </LinkNewTab>
        </div>
      ))}
      {maxDisplayImage <= partialImageURLs.length && renderLoadButton && (
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
