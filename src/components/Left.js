/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import '../App.css'
import user from '../images/ayse copy.jpg';




function Left() {
    return (
        <React.Fragment>
            <div className='leftBlock'>
                <div className='div-img'><img src={user} alt='user' width={120} /></div>
                <div className='my-infos'>
                    <div>  <span className='title'>I am Ayse Insan</span></div>
                    <div>
                        <p><span>Digital Project Designer based in Cyprus</span></p>

                    </div>

                </div>
            </div>

        </React.Fragment >
    )
}

export default Left