import React from 'react'
import CardSection from '../../components/cardSectionshop'

const Footwear = () => {
  return (
    <div className="mt-10 grid grid-cols-4 items-center justify-center gap-8 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 ">
      <CardSection
        images={`https://dxkvlfvncvqr8.cloudfront.net/media/file/cms-banner/download_file/relaxo-website-banner-1689137925.png`}
        title={`Bahamas Flip-Flops for men`}
        companyName={`Relaxo Footwear`}
        description={`Best footwear currently`}
        price={299}
      />
      <CardSection
        images={`https://5.imimg.com/data5/SELLER/Default/2021/1/OW/US/LO/6215968/driving-5--500x500.jpg`}
        title={`Relex FOOTWEAR Men Leather Driving Shoes`}
        companyName={`Relex`}
        description={`Best Solid Fit Black shoes`}
        price={349}
      />
      <CardSection
        images={`https://imgmedia.lbb.in/media/2020/10/5f869dbb4b344a3ebfad05b9_1602657723903.jpg`}
        title={`Shop Ethnic Shoes For Men`}
        companyName={`LLB`}
        description={`Best footwear brand`}
        price={299}
      />
      <CardSection
        images={`https://dxkvlfvncvqr8.cloudfront.net/media/file/cms-banner/download_file/relaxo-website-banner-1689137925.png`}
        title={`Bahamas Flip-Flops for men`}
        companyName={`Relaxo Footwear`}
        description={`Best footwear currently`}
        price={299}
      />
      <CardSection
        images={`https://5.imimg.com/data5/SELLER/Default/2021/1/OW/US/LO/6215968/driving-5--500x500.jpg`}
        title={`Relex FOOTWEAR Men Leather Driving Shoes`}
        companyName={`Relex`}
        description={`Best Solid Fit Black shoes`}
        price={349}
      />
      <CardSection
        images={`https://imgmedia.lbb.in/media/2020/10/5f869dbb4b344a3ebfad05b9_1602657723903.jpg`}
        title={`Shop Ethnic Shoes For Men`}
        companyName={`LLB`}
        description={`Best footwear brand`}
        price={299}
      />
    </div>
  )
}

export default Footwear
