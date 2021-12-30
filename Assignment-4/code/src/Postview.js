import React from 'react';
import './Postview.css';
import { useState,useEffect } from 'react';

const Postview=()=> {
  const [ people,setPeople ] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3004/user")
    .then(result => result.json())
    .then(result => setPeople(result))
  },[])
  return(
    <div className='App1'>
      <div className='header1'>
        <header >
          <div className='flex11'>
            <h1 style={{marginLeft:"10px"}}>Instaclone</h1>
          </div>
          <div className='flex11'>
              <h4 style={{marginLeft:"47rem"}}>camera</h4>
          </div>
        </header>
      </div>
      <div className='header11'>
      {
      people.map((person, index) => {
        const { date, name, location,PostImage,likes } = person;
        return (
          <div className='item' key={date}>
            <p className='head1'>
              <strong><p  className="ptag1">{name}</p></strong>
              <p style={{marginTop:"0px",marginLeft:"10px"}}>{location}</p>
            </p>
            <img style = {{width:"300px",height:"200px"}}src= {PostImage} alt = ""/>
            <p style={{marginTop:"5px",marginLeft:"10px"}}>{person.description}</p>
            <button className='btn' style={{marginTop:"5px",marginLeft:"85px",marginBottom:"5px"}}>{likes}</button>
            <span className='btn'>likes</span>
            <p className='lastp1'>2 days ago</p>
          </div>
        );
      })
    }
    <button className='btn'>Go Back</button>
    </div>
    </div>
  )
}

export default Postview;
