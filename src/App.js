import React, { useState } from "react";
import Button from "./components/Button";
import DisplayUsers from "./components/DisplayUsers";
import UserDetails from "./components/UserDetails";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [userDetail, setUserDetail] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  URL = `https://randomuser.me/api/?results=5`;
  function getUsers() {
    setIsLoading(true);
    setHasError(false);
    fetch(URL)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error();
      })
      .then(data => {
        setUsers(data.results);
        setIsLoading(false);
      })
      .catch(err => {
        setHasError(true);
        console.log(err);
      });
  }

  function getDetails(id) {
    const user = users.filter(user => user.login.uuid === id);
    setUserDetail(user[0]);
  }

  return (
    <div className="app">
      <Button getUsers={getUsers} />
      {isLoading && <p>loading..</p>}
      {hasError && <p>there is an error..</p>}
      {users &&
        users.map(user => <DisplayUsers getDetails={getDetails} user={user} />)}
      {userDetail && !isLoading && <UserDetails userDetail={userDetail} />}
    </div>
  );
}

export default App;
