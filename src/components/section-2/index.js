import './section-2.css'
import logo from '../../images/logo.svg'
import React from 'react'
import PropTypes from 'prop-types'
import "../section-2/section-2.css"
import Learn from "../../images/learn.svg"
import "bootstrap/dist/css/bootstrap.min.css"
import Credit from "../../images/credit.svg"
import Map from "../../images/map.svg"
import Ballon from "../../images/ballon.svg"

function Home2(props) {
    return (
        <>
           <section className="future">
           <div className="container">
          <div className="row">
              <div className="col-sm-12 text-white">
              <img className="balloon-icon d-none d-lg-block d-xl-block" 
              src={Ballon} alt="air balloon icon" />
              <h2>Plan Your Future</h2>
              <div className="future-texts">
                        <p>Get connected with everything you need to apply to college, research financial aid and
                            scholarships, and get advice from counselors, advisors and mentors.</p>
                    </div>
              </div>
          </div>
          <div className="row">
              <div className="col-sm-4">
                  <div className="col">
                    <div className="img-holder">
                    <img src={Learn} width="80px" height="80px" alt="Learn" />
                    </div>
                    <a href="#">
                        <h5>Why learning matters</h5>
                        </a>
                        <div className="d-lg-block d-lg-block">
                        <p>College is worth it. Your future is worth it. You are worth it.</p>
                        </div>
                        <a href="#">Learn why college matters &#62</a>
                  </div>
              </div>
              <div className="col-sm-4">
                  <div className="col">
                    <div className="img-holder">
                    <img src={Credit} width="80px" height="80px" alt="Credit" />
                    </div>
                    <a href="#">
                        <h5>Paying for college</h5>
                        </a>
                        <div className="d-lg-block d-lg-block">
                        <p>There are lots of options available to you. We can help you find them.</p>
                        </div>
                        <a href="#">Learn how to pay for college &#62</a>
                  </div>
              </div>
              <div className="col-sm-4">
                  <div className="col cut-corner">
                    <div className="img-holder">
                    <img src={Map} width="80px" height="80px" alt="Map" />
                    </div>
                    <a href="#">
                        <h5>Your college roadmap</h5>
                        </a>
                        <div className="d-lg-block d-lg-block">
                        <p>The path may seem unclear. We can help you find your&nbsp;way.</p>
                        </div>
                        <a href="#">Learn how to get to college &#62</a>
                  </div>
              </div>
          </div>
      </div>
           </section>
        </>
    )
}

Home2.propTypes = {

}

export default Home2

