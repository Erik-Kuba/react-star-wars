import React from 'react'
import NavItem from './NavItem'
import { navItem } from '../utils/constants'

const Navigation = ({ changePage }) => {
    return (
        <nav className="fixed-top mt-2 ms-5">
            <ul className="nav">
                {navItem.map(item => <NavItem changePage={changePage} key={item} itemTitle={item} />)}
            </ul>
        </nav>
    )
}

export default Navigation