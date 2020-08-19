import React from 'react';
import './Letters.css';

const Letters = ({lettersArray, createWord}) => {
	return(
		<div>
			{
				lettersArray.map((letter, index) => {
					return(
						<button onClick={createWord.bind(this, index)} id={index} key={index}>
							<span className="letter"><p className='lettertext'>{letter}</p></span>
						</button>
						)
				})
			}
		</div>
	)
}

export default Letters;