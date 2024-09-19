import React, { useEffect, useState } from 'react'
import { base_url } from '../utils/constants'

const FarGalaxy = () => {

    const [openingCrawl, setOpenningCrowl] = useState('Loadung...');
    useEffect(() => {

        const opening_crawl = sessionStorage.getItem('openung_crawl')
        if (opening_crawl) {
            setOpenningCrowl(opening_crawl)
        } else {
            const episode = Math.floor(1 + Math.random() * 6);
            fetch(`${base_url}/v1/films/${episode}`)
                .then(response => response.json())
                .then(data => {
                    setOpenningCrowl(data.opening_crawl);
                    sessionStorage.setItem('opening_crowl', data.opening_crawl);
                });
        }

    }, [])

    return (
        <p className="fs-2 lh-lg text-justify">
            {openingCrawl}
        </p>
    )
}

export default FarGalaxy