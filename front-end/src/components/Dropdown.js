import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import Label from './Label'

export default function Dropdown(props) {
    const [down, goDown] = useState(true)
    return (
        <div className={props.className+" select-none my-8"}>
            
                <div onClick={()=> goDown(!down)} className="border-4 border-green rounded-md w-3/5 p-4">
                    <div>
                        <Label label={props.label} className="font-medium text-xl"/>
                        <p className="font-light">
                            {props.description}
                        </p>
                    </div>
                    <div>
                        {down?
                            <Icon icon="fe:drop-up"/>
                        :
                        <Icon icon="fe:drop-down"/>
                        }
                    </div>
                </div>
            {down?
            <div>
                {props.children}
            </div>
                
            :
                <></>
            }
        </div>
    )
}
