function Categories(props) {
  return (
    <div className="flex flex-col gap-2 border-2 shadow-md hover:bg-gray-200 
      hover:text-teal-900 cursor-pointer border-gray-100 rounded 
      h-40 w-40 sm:h-50 sm:w-60 items-center my-7 justify-center transition-all">
      {props.icon}
      <span className="text-center text-sm sm:text-base">{props.text}</span>
    </div>
  )
}

export default Categories