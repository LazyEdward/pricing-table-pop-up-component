// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { useState } from 'react'
import ZoomableCard from '../ZoomableCard';
import Banner from '../Banner';
import CardContent from '../CardContent';
import RoundButton from '../RoundButton';
import { TBannerPricingInfo, TFeatureText } from '../type';
import FeatureContainer from '../FeatureContainer';

type TPricingPopupProp = {
	features: string[],
} & TBannerPricingInfo

const PricingPopup = ({bannerType, bannerText, pricing, features} : TPricingPopupProp) => {

  const [isHover, setIsHover] = useState(false);

  const onHover = (isHover: boolean) => {
    setIsHover(isHover)
  }

	const getUIFeatureList = () : TFeatureText[] => {
		return [...features.map(feature => ({alignRight: false, content: feature})), {alignRight: true, content: "+ Previous Plan"}]
	}

	return (
		<ZoomableCard setIsHover={(isHover) => onHover(isHover)}>
			<Banner
				bannerType={bannerType}
				bannerText={bannerText}
				pricing={pricing}
				isHover={isHover}
			/>
			<CardContent>
				<FeatureContainer
					isHover={isHover}
					features={getUIFeatureList()}
				/>
				<RoundButton name='Buy' isHover={isHover}/>
			</CardContent>
		</ZoomableCard>
	)
}

PricingPopup.defaultProps = {
	bannerText: 'Per Month',
	pricing: null
}

export default PricingPopup;