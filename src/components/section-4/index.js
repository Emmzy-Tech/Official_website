import './section-4.css'
import Blog1 from '../../images/Blog (1).jpg'
import React from 'react'
import PropTypes from 'prop-types'
import "../section-2/section-2.css"
import Blog2 from "../../images/Blog (2).jpg"
import "bootstrap/dist/css/bootstrap.min.css"
import Blog3 from "../../images/Blog.jpg"

function Blog(props) {
    return (
        <>
        
<div className="blog-posts">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h2>Blog</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-justify">
                        <img src={Blog1} alt="Img1" />
                        <div className="card-body">
                            <p className="card-title">Common App welcomes over 30 new colleges and universities for the 2021-2022 application season</p>
                            <span className="date">April 22, 2021</span>        
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-justify">
                    <img src={Blog2} alt="Img2" />
                        <div className="card-body">
                            <p className="card-title">National Postsecondary Institute and Reach Higher Announce Winners of Inaugural Power of Hope Award</p>
                                <span className="date">April 3, 2021</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 cut-corner2">
                    <div className="card text-justify cut-corner">
                    <img src={Blog3} alt="Img3" />
                        <div className="card-body">
                            <p className="card-title">Common App Revises Application Questions on Sex and Gender, so both gender can understand it more!!</p>
                                <span className="date">March 25, 2021</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 bot text-center">
                    <a href="#">More Posts</a>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}
Blog.propTypes = {

}

export default Blog
