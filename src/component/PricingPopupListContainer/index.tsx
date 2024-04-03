// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import PricingPopup from '../PricingPopup';
import './index.css'

const DEFAULT_FEATURES = [
	'Plan Feature First',
	'Plan Feature Second',
	'Plan Feature',
	'Plan Feature Fourth',
]

const PricingPopupListContainer = () => (
	<div className='pricing-container'>
		<div className='pricing-inner-container'>
			<PricingPopup
				bannerType={'Free'}
				bannerText={'Forever'}
				features={DEFAULT_FEATURES}
			/>
			<PricingPopup
				bannerType={'Starter'}
				pricing={
					{currency: '$', price: '10'}
				}
				features={DEFAULT_FEATURES}
			/>
			<PricingPopup
				bannerType={'Basic'}
				pricing={
					{currency: '$', price: '25'}
				}
				features={DEFAULT_FEATURES}
			/>
			<PricingPopup
				bannerType={'Pro'}
				pricing={
					{currency: '$', price: '45'}
				}
				features={DEFAULT_FEATURES}
			/>
		</div>
	</div>
)

export default PricingPopupListContainer;