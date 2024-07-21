import React, { useState } from 'react';
import { useEmployeeContext } from '../contexts/EmployeeContext';
import './EmployeeManagement.css';
import EditEmployeeForm from './EditEmployeeForm';

const EmployeeManagement = () => {
  const { employees, setEmployees, previousEmployees, setPreviousEmployees } = useEmployeeContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [editingEmployee, setEditingEmployee] = useState(null);

  const handleDelete = (id) => {
    const employeeToDelete = employees.find(employee => employee.id === id);
    setEmployees(employees.filter(employee => employee.id !== id));
    setPreviousEmployees([...previousEmployees, employeeToDelete]);
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
  };

  const handleSave = (updatedEmployee) => {
    setEmployees(employees.map(employee => employee.id === updatedEmployee.id ? updatedEmployee : employee));
    setEditingEmployee(null);
  };

  const handleCancel = () => {
    setEditingEmployee(null);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEmployees = employees.filter(employee => employee.id.includes(searchQuery));

  return (
    <div className="employee-management">
      <h1>Employee Management</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by ID"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      {editingEmployee ? (
        <EditEmployeeForm
          employeeToEdit={editingEmployee}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
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
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.id}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.position}</td>
                    <td><img src={employee.picture} alt={employee.name} /></td>
                    <td className="actions">
                      <button className="edit-btn" onClick={() => handleEdit(employee)}>Edit</button>
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
      )}
    </div>
  );
};

export default EmployeeManagement;
