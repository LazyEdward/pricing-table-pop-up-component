// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { TFeatureText } from '../type'
import './index.css'

type TFeatureTextProp = {
	isHover: boolean
} & TFeatureText

const FeatureText = ({isHover, alignRight, content} : TFeatureTextProp) => <span className={`feature-text ${isHover ? "feature-text-hover" : ""} ${alignRight ? "feature-text-right-justify" : ""}`}>{content}</span>

FeatureText.defaultProps = {
	isHover: false,
	alignRight: false
}

export default FeatureText;