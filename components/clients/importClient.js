import React, { useState, useRef } from 'react';
import { UploadIcon } from '../ui/svg/icons';
import { BiUpload } from "react-icons/bi";

const ImportClient = () => {
  const [hasHeadingsRow, setHasHeadingsRow] = useState(false);
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="bg-gray-200 p-6 rounded-lg  mx-auto">
      <div className="bg-[#172448] text-white p-4 rounded-t-lg">
        <h1 className="text-2xl font-bold">Import Client</h1>
      </div>
      
      <div className="bg-white p-4 rounded-b-lg">
        <p className="text-sm text-gray-600 mb-2">
          Upload File (file must be a file of type: xls, xlsx, csv)
        </p>
        
        <div 
          className="border-2 border-dashed border-gray-300 rounded-lg py-8 text-center cursor-pointer"
          onClick={handleDivClick}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".xls,.xlsx,.csv"
            className="hidden"
          />
          <div className="bg-gray-700 flex items-center justify-center w-full rounded-lg p-4 mb-4">
            <UploadIcon/>
          </div>
          <p className="text-sm text-gray-600">
            {fileName ? fileName : "Choose a file"}
          </p>
        </div>
        
        <div className="mt-4 flex items-center">
          <span className="mr-2 text-sm">File Contains Headings Row</span>
          <button 
            className={`w-12 h-6 rounded-full ${hasHeadingsRow ? 'bg-blue-600' : 'bg-gray-300'} transition-colors duration-200 ease-in-out`}
            onClick={() => setHasHeadingsRow(!hasHeadingsRow)}
          >
            <div className={`w-5 h-5 rounded-full bg-white transform transition-transform duration-200 ease-in-out ${hasHeadingsRow ? 'translate-x-6' : 'translate-x-1'}`} />
          </button>
        </div>
        
        <div className="mt-6 flex justify-between">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
            <BiUpload size={16} className="mr-2" />
            Upload and Move to Next Step
          </button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md flex items-center">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImportClient;