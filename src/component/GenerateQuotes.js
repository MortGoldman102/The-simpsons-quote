import React from 'react';

const GenerateQuotes = ({ selectQuotes }) => {
	return (
		<div className="GenerateQuotes">
			<button onClick={selectQuotes}>Get new quotes</button>
		</div>
	);
};

export default GenerateQuotes;