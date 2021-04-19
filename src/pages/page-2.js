import React from 'react'
import PropTypes from 'prop-types'
import Layout from "../components/layout"
import SEO from "../components/seo"
import RecipeReviewCard from '../components/home/cardComponent/card'
function page2(props) {
    return (
        <div>
           <Layout>
           <RecipeReviewCard />
           </Layout> 
        </div>
    )
}

page2.propTypes = {

}

export default page2

