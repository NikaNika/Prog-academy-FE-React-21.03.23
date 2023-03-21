import React from "react";

function Currency({ txt, rate }) {  
  return (
		<li className='listItem'>
			<div className='currencyTitle'>{txt}</div>
			<div className='currencyRate'>{rate.toFixed(2)}</div>
		</li>
	);
}

export default Currency;
