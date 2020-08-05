import React from 'react'
import LinkNewTab from './LinkNewTab'
import { GITHUB_URL } from '../config'
import css from './Nav.module.css'

const Nav: React.FunctionComponent = () => (
  <div className={css.root}>
    <LinkNewTab className={css.link} href={GITHUB_URL}>
      GitHub
    </LinkNewTab>
  </div>
)

export default Nav
