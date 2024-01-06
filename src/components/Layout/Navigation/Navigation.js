import React from "react";
import './Navigation.css'

const Navigation = () => {
	const [title, setTitle] = React.useState("");

	return (
		<div className="NavigationContainer">
			<div className="NavigationMenu">
				<ul>
					<li>
						<a href="/data-management">Data Managemnet</a>
					</li>
					<li>
						<a href="/model-management">Model Managemnet</a>
					</li>
				</ul>
			</div>
			<div className="NavigationContent">
				<div className='Title'>{title}</div>
				<div className='Content'>Content</div>
			</div>
		</div>
	);
};

export default Navigation;
