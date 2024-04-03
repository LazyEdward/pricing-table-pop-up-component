// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { useEffect, useState } from 'react';
import PricingPopup from '../PricingPopup';
import './index.css'
import { useKeydown } from '../../hooks/useKeydown';

const DEFAULT_FEATURES = [
	'Plan Feature First',
	'Plan Feature Second',
	'Plan Feature',
	'Plan Feature Fourth',
]

const BANNER_TYPES = [
	'Free',
	'Starter',
	'Basic',
	'Pro',
]

const PricingPopupListContainer = () => {
	
	const keydown = useKeydown();
	const [onHandleKeydown, onSetHandleKeydown] = useState(false);
	const [hoverItem, setHoverItem] = useState("")

	const onMouseMove = () => {
		onSetHandleKeydown(false)
	}

	const onHover = (isHover: boolean, hoverItem: string) => {
		if(onHandleKeydown)
			return;
		setHoverItem(isHover ? hoverItem : "");
	}

	const getBannerTypesIndex = (selectedType: string) : number => {
		return BANNER_TYPES.findIndex(type => type === selectedType);
	}

	useEffect(() => {
		if(!keydown)
			return;

		if(
			keydown !== "ArrowUp"
			&& keydown !== "ArrowLeft"
			&& keydown !== "ArrowDown"
			&& keydown !== "ArrowRight"
		)
			return

		let currentBannerTypesIndex = getBannerTypesIndex(hoverItem);

		if(currentBannerTypesIndex === -1){
			if(keydown === "ArrowUp" || keydown === "ArrowLeft")
				currentBannerTypesIndex = BANNER_TYPES.length;
			if(keydown === "ArrowDown" || keydown === "ArrowRight")
				currentBannerTypesIndex = -1;
		}

		if(keydown === "ArrowUp" || keydown === "ArrowLeft")
			setHoverItem(BANNER_TYPES[currentBannerTypesIndex - 1 < 0 ? BANNER_TYPES.length - 1 : currentBannerTypesIndex - 1]);
		if(keydown === "ArrowDown" || keydown === "ArrowRight")
			setHoverItem(BANNER_TYPES[currentBannerTypesIndex + 1 > BANNER_TYPES.length - 1 ? 0 : currentBannerTypesIndex + 1]);

		onSetHandleKeydown(true)
	}, [hoverItem, keydown])

	return (
		<div className='pricing-container'>
			<div className='pricing-inner-container' onMouseMove={onMouseMove}>
				<PricingPopup
					isHover={hoverItem === 'Free'}
					setIsHover={(isHover) => onHover(isHover, 'Free')}
					bannerType={'Free'}
					bannerText={'Forever'}
					features={DEFAULT_FEATURES}
				/>
				<PricingPopup
					isHover={hoverItem === 'Starter'}
					setIsHover={(isHover) => onHover(isHover, 'Starter')}
					bannerType={'Starter'}
					pricing={
						{currency: '$', price: '10'}
					}
					features={DEFAULT_FEATURES}
				/>
				<PricingPopup
					isHover={hoverItem === 'Basic'}
					setIsHover={(isHover) => onHover(isHover, 'Basic')}
					bannerType={'Basic'}
					pricing={
						{currency: '$', price: '25'}
					}
					features={DEFAULT_FEATURES}
				/>
				<PricingPopup
					isHover={hoverItem === 'Pro'}
					setIsHover={(isHover) => onHover(isHover, 'Pro')}
					bannerType={'Pro'}
					pricing={
						{currency: '$', price: '45'}
					}
					features={DEFAULT_FEATURES}
				/>
			</div>
		</div>
	)
}

export default PricingPopupListContainer;