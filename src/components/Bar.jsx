import React from 'react'

const Bar = ({ day, changeSelectedDate, currentDay }) => {

    function handleDayClick(day) {
        console.log(day)
    }

    return (
        <div className={`${'single-day'} `} onClick={() => handleDayClick(day.day)}>
            {currentDay}
            <div title={`$${day.amount}`} className={` ${'single-bar'} ${day.day == 'wed' ? 'wednesday' : ''}`} style={{ height: `${day.amount * 3}px` }}></div>
            <p>{day.day}</p>
        </div>
    )
}

export default Bar
