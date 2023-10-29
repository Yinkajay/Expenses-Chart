import { useEffect, useState } from 'react';
import './App.css'
import Bar from './components/Bar';

function App() {
  const [days, setDays] = useState([])


  useEffect(() => {
    fetch('../../data.json')
      .then(response => response.json())
      .then(json => {
        setDays(json)
        console.log(json)
      });

  }, []);


  return (
    <div>
      <div className="">
        My balance
        $921.48
      </div>
      <div className="">
        <h2>Spending - Last 7 days</h2>
        <div className="bar-area">
          <div className="">
            {days?.map(day => <Bar key={day.day} day={day} />)}
          </div>
        </div>
        <div className="">
          <p>Total this month</p>
          <div className=""></div>
          <h2>$478.33</h2>
          <p>+2.4%</p>
          <p>from last month</p>
        </div>
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" >Frontend Mentor</a>.
        Coded by <a href="#">Yinx</a>.
      </div>
    </div>
  )
}

export default App
