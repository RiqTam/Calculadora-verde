import React from 'react'

export default function Button({label, onClick, className, size}) {
    return (
        <div >
            <button className={`bg-gradient-to-r from-green-dark to-green rounded-full py-3 px-8 font-bold 
            text-white ${size || "w-full"} ${className}`} onClick={onClick}>
                {label}
            </button>
        </div>
    )
}
