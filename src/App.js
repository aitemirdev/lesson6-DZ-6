import './App.css';
import { useState } from 'react';
import UserForm from './UserForm';
import UserTable from './UserTable';


function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const clearTable = () => {
    setUsers([]);
  };

  return (
      <div>
        <UserForm onSubmit={addUser} />
        <UserTable users={users} onDelete={deleteUser} />
        <button className="clear-table-btn" onClick={clearTable}>
          Clear Table
        </button>
      </div>
  );
}


export default App;
