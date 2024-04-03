// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import ZoomableCard from '../ZoomableCard';
import Banner from '../Banner';
import CardContent from '../CardContent';
import RoundButton from '../RoundButton';
import { TBannerPricingInfo, TFeatureText } from '../type';
import FeatureContainer from '../FeatureContainer';

type TPricingPopupProp = {
	isHover: boolean,
	setIsHover: (isHover: boolean) => void,
	features: string[],
} & TBannerPricingInfo

const PricingPopup = ({isHover, setIsHover, bannerType, bannerText, pricing, features} : TPricingPopupProp) => {

	const getUIFeatureList = () : TFeatureText[] => {
		return [...features.map(feature => ({alignRight: false, content: feature})), {alignRight: true, content: "+ Previous Plan"}]
	}

	return (
		<ZoomableCard isHover={isHover} setIsHover={(isHover) => setIsHover(isHover)}>
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
	isHover: false,
	bannerText: 'Per Month',
	pricing: null
}

export default PricingPopup;