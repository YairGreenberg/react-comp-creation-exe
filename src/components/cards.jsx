// import React from 'react';
import '../style/Cards.css'
import Button from './Button';

function Cards(props) {
    const {name, img} = props
    console.log(name);
    
  return (
    <div className='avatar'>
        <img id='img' src={img} alt="avatar" />
        <h3>{name}</h3>
        <p>software Engineer & Friend</p>
        <Button type={props.type}></Button>
      
        
    </div>
  );
}

export default Cards;
