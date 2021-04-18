import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import'./section-3.css'
import { Typography } from '@material-ui/core';
import book from '../../images/icons/book.svg'

const Section3 = (props)=>{

    return(
        <>
            <div className="section3">
                <Grid container md={6} xs={10} className="content">
                    <div className="contentH1">
                        <Typography variant="h3">Your complete college application guide</Typography>
                        <img src={book} />
                    </div>
                    <div className="contentButtonCont">
                        <Typography style={{position: 'absolute'}}variant="subtitle2">It’s go time — and we’ll be with you every step of the way.
                        Here’s where you’ll find what you need to take that next step towards a brighter future.</Typography>
                    
                        <div className="contentButton">
                        <button variant="contained">button 1</button>
                        <button>button 1</button>
                        </div>
                    </div>
                </Grid>
            </div>
        </>
    )
}


export default Section3