import logo from './logo.svg';
import './App.css';
import { Button as Increment } from './components/button.component';
import FetchData from './components/fetch.component';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import CSSpractice from './components/css.practice';

const fetchData = async () => {
  try {
    const response = await fetch("https://randomuser.me/api");
    const { results } = await response.json();
    return results;
  } catch(error) {
    window.alert(error);
  };
};


const getFullUserName = (user) => {
  const { name: {title, first, last }} = user;
  // console.log(name);
  return `${title} ${first} ${last}`;
};

function App() {
  const [userInfos, setUserInfos] = useState([]);

  useEffect(() => {
    fetchData().then(results => {
      console.log(results);
      setUserInfos(results);
    });
  }, [])    

  
  return (
    <Routes>
      <Route path="/" element={
        <div className="App">
          <h2>The exercises</h2>
          <Increment />
          <button onClick={fetchData}>Fetch Data</button> 
          {userInfos.map((user, ndx) => {
            return (
            <div key={ndx}> 
              <p>{getFullUserName(user)}</p>
              <img src={user.picture.thumbnail}/>
            </div>
            )
          })}
          </div>
      }>
      </Route>
      <Route path="css"  element={<CSSpractice/>} />
    </Routes>
    );
}

export default App;
