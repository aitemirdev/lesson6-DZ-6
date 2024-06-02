import React from 'react';
import { useForm } from 'react-hook-form';
import "./App.css"


const UserForm = ({ onSubmit }) => {
    const { register, handleSubmit, reset } = useForm();

    const handleFormSubmit = (data) => {
        onSubmit(data);
        reset();
    };


    return (
        <div className="form-container">
            <h2>User Form</h2>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <input {...register('name', { required: true })} placeholder="Name" />
                <input {...register('username', { required: true })} placeholder="Username" />
                <input {...register('email', { required: true })} placeholder="Email" />
                <input {...register('phone', { required: true })} placeholder="Phone" />
                <input {...register('website')} placeholder="Website" />
                <button type="submit">Create</button>
                <button type="button" onClick={reset}>
                    Clear Table
                </button>
            </form>
        </div>

    );
};

export default UserForm;