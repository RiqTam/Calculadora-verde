import React, { useState } from 'react'
import { Icon } from '@iconify/react';

export default function Checkbox(props) {
    const [checked, setChecked] = useState(false)
    return (
            <div className={props.className+" flex"}>
                {checked?
                    <div onClick={()=>setChecked(false)} className="flex w-6 h-6 rounded-md bg-green ">
                        <Icon icon="akar-icons:check" className="text-white text-center m-auto"
                            style={{fontSize: '18px'}}/>
                        
                    </div>
                :
                    <div onClick={()=>setChecked(true)} className="w-6 h-6 rounded-md border-gray border-2">
                        
                    </div>
                }
                <p className="mx-3">
                    {props.label}
                </p>
            </div>
        )
}
