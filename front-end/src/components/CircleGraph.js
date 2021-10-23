import React from 'react'

export default function CircleGraph({size, thickness, from, to, percentage, id}) {
	
	return (
		<div className={`w-${size || 'full'} h-${size || 'full'} justify-center items-center `}>
			<svg viewBox="-2 -2 40 40" width="100%" height={"100%"}>
				<defs>
					<linearGradient id={id} x1="0%" y1="0%" x2="0%" y2="100%">
					<stop offset="0%" style={{stopColor: from || "#F00", stopOpacity:1}} />
					<stop offset="100%" style={{stopColor: to || "#F00", stopOpacity:1}} />
					</linearGradient>
				</defs>
				<path
					d="M18 2.0845
					a 15.9155 15.9155 0 0 1 0 31.831
					a 15.9155 15.9155 0 0 1 0 -31.831"
					fill="none"
					strokeLinecap="round"
					stroke={`#EAEAEA`}
					strokeWidth={`${thickness || "15%"}`}
					strokeDasharray="100, 100"
				/>
				<path
					d="M18 2.0845
					a 15.9155 15.9155 0 0 1 0 31.831
					a 15.9155 15.9155 0 0 1 0 -31.831"
					fill="none"
					strokeLinecap="round"
					stroke={`url(#${id})`}
					strokeWidth={`${thickness || "15%"}`}
					strokeDasharray={`${percentage || 50}, 100`}
				/>
				<text x="18" y="20" textAnchor="middle" fill="black" fontSize="8px"
					strokeWidth="0px" dy=".1em">{percentage+'%'}</text>
			</svg>
		</div>
	)
}
