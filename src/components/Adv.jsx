const Adv = ({ isAdvLeft, children }) => {
  return (
    <>
      <div className={`flex items-center gap-12 ${!isAdvLeft && 'flex-row-reverse'}`}>
        {children}
      </div>
    </>
  )
}

export default Adv
