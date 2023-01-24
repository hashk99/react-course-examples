import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (username, userAge) =>{
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: username, age: userAge, key: Math.random().toString()}]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList} />
    </div>
  );
}

export default App;
