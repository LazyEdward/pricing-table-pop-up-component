// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from 'react'
import './index.css'

type TCardProp = {
	children: React.ReactNode | null,
}

const CardContent = ({children} : TCardProp) => (
	<div className="card-content-container">
		<div className="card-content">
			{children}
		</div>
	</div>
)

CardContent.defaultProps = {
	children: null
}

export default CardContent;