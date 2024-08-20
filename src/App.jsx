import { useState,useEffect } from 'react'
import './App.css'

const Text = ({state,info}) =>{
  if(state == 0){
    return <h1 className='no_info'>NO INFO</h1>
  }else{
    return(
      info.map((e) => (
      <div key={e.id.value} className='centering'>
        <p >{e.gender}</p>
        <p>{e.name.first}</p>
        <p>{e.email}</p>
      </div>
  )));
  }
}
function App() {  
  const[count,setCount] = useState(0);
  const[data,setData] = useState([]);
  const[picture,setPicture] = useState("");
  useEffect(()=> {
    get_Data();
      data.map((e)=>{
      setPicture(e.picture.large);
      console.log(data);
    });
  },[count]);

    const get_Data = async () => {
      const respone = await fetch("https://randomuser.me/api/");
      const data = await respone.json();
      setData(data.results);    
  }
  return (
    <>
      <div className="container">
        <div className="card">
          {picture.length > 0 && <img className="avatar_picture" src={picture} alt="" /> }
          <div className="text">
            <Text state={count} info={data}/>
          </div>
        </div>
      </div>
      <button onClick={()=>{
        setCount(count + 1);
        console.log(count);
      }}>Get Data</button>
    </>
  )
}

export default App
