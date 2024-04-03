import PricingPopupListContainer from './component/PricingPopupListContainer'

const App = () => {

  return (
    <div className='w-screen h-screen flex flex-col bg-local-gray overflow-auto'>
      <div className='text-[24px] font-medium pt-[90px] pb-[52px] text-center'>Find the best for you</div>
      <PricingPopupListContainer/>
      {/* <div className='h-[390px] flex justify-center'>
        <div className='gap-[19px] flex justify-center items-center shrink-0'>
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
      </div> */}
    </div>
  )
}

export default App
