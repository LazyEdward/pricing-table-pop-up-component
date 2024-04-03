// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import './index.css'

type TRoundButtonProp = {
	isHover: boolean,
	name: string
}

const RoundButton = ({isHover, name} : TRoundButtonProp) => <button className={`round-btn ${isHover ? "round-btn-hover" : ""}`}>{name}</button>

RoundButton.defaultProps = {
	isHover: false
}

export default RoundButton;