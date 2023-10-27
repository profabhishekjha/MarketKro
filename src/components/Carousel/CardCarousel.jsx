import useEmblaCarousel from 'embla-carousel-react'
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons.jsx'

const CardCarousel = ({ cards, customClasses }) => {
  const options = { loop: true }
  const SLIDE_COUNT = cards.length
  const slides = Array.from(Array(SLIDE_COUNT).keys())

  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi)
  return (
    <div className={`embla ${customClasses} `}>
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="embla__container card-embla__container flex touch-pan-y">
          {slides.map((index) => (
            <div className="card-embla__slide " key={index}>
              <div className="">{cards[index]}</div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-[40%] left-0 pl-1 ">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        </div>
        <div className="absolute bottom-[40%] right-0 pr-1 ">
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  )
}

export default CardCarousel
