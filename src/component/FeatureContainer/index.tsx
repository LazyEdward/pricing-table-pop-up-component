// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import './index.css'
import { TFeatureText } from '../type'
import FeatureText from '../FeatureText'

type TFeatureContainerProp = {
	isHover: boolean,
	features: TFeatureText[],
}

const FeatureContainer = ({isHover, features} : TFeatureContainerProp) => (
	<div className="feature-container">
		{features.map(feature => (
			<FeatureText key={feature.content} content={feature.content} alignRight={feature.alignRight} isHover={isHover}/>
		))}
	</div>
)

FeatureContainer.defaultProps = {
	isHover: false
}

export default FeatureContainer;