import React from'react'
import data from '../data.js'
export default function Users(){
    return(
        <div>
            {data.map(val => {
                return (
                    <>
                        <h2><img src={val.avatar} alt="" width={100}/></h2>
                        <h2>{val.id}</h2>
                        <h2>{val.first_name}</h2>
                        <h2>{val.last.name}</h2>
                        <h2>{val.email}</h2>
                    </>
                )
            })}
        </div>
    )
}

    
