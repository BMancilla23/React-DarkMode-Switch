import React from 'react';
import './Navbar.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

import ReactSwitch from 'react-switch';
import { useThemeContext } from '@/hooks/useThemeContext';

const Navbar = ({ }) => {

	const { contextTheme, setContextTheme } = useThemeContext();

	  // Actualiza el tema cuando el interruptor cambia
	  const handleSwitch = (nextChecked) => {
		const newTheme = nextChecked ? 'Dark' : 'Light';
		setContextTheme(newTheme);
		// Guarda el estado del tema en el localStorage
		localStorage.setItem('theme', newTheme);
	  };
	return (
		<>
			<nav className='navbar'>
				<ul className='navbar__list'>
					<li className="navbar__item">
						<NavLink to="/" className="navbar__link">Home</NavLink>
					</li>
					<li className="navbar__item">
						<NavLink to="/about" className="navbar__link">About</NavLink>
					</li>
					<li className="navbar__item">
						<NavLink to="/contact" className="navbar__link">Contact</NavLink>
					</li>
				</ul>
				<div className='navbar__switch-container'>
					<ReactSwitch
						onChange={handleSwitch}
						checked={contextTheme === 'Dark'}
						onColor="#86d3ff"
						onHandleColor="#2693e6"
						handleDiameter={30}
						uncheckedIcon={false}
						checkedIcon={false}
						boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
						activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
						height={20}
						width={48}
						className='react-switch'
						id="material-switch"
					/>
				</div>
			</nav>

		</>
	);
};

Navbar.propTypes = {};

export default Navbar;