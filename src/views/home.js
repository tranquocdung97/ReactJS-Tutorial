import React from 'react';
import Navigation from '../components/Layout/Navigation/Navigation';
import './home.css'

const home = () => {
	return (
		<div className='HomeContainer'>
			<div className="Menu">
				<Navigation />
			</div>
			<div className="Article">
				<div className='Title'>Title</div>
				<div className='Content'>Content</div>
			</div>
		</div>
	);
};

export default home;
