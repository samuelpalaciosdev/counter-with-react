import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SecondsCounter from './SecondsCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));

let i = 0;

window.onload = () => {
  setInterval(() => {
    const six = Math.floor((i / 100000) % 10);
    const five = Math.floor((i / 10000) % 10);
    const four = Math.floor((i / 1000) % 10);
    const three = Math.floor((i / 100) % 10);
    const two = Math.floor((i / 10) % 10);
    const one = Math.floor((i / 1) % 10);
    i++;
    root.render(
      <SecondsCounter
        numSix={six}
        numFive={five}
        numFour={four}
        numThree={three}
        numTwo={two}
        numOne={one}
      />
    );
  }, 1000);
}