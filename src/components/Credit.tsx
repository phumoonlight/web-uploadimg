import React from 'react'
import css from './Credit.module.css'

const Credit: React.FunctionComponent = (): JSX.Element => (
  <div className={css.root}>
    {'< > by '}
    <a href="https://github.com/phumoonlight">@phumoonlight</a>
  </div>
)

export default Credit
