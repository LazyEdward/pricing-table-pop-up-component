// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import './index.css'

type TBannerTypeProp = {
	name: string,
}

const BannerType = ({name} : TBannerTypeProp) => <span className={`banner-type`}>{name}</span>

export default BannerType;