import React from 'react'

interface LinkNewTabProps {
  href?: string
  className?: string
}

const LinkNewTab: React.FunctionComponent<LinkNewTabProps> = (props) => {
  const { className, href, children } = props
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      href={href}
    >
      {children}
    </a>
  )
}

export default LinkNewTab
