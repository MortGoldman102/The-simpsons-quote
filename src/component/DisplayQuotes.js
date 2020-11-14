import React from 'react';

const DisplayQuotes = ({ quotes }) => {
	return (
		<div className="DisplayQuotes">
			<img src={quotes.image} alt="Simpsons" />
			<ul>
				<li>Quote: {quotes.quote}</li>
				<li>Character: {quotes.character}</li>
			</ul>
		</div>
	);
};

export default DisplayQuotes;