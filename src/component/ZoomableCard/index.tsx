// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from 'react'
import './index.css'

type TZoomableCardProp = {
	children: React.ReactNode | null,
	setIsHover: (isHover: boolean) => void,
}

const ZoomableCard = ({setIsHover, children} : TZoomableCardProp) => (
	<div className='zoomable-card-container'>
		<div className="zoomable-card" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
			{children}
		</div>
	</div>
)

ZoomableCard.defaultProps = {
	children: null
}

export default ZoomableCard;