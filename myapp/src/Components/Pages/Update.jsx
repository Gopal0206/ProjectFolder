import React, { useEffect } from 'react'
import {useParams , useNavigate } from 'react-router'
import axios from 'axios'
import { useForm } from 'react-hook-form'

function Update() {
        const { userId }   = useParams()
        console.log(userId ) // d8f5 
        const nav  =  useNavigate()
        const {register, handleSubmit, reset, setValue } = useForm()

        async function fetchUser(){
          const result = await axios.get(`http://localhost:8000/user/${userId}/`) ;// axios.get('http://localhost:3000/users/d8f5')
          //console.log(result.data) // {roll: '1', name: 'Ajay Koli', marks: '89', id: 'e42b'}
          //console.log('name', result.data.name) // value = objName.property
          setValue('roll', result.data.roll)
          setValue('name', result.data.name)
          setValue('marks', result.data.marks)
        }
        function saveData(data){
                axios.put(`http://localhost:8000/user/${userId}/`, data)// axios.put('http://localhost:3000/users/d8f5', updated_data)
                nav('/show')
                
        }
        useEffect(()=> {fetchUser()}, [])


     

  return (
    <>
    <center>
      <h1 style={{color: 'red'}}> UPDATE  User</h1>
      <div className='container'  style={{ maxWidth: '600px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit(saveData)} >
        <label htmlFor='r'>Enter Roll :</label><br/>
        <input type='number' id='r' {...register('roll')} className='form-control' /><br/><br/> 

        <label htmlFor='n'>Enter Name: </label><br/>
        <input type='text' id='n' {...register('name')} className='form-control'/><br/><br/>

        <label htmlFor='m'>Enter marks</label><br/>
        <input type='number' id='m' {...register('marks')} className='form-control' /><br/><br/>

        <input type='submit' value='UPDATE USER' className='btn btn-success col-5 btn-lg' />
        <button type='reset' className='btn btn-warning col-5 btn-lg float-end'>Reset</button>

      </form>
      </div>
      </center>
    </>
  )
}

export default Update
