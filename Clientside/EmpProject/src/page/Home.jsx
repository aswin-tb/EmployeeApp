import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEmployees, deleteEmployees } from '../services/fetchApi'; // Replace `fetchApi` with the correct API helper if necessary

function Home() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the list of employees when the component mounts
    const fetchEmployees = async () => {
      try {
        const response = await getEmployees();
        console.log(response.data); // Debugging purpose
        setEmployees(response.data); // Assuming response.data contains the employee list
      } catch (error) {
        console.error('Error fetching employees:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteEmployees(id); // Assuming `deleteCustomers` deletes an employee
      alert('Employee deleted successfully');
      setEmployees(employees.filter((employee) => employee.id !== id)); // Update state to reflect changes
    } catch (error) {
      console.error('Error deleting employee:', error);
      alert('Failed to delete employee');
    }
  };

  return (
    <div className="home">
      <h1>Welcome to the Employee Management System</h1>

      <div className="dashboard-options">
        <Link to="/create-employee" className="btn btn-primary">
          Create Employee
        </Link>
        <Link to="/create-form" className="btn btn-primary">
          Create Form
        </Link>
      </div>

      <h2>Employee List</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="employee-list">
          {employees.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Form</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.user.username}</td>
                    <td>{employee.form.name}</td>
                    <td>
                      <Link
                        to={`/edit-employee/${employee.id}`}
                        className="btn btn-warning"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(employee.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No employees found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
