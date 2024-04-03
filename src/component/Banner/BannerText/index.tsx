// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import './index.css'

type TBannerTextProp = {
	name: string,
}

const BannerText = ({name} : TBannerTextProp) => <span className={`banner-text`}>{name}</span>

export default BannerText;