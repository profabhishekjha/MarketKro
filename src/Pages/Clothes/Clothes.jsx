import React from 'react'
import CardSection from '../../components/cardSectionshop'

const Clothes = () => {
  return (
    <div>
      <h1 className=" w-full px-6 pt-8 text-3xl font-bold">Best Collection Available</h1>
      <div className="grid grid-cols-4 items-center justify-center gap-8 p-10 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:p-3 max-md:pt-10 ">
        <CardSection
          images={`https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/c/q/j/xxl-st2-vebnor-original-imagpv8n3qmhqctd.jpeg?q=90`}
          title={`Vebnor Men Solid Casual Black Shirt`}
          companyName={`VeBNoR`}
          description={`Best Solid Fit Black Shirt`}
          price={299}
        />
        <CardSection
          images={`https://images.bestsellerclothing.in/data/JJ/10-oct-2022/259124707_g0.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto`}
          title={`Vebnor Men Solid Casual Red Shirt`}
          companyName={`VeBNoR`}
          description={`Best Solid Fit Red Shirt`}
          price={349}
        />
        <CardSection
          images={`https://assets.ajio.com/medias/sys_master/root/20230602/Dtgx/64795c65d55b7d0c633c778c/-1117Wx1400H-462323964-white-MODEL.jpg`}
          title={`Ajio Men Solid Casual White Shirt`}
          companyName={`Ajio`}
          description={`Best Solid Fit White Shirt`}
          price={299}
        />
        <CardSection
          images={`https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2478210/2019/11/8/85bba7bd-b3f3-4ea3-a063-5890340301471573214255868-WROGN-Men-Pink-Slim-Fit-Solid-Casual-Shirt-7431573214250598-1.jpg`}
          title={`Vebnor Men Solid Casual Pink Shirt`}
          companyName={`VeBNoR`}
          description={`Best Solid Fit Pink Shirt`}
          price={299}
        />
        <CardSection
          images={`https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2478210/2019/11/8/85bba7bd-b3f3-4ea3-a063-5890340301471573214255868-WROGN-Men-Pink-Slim-Fit-Solid-Casual-Shirt-7431573214250598-1.jpg`}
          title={`Vebnor Men Solid Casual Pink Shirt`}
          companyName={`VeBNoR`}
          description={`Best Solid Fit Pink Shirt`}
          price={299}
        />
      </div>
    </div>
  )
}

export default Clothes
