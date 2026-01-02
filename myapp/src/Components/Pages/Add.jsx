import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Add() {
  const nav    =  useNavigate()
  const { register, handleSubmit, reset }   = useForm()

  function handleData(data){
            try{
              console.log(data)
              axios.post('http://127.0.0.1:8000/user/', data)
              reset()
              nav('/show')
            }
            catch(error){
              console.log('error:', error)
            }
              
  }
  
  return (
    <>
    <center>
      <h1 style={{color: 'red'}}> Add User</h1>
      <div className='container'  style={{ maxWidth: '600px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit(handleData)}>
        <label htmlFor='r'>Enter Roll :</label><br/>
        <input type='number' id='r' {...register('roll')} className='form-control' /><br/><br/> 

        <label htmlFor='n'>Enter Name: </label><br/>
        <input type='text' id='n' {...register('name')} className='form-control'/><br/><br/>

        <label htmlFor='m'>Enter marks</label><br/>
        <input type='number' id='m' {...register('marks')} className='form-control' /><br/><br/>

        <input type='submit' value='ADD USER' className='btn btn-success col-5 btn-lg' />
        <button type='reset' className='btn btn-warning col-5 btn-lg float-end'>Reset</button>

      </form>
      </div>
      </center>
    </>
  )
}

export default Add
