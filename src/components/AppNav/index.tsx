import React from 'react'
import LinkNewTab from '../LinkNewTab'
import { GITHUB_URL } from '../../config'
import css from './styles.module.css'

const AppNav: React.FunctionComponent = () => (
  <div className={css.root}>
    <LinkNewTab className={css.link} href={GITHUB_URL}>
      GitHub
    </LinkNewTab>
  </div>
)

export default AppNav
