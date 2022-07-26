import React from 'react';
import './assets/css/style.css';

import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  const [fact, setFact] = React.useState("");

  const getFact = (param) => {
    fetch (`https://uselessfacts.jsph.pl/${param}.json?language=en`,{
        method:"GET"
    })
    .then(response => response.json())
    .then(response =>{
      setFact(response.text)
      localStorage.setItem('lastFact',response.text)
    })
    .catch(error => console.error(error))
}

  React.useEffect(() => {
    if(localStorage.getItem('lastFact')){
      setFact(localStorage.getItem('lastFact'))
    }  
    else {
      getFact("today")
    }
  },[]);

  return (
    <div className="App">
      <Navbar/>
      <Hero quote={fact} buttonClick={getFact}/>
    </div>
  );
}

export default App;