import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Show() {
  const [allData, setData] = useState([]);
  async function fetchAllUsers(){
    const results = await axios.get('http://localhost:8000/user/') 
    setData(results.data)
    console.log(results.data)
  }
  useEffect(()=>{fetchAllUsers()}, [])
  return (
    <div style={{border: '5px solid green', width: '500px', marginLeft: '400px'}}>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Roll Number</th>
            <th scope='col'>Name</th>
            <th scope='col'>Marks</th>
            <th scope='col' style={{textAlign: 'center'}}>Action</th>
          </tr>
        </thead>
        <tbody>
{
            allData.map(obj=>(
              
                <tr key={obj.id}>
                  <td>{obj.roll}</td>
                  <td>{obj.name}</td>
                  <td>{obj.marks}</td>
                  <NavLink to={`/update/${obj.id}`}><button className="btn btn-secondary">UPDATE</button></NavLink>
                  <NavLink to={`/delete/${obj.id}`}><button className="btn btn-warning">DELETE</button></NavLink>
                </tr>
                )
              
            )
          }
        </tbody>  
      </table>
    </div>
  )
}

export default Show