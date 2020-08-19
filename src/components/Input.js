import React from 'react';
import './Input.css';
import Button from '@material-ui/core/Button';

const Input = ({wordInProgress, addWord}) => {
	return(
		<div className="Input">
			<p>{wordInProgress}</p><Button variant="contained" color="secondary" onClick={addWord}>Add</Button>
		</div>
	)
}

export default Input;