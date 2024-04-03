// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { TBannerPricingDetail } from '../../type';
import './index.css'

type TBannerPricingProp = TBannerPricingDetail

const BannerPricing = ({currency, price} : TBannerPricingProp) => (
	<div className="banner-pricing-container">
		<span className={`banner-pricing-currency`}>{currency}</span>
		<span className={`banner-pricing-price`}>{price}</span>
	</div>
)

export default BannerPricing;