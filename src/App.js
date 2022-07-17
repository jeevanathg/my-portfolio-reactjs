import React from 'react'
import { Header,Footer } from './components'
import { WhatIknow, WhoAmI ,WhyThisSite } from './containers'

const App = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <WhoAmI />
                <WhatIknow/>
                <WhyThisSite />
            </div>
            <Footer />
        </>
    )
}

export default App
