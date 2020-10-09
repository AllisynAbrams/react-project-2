import React from "react"

const Banner = (props) => {
    return (
			<div className="banner">
                <h4 className="quote">Adoptable Pets</h4> 
				<img
					src='https://i.imgur.com/BI9kwQv.jpg?1'
					alt='pet banner'
					className='pet-banner'
				/>
			</div>
		);
}

export default Banner