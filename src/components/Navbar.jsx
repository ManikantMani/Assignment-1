import React from 'react'
import { NavLink } from 'react-router-dom';
import "./style.css";

const Navbar = () => {
    return (
        <>
            <div className="container_nav">
                <div className="create_new">
                   <p className='create_new_P'>Create New</p>
                </div>
                <div className="card1">
                    <ul className='nav_bar'>
                        <li className="nav_item">
                            <NavLink exact={true} activeClassName='is-active' to = "/"><span className='right_button'><i className="fas fa-th-large"> Dashboard</i><i class="fas fa-chevron-right"></i></span></NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink activeClassName='is-active' to = "/sidebar"><span className='right_button'><i class="fas fa-sliders-h"> Sidebar Type</i> <i class="fas fa-chevron-right"></i></span></NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink activeClassName='is-active' to = "/pagelayout"><span className='right_button'><i className="fas fa-copy"> Page Layouts</i> <i class="fas fa-chevron-right"></i></span></NavLink>
                        </li>
                    </ul>
                </div>
                <div className="card1">
                    <ul className='nav_bar'>
                        <li className="nav_item">
                            <NavLink activeClassName='is-active' to = "/index"><span className='right_button'><i class="fas fa-caret-square-down"> Index</i> <i class="fas fa-chevron-right"></i></span></NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink activeClassName='is-active' to = "/ticket"><span className='right_button'><i class="fas fa-ticket-alt"> Ticket</i> <i class="fas fa-chevron-right"></i></span></NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink activeClassName='is-active' to = "/extra"><span className='right_button'><i class="fas fa-calendar-alt"> Extra</i> <i class="fas fa-chevron-right"></i></span></NavLink>
                        </li>
                    </ul>
                </div>
                <div className="card1">
                    <ul className='nav_bar'>
                        <li className="nav_item">
                            <NavLink activeClassName='is-active' to = "/uielements"><span className='right_button'><i class="fab fa-elementor"> Ui Elements</i> <i class="fas fa-chevron-right"></i></span></NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink activeClassName='is-active' to = "/cards"><span className='right_button'><i class="fas fa-credit-card"> Cards</i> <i class="fas fa-chevron-right"></i></span></NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink activeClassName='is-active' to = "/components"><span className='right_button'><i class="fas fa-credit-card"> Components</i> <i class="fas fa-chevron-right"></i></span></NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink activeClassName='is-active' to = "/widgets"><span className='right_button'><i class="fas fa-calendar-alt"> Widgets</i> <i class="fas fa-chevron-right"></i></span></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
