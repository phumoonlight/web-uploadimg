import React from 'react'
import css from './styles.module.css'

interface ImgExploreProps {
  imgUrls: string[]
}

const ImgExplore: React.FunctionComponent<ImgExploreProps> = (props: ImgExploreProps) => {
  const { imgUrls } = props
  return (
    <div className={css.root}>
      <div className={css.divider}>
        -- MORE UPLOADED IMAGES --
      </div>
      {imgUrls.map((imgUrl) => (
        <div key={imgUrl} className={css.imgcontainer}>
          <a href={imgUrl} target="_blank" rel="noopener noreferrer">
            <img src={imgUrl} alt="public-img" />
          </a>
        </div>
      ))}
    </div>
  )
}

export default ImgExplore
