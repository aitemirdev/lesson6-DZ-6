import React from 'react';
import "./App.css"


const UserTable = ({ users, onDelete }) => {
    return (
        <div className="table-container">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.length === 0 ? (
                    <tr>
                        <td colSpan={6}>The table is empty.</td>
                    </tr>
                ) : (
                    users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>
                                <button onClick={() => onDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    )
}

export default UserTable;

