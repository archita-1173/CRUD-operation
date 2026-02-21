import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateUsers = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3001/createUser', { name, email, age })
      .then(result => {
        console.log(result)
        navigate('/')
      })
      .catch(err => console.log(err))
  }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form action="" onSubmit={handleSubmit}>
            <h2>Add User</h2>
            <div className='mb-2'>
                <label htmlFor="">Name</label>
          <input type="text" placeholder='Enter Name' className='form-control' value={name} onChange={(e)=> setName(e.target.value)} />
                
                
            </div>
            <div className='mb-2'>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter Email' className='form-control' value={email} onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div className='mb-2'>
                <label htmlFor="">Age</label>
                <input type="number" placeholder='Enter Age' className='form-control' value={age} onChange={(e)=> setAge(e.target.value)} />
            </div>
            <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    
    </div>
  )
}

export default CreateUsers
