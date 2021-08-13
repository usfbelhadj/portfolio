import React from 'react'
import  Profile  from  '../profile.jpeg'

function Main() {
    return (
        <div className="Main main-wrapper">
            <img className="profile" src={ Profile } alt="Profile Image"></img>
            <div className="main-info-main">
            <h3>Hello I'm Youssef Belhadj</h3>
            <p>I'm a Full Stack Web Developer at Holberton School and a freelance software engineer from Tunis.</p>
            <h2 className="my-work">My Work</h2>
            <div style={{margin: "3rem"}}>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">BLOG SITE</li>
                <li className="list-group-item">WEBSITE FOR GYM CLUB</li>
                <li className="list-group-item">E-COMMERCE SITE</li>
                <li className="list-group-item">AIRBNB CLONE</li>
                </ul>
            </div>            
            </div>
            
        </div>
    )
}

export default Main
