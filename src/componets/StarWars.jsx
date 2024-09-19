import React from 'react'
import { starWarsInfo } from '../utils/constants'

const StarWars = () => {
    return (
        <div className="fs-2 lh-lg text-justify  ms-5">{starWarsInfo}</div>
    )
}

export default StarWars