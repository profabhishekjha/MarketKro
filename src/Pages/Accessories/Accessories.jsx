import React from 'react'
import CardSection from '../../components/cardSectionshop'
import { useNavigate } from 'react-router-dom'

const Accessories = () => {
  const navigate = useNavigate()
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-5">
      <CardSection
        images={`https://staticimg.titan.co.in/Titan/Catalog/90140QM03_1.jpg?impolicy=pqmed&imwidth=640`}
        title={`Titan Metal Mechanicals Blue Dial Analog Stainless Steel Strap Watch for Men`}
        companyName={`TITAN`}
        description={`Titan Quartz Analog Watch with Blue Colour Strap for Men`}
        price={21999}
        onClick={() => navigate('/cart')}
      />
      <CardSection
        images={`https://5.imimg.com/data5/ANDROID/Default/2022/2/YY/AY/VF/35336981/product-jpeg.jpg`}
        title={`Titan Metal Mechanicals Blue Dial Analog Stainless Steel Strap Watch for Men`}
        companyName={`TITAN`}
        description={`Titan Quartz Analog Watch with Blue Colour Strap for Men`}
        price={21999}
        onClick={() => navigate('/cart')}
      />
      <CardSection
        images={`https://staticimg.titan.co.in/Titan/Catalog/1825KM01_2.jpg?impolicy=pqmed&imwidth=640`}
        title={`Titan Metal Mechanicals Blue Dial Analog Stainless Steel Strap Watch for Men`}
        companyName={`TITAN`}
        description={`Titan Quartz Analog Watch with Blue Colour Strap for Men`}
        price={21999}
        onClick={() => navigate('/cart')}
      />
      <CardSection
        images={`https://staticimg.titan.co.in/Titan/Catalog/90140QM03_1.jpg?impolicy=pqmed&imwidth=640`}
        title={`Titan Metal Mechanicals Blue Dial Analog Stainless Steel Strap Watch for Men`}
        companyName={`TITAN`}
        description={`Titan Quartz Analog Watch with Blue Colour Strap for Men`}
        price={21999}
        onClick={() => navigate('/cart')}
      />
      <CardSection
        images={`https://staticimg.titan.co.in/Titan/Catalog/90140QM03_1.jpg?impolicy=pqmed&imwidth=640`}
        title={`Titan Metal Mechanicals Blue Dial Analog Stainless Steel Strap Watch for Men`}
        companyName={`TITAN`}
        description={`Titan Quartz Analog Watch with Blue Colour Strap for Men`}
        price={21999}
        onClick={() => navigate('/cart')}
      />
      <CardSection
        images={`https://staticimg.titan.co.in/Titan/Catalog/90140QM03_1.jpg?impolicy=pqmed&imwidth=640`}
        title={`Titan Metal Mechanicals Blue Dial Analog Stainless Steel Strap Watch for Men`}
        companyName={`TITAN`}
        description={`Titan Quartz Analog Watch with Blue Colour Strap for Men`}
        price={21999}
        onClick={() => navigate('/cart')}
      />
    </div>
  )
}

export default Accessories
