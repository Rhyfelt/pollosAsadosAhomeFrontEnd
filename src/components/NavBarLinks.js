import React from 'react'
import '../assets/style/NavBarLink.css'
const NavBarLinks = () => {
    return (
            <nav>
                <ul>
                    <li ><a href="/ordenes">Ordenes</a></li>
                    <li><a href="/productos">Productos</a></li>
                    <li><a href="/ventas">Ventas</a></li>
                </ul>
            </nav>
    )
}

export default NavBarLinks
