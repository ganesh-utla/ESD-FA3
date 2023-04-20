import './App.css';
import { useEffect, useState } from "react";

function App() {

  const [employees, setEmployees] = useState([]);

  const fetchEmployees = () => {
    fetch("https://crud-employee-grp4.cyclic.app/getEmp")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
      setEmployees(data);
    })
    .catch((e) => {
      console.error(e);
    })
  }

  useEffect(() => {
    fetchEmployees();
  }, []);


  return (
    <div className="App">
      <div className='emp-div'>
        <h2>List Of Employees</h2>
        <div className='emp-list'>
          {employees.length > 0 && employees.map((item, index) => (
            <div key={index} className='emp-item'>
              <div className='emp-img'><img src='acc-img.png' alt='acc' /></div>
              <div className='emp-details'>
                <div><b>Full Name:</b> {item.FIRST_NAME} {item.LAST_NAME}</div>
                <div><b>Gender:</b> {item.GENDER}</div>
                <div><b>Email:</b> {item.EMAIL}</div>
                <div><b>Phone:</b> {item.PHONE_NUMBER}</div>
                <div><b>Salary:</b> {item.SALARY}</div>
                <div><b>Location:</b> {item.CITY}</div>
              </div>
            </div>
          ))}
        </div>
        {employees.length===0 && <div>No Employee records found...</div>}
      </div>
    </div>
  );
}

export default App;
