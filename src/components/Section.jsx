import CardCarousel from './Carousel/CardCarousel'

const Section = ({
  FirstHeading,
  SecondHeading,
  cards,
  isCardCarousel,
  cardCarouselCustomClasses
}) => {
  return (
    <>
      <div className="relative flex flex-col  gap-2">
        <span className="text-3xl font-bold">{FirstHeading}</span>
        <span className="text-2xl font-semibold">{SecondHeading}</span>
        {/* <Separator /> */}
        <div className="">
          {isCardCarousel ? (
            <CardCarousel cards={cards} />
          ) : (
            <CardCarousel customClasses={cardCarouselCustomClasses} cards={cards} />
          )}
        </div>
      </div>
    </>
  )
}

export default Section
