import React, {useState,useEffect} from 'react';
import './App.css';

function App() {
  const [data,setData] = useState([]);
  const getData = () => {
    fetch('data.json'
    ,{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson);
      });
  }
  useEffect(()=>{
    getData()
  },[])
  const listItems = data.map((item) =>
    <li key={item.id}>
      {item.name} - {item.element}
    </li>
  );
  return (
    <div className="App">
      {listItems}
    </div>
  );
}

export default App;
