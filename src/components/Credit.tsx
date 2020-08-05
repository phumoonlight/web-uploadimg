import React from 'react'
import LinkNewTab from './LinkNewTab'
import { GITHUB_URL } from '../config'
import css from './Credit.module.css'

const LABEL = '< > by '

const Credit: React.FunctionComponent = (): JSX.Element => (
  <div className={css.root}>
    {LABEL}
    <LinkNewTab href={GITHUB_URL}>@phumoonlight</LinkNewTab>
  </div>
)

export default Credit
