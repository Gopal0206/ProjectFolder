import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Delete() {
     // http://localhost:5173/delete/bfaf
     const navigate  =  useNavigate()

     // let params = useParams() // params = {'userId' : 'bfaf'}
     // let userId = params.userId

     const { userId }  = useParams()
    //  console.log(userId)

      // const [user, setUser] = useState([])  // user = []

      /*
     async function fetchUser(){
          let response  = await axios.get(`http://localhost:3000/users/${userId}`)
          console.log(response.data) // {roll: '1', name: 'Ajay', marks: '90', id: 'e42b'}
          setUser(response.data) // user =  {roll: '1', name: 'Ajay', marks: '90', id: 'e42b'}
      */

    function deleteUser(){
            axios.delete(`http://localhost:8000/user/${userId}/`)
            alert(`user deleted`)
            navigate('/show')
    }
     useEffect(()=> { deleteUser()}, [])  //12, 23 - 28 => if you dont want to show confirmation
     
  return (
    <div style={{textAlign: 'center'}}>
            {/*<h1 style={{color:'white', backgroundColor: 'yellow'}}>Confirmation</h1>
            <h1>Do you really want to delete the user of 
              name : <span style={{color: 'red'}}>{user.name}</span> and 
              id : <span style={{color:'red'}}> {user.id}</span>
            </h1>

            <button onClick={()=>{deleteUser()}} className='btn btn-success'>Yes</button>
            <button onClick={()=>{ navigate('/show')}} className='btn btn-warning' style={{margin: '20px'}}>No</button> */}
    </div>
  ) 
}

export default Delete
