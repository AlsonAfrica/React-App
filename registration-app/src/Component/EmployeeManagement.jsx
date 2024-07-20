import React, { useState, useEffect } from 'react';
import './EmployeeManagement.css';

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);
  const [previousEmployees, setPreviousEmployees] = useState([]);

  useEffect(() => {
    // Fetch employees from local storage or initialize with sample data
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        position: 'Developer',
        picture: 'https://via.placeholder.com/150'
      },
      {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        phone: '098-765-4321',
        position: 'Designer',
        picture: 'https://via.placeholder.com/150'
      }
    ];
    setEmployees(storedEmployees);
  }, []);

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const handleDelete = (id) => {
    const employeeToDelete = employees.find(employee => employee.id === id);
    setEmployees(employees.filter(employee => employee.id !== id));
    setPreviousEmployees([...previousEmployees, employeeToDelete]);
  };

  const handleEdit = (id) => {
    console.log(`Edit employee with ID: ${id}`);
  };

  return (
    <div className="employee-management">
      <h1 class="Heading">Employee Management</h1>
      <div className="tables-container">
        <div className="table-container">
          <h2>Current Employees</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Position</th>
                <th>Picture</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.id}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.position}</td>
                  <td><img src={employee.picture} alt={employee.name} /></td>
                  <td className="actions">
                    <button className="edit-btn" onClick={() => handleEdit(employee.id)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(employee.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-container">
          <h2>Previous Employees</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Position</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {previousEmployees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.id}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.position}</td>
                  <td><img src={employee.picture} alt={employee.name} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagement;
