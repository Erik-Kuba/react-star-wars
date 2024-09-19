import React, { useState } from 'react'
import Home from './Home'
import { navItem } from '../utils/constants'
import AboutMe from './AboutMe'
import StarWars from './StarWars'
import Contact from './Contact'

const Main = ({ page }) => {


    switch (page) {
        case navItem[1]:
            return <AboutMe />
        case navItem[2]:
            return <StarWars />
        case navItem[3]:
            return <Contact />
        default:
            return <Home />
    }
}

export default Main