import React from 'react'
import CardSection from '../../components/cardSectionshop'

const Medicine = () => {
  return (
    <div>
      <h1 className=" w-full px-7 pt-10 text-3xl font-bold">Best Medicine Available</h1>
      <div className="grid grid-cols-4 items-center justify-center gap-8 p-10 px-3 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:p-3 max-md:pt-10">
        <CardSection
          images={`https://crushes.in/wp-content/uploads/2022/12/500mg-paracetamol-tablet-500x500-removebg-preview.png`}
          title={`Paracetamol Tablets IP 500mg`}
          companyName={`Crush Mart`}
          description={`Best Medicine in city`}
          price={299}
        />
        <CardSection
          images={`https://pharmazone.com/cdn/shop/products/17219_000_001.png?v=1692206900`}
          title={`BRUFEN 400MG 30TAB`}
          companyName={`Pharmazone`}
          description={`Best Solid Fit Red Shirt`}
          price={349}
        />
        <CardSection
          images={`https://www.netmeds.com/images/product-v1/600x600/991497/isp_cough_expectorant_100ml_409660_0_10.jpg`}
          title={`ISP COUGH Syrup 100ml`}
          companyName={`ISP`}
          description={`Best cough syrup`}
          price={299}
        />
        <CardSection
          images={`https://crushes.in/wp-content/uploads/2022/12/500mg-paracetamol-tablet-500x500-removebg-preview.png`}
          title={`Paracetamol Tablets IP 500mg`}
          companyName={`Crush Mart`}
          description={`Best Medicine in city`}
          price={299}
        />
        <CardSection
          images={`https://pharmazone.com/cdn/shop/products/17219_000_001.png?v=1692206900`}
          title={`BRUFEN 400MG 30TAB`}
          companyName={`Pharmazone`}
          description={`Best Solid Fit Red Shirt`}
          price={349}
        />
        <CardSection
          images={`https://www.netmeds.com/images/product-v1/600x600/991497/isp_cough_expectorant_100ml_409660_0_10.jpg`}
          title={`ISP COUGH Syrup 100ml`}
          companyName={`ISP`}
          description={`Best cough syrup`}
          price={299}
        />
      </div>
    </div>
  )
}

export default Medicine

/* Machine Page */
