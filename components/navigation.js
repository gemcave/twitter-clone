import React from 'react';
import Link from 'next/link';


const navLinks = [
	{
		title: 'Home',
		path: '/'
	},
	{
		title: 'Explore',
		path: '/explore'
	},
	{
		title: 'Login',
		path: '/login'
	}
]

const Navigation = () => {
	return (
		<div className="site-navigation">
			<span>Twitter Clone</span>
			<ul>
				{navLinks.map((link, index) => (
					<li key={index}>
						<Link href={link.path}>
							<a>
								{link.title}
							</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Navigation;