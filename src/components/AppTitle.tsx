import React from 'react'
import { APP } from '../config'
import css from './AppTitle.module.css'

const AppTitle: React.FunctionComponent = (): JSX.Element => (
  <div className={css.root}>
    <h1>{APP.title}</h1>
    <h3>{APP.description}</h3>
  </div>
)

export default AppTitle
