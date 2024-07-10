import React from 'react'
import { MdOutlineCloudUpload } from "react-icons/md";
import StyledCheckBox from '@/components/ui/checkboxStyle';

function ImportDeals() {
  return (
    <main>
         <div className='bg-white w-full mx-4 min-h-[70vh] rounded-lg px-10 py-5'>
            <h1 className='text-center text-2xl font-semibold py-2'>Import Deals</h1>
            <p className='py-2 font-semibold text-xl'>Import Deals</p>

            <p className='p-2  bg-[#FEF2CC] rounded-md flex items-center gap-2'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_194_1584)">
                <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 9C12.2652 9 12.5196 8.89464 12.7071 8.70711C12.8946 8.51957 13 8.26522 13 8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8C11 8.26522 11.1054 8.51957 11.2929 8.70711C11.4804 8.89464 11.7348 9 12 9ZM12 18C12.2449 18 12.4813 17.91 12.6644 17.7473C12.8474 17.5845 12.9643 17.3603 12.993 17.117L13 17V11C12.9997 10.7451 12.9021 10.5 12.7272 10.3146C12.5522 10.1293 12.313 10.0178 12.0586 10.0028C11.8042 9.98789 11.5536 10.0707 11.3582 10.2343C11.1627 10.3979 11.0371 10.6299 11.007 10.883L11 11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18Z" fill="#172448"/>
                </g>
                <defs>
                <clipPath id="clip0_194_1584">
                <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 -1 24 24)"/>
                </clipPath>
                </defs>
                </svg>
                Date format should be in Y-m-d (e.g. 2022-04-21) format. Make sure the date format is correct in the excel file.
            </p>

            <div className="border-2 border-gray-300 my-5 rounded-lg p-6  h-[50vh]">
              <div className="text-center flex flex-col items-center justify-center  h-full">
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="mb-4">
                    <MdOutlineCloudUpload className="mx-auto min-h-20 w-20 text-gray-400" />
                  </div>
                  <span className="mt-2 block text-sm font-medium text-gray-600">
                    Choose a file
                  </span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" 
                        accept=".xls,.xlsx,.csv" />
                </label>
                <p className="text-xs text-gray-500 mt-2">
                  File must be a file of type: xls, xlsx, csv
                </p>
              </div>
            </div>

            <div>
            <p>Files Contains Headings Row</p>
              <label className="inline-flex items-center mb-5 cursor-pointer">
                  <input
                          type="checkbox"
                          className="sr-only peer"
                      />
                  <StyledCheckBox />
              </label>
            </div>

        <div className='flex gap-4'>
          <button className='px-4 py-2 bg-[#3D50FC] rounded-md text-white'>
                &gt; Upload and Move To Next Step
          </button>
          <button className='rounded-md px-3 py-2 bg-[#D8DCFE] text-black font-semibold'>
            Back
          </button>
        </div>

      </div>
    </main>
  )
}

export default ImportDeals