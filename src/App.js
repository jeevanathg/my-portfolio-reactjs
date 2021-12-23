import React from 'react'
import {AboutMe, MySkills, Work, Contact, Header, Footer } from './containers'

const App = () => {
    return (
        <div>
            <Header />
            <AboutMe />
            <MySkills />
            <Work />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
