import { useEffect, useRef, useState } from 'react'
import RenderStars from '../../../components/Card/CardRating'

export const CustomerReviews = ({ comment, Name, userImage, rating }) => {
  const [showFullComment, SetShowFullComment] = useState(false)
  const commentRef = useRef(null)
  const [commentWidth, setCommentWidth] = useState(0)

  useEffect(() => {
    const updateCommentWidth = () => {
      if (commentRef.current) {
        setCommentWidth(commentRef.current.clientWidth / 3 - 28)
      }
    }
    updateCommentWidth()
    window.addEventListener('resize', updateCommentWidth)
    return () => {
      updateCommentWidth()
      window.removeEventListener('resize', updateCommentWidth)
    }
  }, [])

  return (
    <>
      <div className=" flex gap-5 max-md:flex-col">
        <div className=" flex w-[220px] gap-5">
          <div className="aspect-square h-12 w-12">
            <img
              src={userImage}
              alt="User Image"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="inline-block text-xl font-semibold">{Name}</span>
            <RenderStars rating={rating} />
          </div>
        </div>
        <div className="border" />
        {/* cmt */}
        <div
          ref={commentRef}
          className={` relative flex h-fit flex-1 gap-3
            ${showFullComment ? 'max-h-full' : ''}`}>
          <p
            className={`flex justify-between text-justify text-base  
            `}>
            {showFullComment
              ? comment
              : comment.length > commentWidth
              ? `${comment.slice(0, commentWidth)}...`
              : comment}
          </p>
          {comment.length > commentWidth && (
            <button
              className="absolute bottom-0 right-0 rounded-lg bg-gray-300 px-1 text-sm font-semibold"
              onClick={() => SetShowFullComment(!showFullComment)}>
              {showFullComment ? 'read less' : 'read more'}
            </button>
          )}
        </div>
      </div>
      {/* <Separator className="my-3 mb-10" /> */}
      <div className="my-3 mb-10 border-b"></div>
    </>
  )
}
