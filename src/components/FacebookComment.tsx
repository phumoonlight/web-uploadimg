import React from 'react'
import css from './FacebookComment.module.css'

const FacebookComment: React.FunctionComponent = (): JSX.Element => (
  <div>
    <div className={css.heading}>COMMENT</div>
    <div
      className="fb-comments"
      data-href="https://uploadimg.vercel.app/"
      data-numposts="5"
      data-width="100%"
    />
  </div>
)

export default FacebookComment
