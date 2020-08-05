import React from 'react'
import { APP } from '../config'
import css from './Heading.module.css'

const AppTitle: React.FunctionComponent = (): JSX.Element => (
  <div className={css.root}>
    <h1>{APP.title}</h1>
  </div>
)

export default AppTitle
