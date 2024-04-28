import React from 'react'
import CardItem from './CardItem'
import '@fortawesome/fontawesome-free/css/all.min.css'; 




function CardList() {
  return (
    <div className='allCards'>
      <CardItem title='Fresh new layout' content='With Bootstrap 5 we have created a fresh new layout for this template!'  icon="fa-solid fa-check" />
      <CardItem title='Free to download' content='With Bootstrap 5 we have created a fresh new layout for this template!'  icon="fa-solid fa-check" />
      <CardItem title='Fresh new layout' content='With Bootstrap 5 we have created a fresh new layout for this template!'  icon="fa-solid fa-check" />
      <CardItem title='Fresh new layout' content='With Bootstrap 5 we have created a fresh new layout for this template!'  icon="fa-solid fa-check" />
      <CardItem title='Fresh new layout' content='With Bootstrap 5 we have created a fresh new layout for this template!'  icon="fa-solid fa-check" />
      <CardItem title='Fresh new layout' content='With Bootstrap 5 we have created a fresh new layout for this template!'  icon="fa-solid fa-check" />
    
      

    </div>
  )
}

export default CardList
