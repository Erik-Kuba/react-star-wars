import React, { useEffect, useState } from 'react'
import { base_url } from '../utils/constants'

const AboutMe = () => {
    const [hero, setHero] = useState();

    useEffect(() => {
        fetch(`${base_url}/v1/peoples/1`)
            .then(response => response.json())
            .then(data => setHero({
                name: data.name,
                gender: data.gender,
                birth_year: data.birth_year,
                height: data.height,
                mass: data.mass,
                heir_color: data.heir_color,
                skin_color: data.skin_color,
                eye_color: data.eye_color
            }))
    })

    return (
        <>
            {(!!hero) &&
                <div className="fs-2 lh-lg text-justify  ms-5">
                    <p><span className='display-3'>name:</span> {hero.name}</p>
                    <p><span className='display-3'>gender:</span> {hero.gender}</p>
                    <p><span className='display-3'>birth year:</span> {hero.birth_year}</p>
                    <p><span className='display-3'>height:</span> {hero.height}</p>
                    <p><span className='display-3'>mass:</span> {hero.mass}</p>
                    <p><span className='display-3'>hair color:</span> {hero.heir_color}</p>
                    <p><span className='display-3'>skin color:</span> {hero.skin_color}</p>
                    <p><span className='display-3'>eye color:</span>{hero.eye_color}</p>
                </div>
            }
        </>
    )
}

export default AboutMe