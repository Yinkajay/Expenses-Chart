import { useEffect, useState } from 'react';
import './App.css'
import Bar from './components/Bar';
import logo from '../images/logo.svg'

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
    <div className='app'>
      <div className="balance-info">
        <div className="">
          <p>My balance</p>
          <h1> $921.48</h1>
        </div>
        <img src={logo} alt="" />
      </div>
      <div className="spending-info">
        <h2>Spending - Last 7 days</h2>
        <div className="bar-area">
          <div className="bar-list">
            {days?.map(day => <Bar key={day.day} day={day} />)}
          </div>
        </div>
        <div className="monthly-stats">
          <p>Total this month</p>
          <div className="">
            <h2>$478.33</h2>
            <div className="monthly-change">
              <p>+2.4%</p>
              <p>from last month</p>
            </div>
          </div>
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
