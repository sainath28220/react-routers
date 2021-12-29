import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from "react"

const App = ()=>{
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
            <strong><p  className="ptag1">{name}</p></strong>
            <p style={{marginTop:"0px",marginLeft:"10px"}}>{location}</p>
            <img style = {{}}src= {PostImage} alt = ""/>
            <p style={{marginTop:"5px",marginLeft:"10px"}}>{person.description}</p>
            <button className='btn' style={{marginTop:"5px",marginLeft:"85px"}}>{likes}</button>
            <span className='btn'>likes</span>
          </div>
        );
      })
    }
    </div>
    </div>
  )
}
// function App() {
//   const [ people,setPeople ]= useState([])
//   useEffect(()=>{
//     fetch("http://localhost:3004/user")
//     .then(result => result.json())
//     .then(result => setPeople(result))
//   },[])
//   return (
//     <div className="App">
//       <header>
//         <nav>
//           <h1>Instaclone</h1>
//           {people.map((person, index) => {
//           const { id, firstName, email } = person;
//           return (
//             <div className='item' key={id}>
//               <h4>{firstName}</h4>
//               <p>{email}</p>
//             </div>
//           );
//         })}
//         </nav>
//       </header>
//     </div>
//   );
// }


export default App;
