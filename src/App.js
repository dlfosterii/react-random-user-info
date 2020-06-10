import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random User</h1>
      </header>
      <div>
        <div>
          <UserCard />
          <UserCard />
        </div>
        <div>
          <UserCard />
          <UserCard />
        </div>
        <div>
          <UserCard />
          <UserCard />
        </div>
      </div>


    </div>
  );
}

export default App;
