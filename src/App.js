import { useState } from "react";
import "./App.css";

function App() {
  const[res,setRes]=useState([]);
  const[coin,setCoin]=useState({});

  const fetchHandler = async() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1896d899c8msh3cf329e1b4d612ap19ded8jsn086e2cd6fb80",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    const data = await fetch("https://coinranking1.p.rapidapi.com/coins", options)
      .then((response) => response.json())
      .then(({ data: { coins } }) =>{return coins})
      .catch((error) => console.error(error));
  console.log("HEre",data);
  setRes(data);

  return data;
  }


const differentHandler= async(uuid)=>{
  console.log("UUID",uuid )
    const options= {
      method: "GET",
      params: {referenceCurrencyUuid: uuid, timePeriod: '24h'},
      headers: {
        "X-RapidAPI-Key": "1896d899c8msh3cf329e1b4d612ap19ded8jsn086e2cd6fb80",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };
  
    const data = await fetch("https://coinranking1.p.rapidapi.com/coin/"+ uuid,options)
      .then((response) => response.json())
      .then(({ data: { coin}}) =>{return coin})
      .catch((error) => console.error(error));
  console.log("separate",data);
  setCoin(data);
  return data;
}
  return (
    <div>
      <button onClick={fetchHandler}>click</button>
      {res.map((item)=>{
        return (<>
        <h1 onClick={()=>differentHandler(item.uuid)}>{item.name}</h1>
    
        </>)
      }
      )}
          <p>{coin["24hVolume"]}</p>
    </div>
  );
}
export default App;


















// import logo from './logo.svg';import './App.css';

// // 1. Import *useState* and *useEffect*
// import React, {useState, useEffect} from 'react';
// import './App.css';

// function App() {
//   // 
//   // 2. Create our *dogImage* variable as well as the *setDogImage* function via useState
//   // 
//   // We're setting the default value of dogImage to null, so that while we wait for the
//   //
//    // fetch to complete, we dont attempt to render the image// let [dogImage, setDogImage] = useState(null)
// // 
// // 3. Create out useEffect function
// // useEffect(() => {
//   // fetch("https://dog.ceo/api/breeds/image/random")
//   // .then(response => response.json())
//   // 
//   // 4. Setting *dogImage* to the image url that we received from the response above
//   // .then(data => setDogImage(data.message))
//   // },[])
// // return (
//   // <div className="App">
//   // {/* 5. Using *dogImage as* the *src* for our image*/}
//   // {dogImage && <img src={dogImage}></img>}
//   // </div>// );

  
// const todoHandler = async(id)=>{
//   const delay = fetchHandler(id);
//   console.log(delay);}

// const fetchHandler=()=>{
//   fetch(`https://jsonplaceholder.typicode.com/todos/1`) 
//   .then(response => response.json()) 
//   .then(json => console.log(json)) 
//   .catch(err=>console.error(err))
// }

//   return(
//      <>
//       <button onClick={todoHandler}>Click here</button> 
//       </>
//     )
// }
// export default App;