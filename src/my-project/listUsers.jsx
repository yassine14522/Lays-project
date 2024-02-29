// ListeUsers.js
import React from 'react';
import { useUser } from './context';
import './list-users-style.css'

const ListeUsers = () => {
  const { state } = useUser();

  return (
    <>
      <div className='tout'>
        <h1>ListeUsers</h1>
        <table class="table table-bordered table-inverse table-responsive">
          <thead class="thead-inverse">
            <tr>
              <th>UserName</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody style={{ width: "100%", textAlign: "center", fontSize: "20px", border: "2px black solide" }}>
            {state.usersList.map((user, index) => (
              <tr key={index}>
                <td >{user.user}</td>
                <td >{user.email}</td>
                <td >{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </>
  );
};

export default ListeUsers;


