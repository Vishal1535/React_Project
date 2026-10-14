import React from 'react'
import { FadeLoader } from "react-spinners";

export const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      
      <div className="flex flex-col items-center gap-6">
        
        {/* Loader */}
        <div className="p-6 rounded-2xl shadow-lg bg-gray-50">
          <FadeLoader
            color="#3b82f6"
            height={12}
            width={4}
            radius={2}
            margin={2}
          />
        </div>

        {/* Text */}
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-700">
            Loading
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Please wait a moment...
          </p>
        </div>

      </div>

    </div>
  )
}