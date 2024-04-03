// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export type TBannerPricingDetail = {
	currency: string,
	price: string,
}

export type TBannerPricingInfo = {
	bannerType: string,
	bannerText: string,
	pricing: TBannerPricingDetail | null
}

export type TFeatureText = {
	alignRight: boolean,
	content: string
}