import React from 'react'

export default function ButtonHeader({label, onClick}) {
    return (
        <div>
            <button className="bg-white bg-opacity-30 rounded-full border-4 border-white
                                py-3 px-8 font-bold text-white text-opacity-100" onClick={onClick}>
                {label}
            </button>
        </div>
    )
}
