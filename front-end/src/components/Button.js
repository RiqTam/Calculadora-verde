import React from 'react'

export default function Button({label, onClick, className, size, classNameParent}) {
    return (
        <div className={classNameParent}>
            <button className={`bg-gradient-to-r from-green-dark to-green rounded-full py-3 px-8 font-bold 
            text-white  hover:from-green-darker hover:to-green-defdark transition-all ease-in-out duration-150
             ${size || "w-full"} ${className}`} onClick={onClick}>
                {label}
            </button>
        </div>
    )
}
