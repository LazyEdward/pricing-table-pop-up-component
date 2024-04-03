// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from 'react'
import './index.css'

type TZoomableCardProp = {
	isHover: boolean,
	children: React.ReactNode | null,
	setIsHover: (isHover: boolean) => void,
}

const ZoomableCard = ({isHover, setIsHover, children} : TZoomableCardProp) => (
	<div className={`zoomable-card-container ${isHover ? 'zoomable-card-container-hover' : ''}`}>
		<div className={`zoomable-card ${isHover ? 'zoomable-card-hover' : ''}`} onMouseMove={() => setIsHover(true)} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
			{children}
		</div>
	</div>
)

ZoomableCard.defaultProps = {
	isHover: false,
	children: null
}

export default ZoomableCard;