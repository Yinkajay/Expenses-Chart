import React from 'react'

const Bar = ({ day }) => {
    return (
        <div className='single-day'>
            <div className='single-bar' style={{height: '20px'}}></div>
            <p>{day.day}</p>
        </div>
    )
}

export default Bar
