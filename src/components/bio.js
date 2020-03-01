/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"
import twitterImg from "../../content/assets/twitter.png"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          // width: `90px`,
          // height: `90px`,
          minWidth: 50,
          minHeight: 50,
          borderRadius: `8px`,
        }}
        imgStyle={{
          borderRadius: `2px`,
        }}
      />
      <p>
        <a href={`https://twitter.com/${social.twitter}`}>{author}</a> is a backend software engineer  obsessed with distributed
        systems who
         is based in Nigeria and is willing to work on awesome projects around the globe.
      
      </p>
    </div>
  )
}

export default Bio
