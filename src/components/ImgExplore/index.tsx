import React from 'react'
import css from './styles.module.css'

interface ImgExploreProps {
  imgUrls: string[]
}

const ImgExplore: React.FunctionComponent<ImgExploreProps> = (props) => {
  const { imgUrls } = props
  return (
    <div className={css.root}>
      <div className={css.divider}>
        -- EXPLORE MORE IMAGES --
      </div>
      {imgUrls.map((imgUrl) => (
        <div className={css.imgcontainer}>
          <img key={imgUrl} src={imgUrl} alt="public-img" />
        </div>
      ))}
    </div>
  )
}

export default ImgExplore
