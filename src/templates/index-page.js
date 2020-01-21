import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  title,
  image,
  heading,
  description,
  copyRight
}) => (
  <div className="">
     <div className="selection_Of_examination">
    <div className="container">
        <div className="row py-2">
            <div className="col-md-6 col-lg-6 col-xl-6 col-12 d-flex align-items-center justify-content-center justify-content-md-start">
               <div className="d-flex align-items-center ">
<h5 className="text-white font-weight-bold mt-1">{title}</h5>
               </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 col-12">
                <div className=" d-flex flex-wrap justify-content-center justify-content-md-end  align-items-center ">                    
                    <button className="btn text-white bg-transparent box-shadow-none">Log In</button>
                </div>
            </div>
        </div>
    </div>
    </div>
   <div className="main-content">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8 col-lg-8 col-xl-8">
                    <div className="banner-image-section">
                        <img src = {image} alt="" className="banner-image"/>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                    <div className="card select-test-Form p-4 bg-light-gray">
                        <form>
                            <div className="form-group">
                                <label for="selectType">Select exam you would like to appear</label>
                                <select  className="form-control" id="selectType" aria-describedby="emailHelp">
                                    <option value="">--select--</option>
                                    <option value="">abhdg1</option>
                                    <option value="">abhdg2</option>
                                    <option value="">abhdg3</option>
                                    <option value="">abhdg4</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="paper">Paper</label>
                                <select  className="form-control" id="paper" aria-describedby="emailHelp">
                                    <option value="">--select--</option>
                                    <option value="">Maths</option>
                                    <option value="">English</option>
                                    <option value="">snjskdla</option>
                                    <option value="">abhdg4</option>
                                </select>
                            </div>
                            <button type="submit" className="btn bg-blue col-12">Start Mock Test</button>
                            <div className="form-group mt-2">
                               <p> For LT Mock Tests of December 2019 onwards, please <a href="" className="text-danger">Click here*</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row pt-5 pb-5 px-3">
                <div className="col-12">
                    <div className="welcome-title">
                        <h5 className="text-center text-white">{heading}</h5>
                    </div>
                </div>
                <div className="col-12 bg-white my-3"></div>
                <div className="text-white welcome-text">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </div>    
    <div className="footer d-flex align-items-center justify-content-center py-3">
        <div className="footer-text d-flex align-items-center">&copy; {copyRight} Luezoid Technology</div>
    </div>
  </div>
)
 
const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      description={frontmatter.description}
      copyRight={frontmatter.copyRight}
      />
    </Layout>
  )
} 
export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        copyRight

      }
    }
  }
`
