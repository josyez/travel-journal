import { useState } from 'react'
import data from './data'
import Card from './Card';
import reactLogo from './assets/react.svg'
import './App.css'

function Header (){
  return(
    <div className='header'>
      <h1>My Travel Journal</h1>

    </div>
  )
}


function App() {

 return (
  <>
    <Header />

    <div className='card-info'>
      {data.map(card =>
        <Card
        title={card.title}
        location={card.location}
        googleMapsUrl={card.googleMapsUrl}
        startDate={card.startDate}
        endDate={card.endDate}
        description={card.description}
        imageUrl={card.imageUrl}
        />)}
    </div>
  </>
  
 )
}

export default App
