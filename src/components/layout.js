import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
  query SocialQuery {    
    site {
      siteMetadata {
        social {
          twitter
          github
          linkedin
        }
      }
    }
  }
`)

const { social } = data.site.siteMetadata
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `#d23669`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `#d23669`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}.
        {` `}
        <a href={`https://twitter.com/${social.twitter}`} target="_blank">Twitter</a>.
        {` `}
        <a href={`https://github.com/${social.github}`} target="_blank">GitHub</a>.
        {` `}
        <a href={`https://www.linkedin.com/in/${social.linkedin} `} target="_blank">LinkedIn</a>
      </footer>
    </div>
  )
}

export default Layout
