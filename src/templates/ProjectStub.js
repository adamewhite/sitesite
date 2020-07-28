import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Button from "../components/Button"
import Video from "../components/Video"

const StubStyles = styled.div`
  .post {
    padding-top: 120px;
    width: 100%;
  }

  .post_banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
  }

  .post_description {
    font-size: 1rem;
  }

  /*  --- Media Queries === */

  @media (max-width: 700px) {
    .post_banner {
      padding: 1rem;
    }

    .post_banner p,
    button {
      font-size: 1rem;
    }
  }

  @media (max-width: 500px) {
    .post_banner {
      flex-flow: column nowrap;
    }

    .post_banner p,
    button {
      font-size: 1rem;
      margin: 0.5rem;
    }
  }
`

export default function ProjectStub(props) {
  const { title, projectDate, location, slug, videoLink, images } = props

  return (
    <StubStyles>
      <div className="post">
        <div className="imageArea"></div>
        {images &&
          images.map(image => (
            <img key={image.fluid.src} src={image.fluid.src} alt="works?" />
          ))}
        {videoLink && Video(videoLink)}
        <div className="post_banner">
          <Link to={slug}>
            <Button name={title} />
          </Link>
          <p className="post_location_date">{`${location} | ${projectDate}`}</p>
        </div>
      </div>
    </StubStyles>
  )
}
