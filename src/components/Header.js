import React from 'react'
import Typed from 'react-typed'
function Header() {
    return (
        <div className="Header header-wrapper">
            <div className="main-info">
                <h1>Software Engineering And FullStack Web</h1>
                <Typed className="typed-text"
                strings = {
                    ["Software Developer", "Web Design", "Web Developer", "FullStack Developer",]
                }
                typeSpeed={60}
                backSpeed={60}
                loop
                />
                <a className="btn-main-offer" href="#">Contact Me</a>
               
            </div>
            
        </div>
    )
}

export default Header
