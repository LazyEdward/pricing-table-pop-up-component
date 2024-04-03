// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import './index.css'
import { TBannerPricingInfo } from '../type'
import BannerType from './BannerType'
import BannerText from './BannerText'
import BannerPricing from './BannerPricing'

type TBannerProp = {
	isHover: boolean,
} & TBannerPricingInfo

const Banner = ({isHover, bannerType, bannerText, pricing} : TBannerProp) => (
	<div className={`banner ${isHover ? "banner-hover" : ""}`}>
		<BannerType name={bannerType}/>
		{pricing ?
				<BannerPricing currency={pricing.currency} price={pricing.price}/>
			:
				null
		}
		<BannerText name={bannerText}/>
	</div>
)

Banner.defaultProps = {
	isHover: false,
	pricing: null
}

export default Banner;