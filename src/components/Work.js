import React from 'react'
import Python from '../python.png'
import js from '../js.png'
import html from '../html.png'
import css from '../css.png'
import dj from '../dj.png'
import re from '../re.png'

function Work() {
    return (
        <div className="work">
            <h2 className="my-edu">What i used</h2>
            <div className="row">
                <div className="col">
                    <img style={{width: "10vh", margin: "1rem"}} src={Python} ></img>
                </div>
                <div className="col">
                    <img style={{width: "10vh", margin: "1rem"}} src={js} ></img>
                </div>
                <div className="col">
                    <img style={{width: "10vh", margin: "1rem"}} src={html} ></img>
                </div>
                <div className="col">
                    <img style={{width: "16vh", margin: "1rem"}} src={css} ></img>
                </div>
                <div className="col">
                    <img style={{width: "10vh", margin: "1rem"}} src={dj} ></img>
                </div>
                <div className="col">
                    <img style={{width: "10vh", margin: "1rem"}} src={re} ></img>
                </div>


            </div>
        </div>
    )
}

export default Work
