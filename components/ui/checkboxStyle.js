import React from 'react'

function StyledCheckBox() {
  return (
    <div className="relative w-7 h-4 bg-gray-400 peer-focus:outline-none peer-focus:ring-2  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#172448] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-gray-200 ">
    </div>
  )
}

export default StyledCheckBox