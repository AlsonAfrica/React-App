// src/Component/EmployeeForm.jsx
import React, { useState } from 'react';
import { useEmployeeContext } from '../contexts/EmployeeContext';
import './EmployeeForm.css';

const FormEmployee = () => {
  const { setEmployees } = useEmployeeContext();
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [picture, setPicture] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPicture(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate ID and phone number
    if (!/^\d{13}$/.test(id)) {
      alert('ID must be exactly 13 digits.');
      return;
    }

    if (!/^0\d{9}$/.test(phone)) {
      alert('Phone number must be exactly 10 digits starting with 0.');
      return;
    }

    const newEmployee = {
      name,
      id,
      email,
      phone,
      position,
      picture: picture || 'https://via.placeholder.com/150'
    };

    setEmployees(prevEmployees => [...prevEmployees, newEmployee]);

    // Clear form fields
    setName('');
    setId('');
    setEmail('');
    setPhone('');
    setPosition('');
    setPicture('');
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <h2>Add New Employee</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      <input type="text" placeholder="Position" value={position} onChange={(e) => setPosition(e.target.value)} required />
      <input type="file" onChange={handleFileChange} required />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default FormEmployee;

