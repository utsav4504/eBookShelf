import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import StudentService from '../services/StudentService'
import {useNavigate} from 'react-router-dom'
const AddNewUserComponent = () => {
    
    const[name,setName]=useState('')
    const[mobile_no,setMobileNo]=useState()
    const navigate=useNavigate();
    const saveStudent=(e)=>{
e.preventDefault();
const student={name,mobile_no};
StudentService.createStudent(student).then((response)=>{
console.log(response.data)
navigate('/StudentInfo')
}).catch(error=>{
    console.log(error);
})
    }
  return (
    <div>
        <div className='container'>
      <div className="row">
        <div className='card col-md-6 offset-md-3 offset-md-3 my-5'>
            <h2 className='text-center'>Add Student</h2>
            <div className='card-body'>
            <form>
<div className='form-group mb-2'>
    <label className='form-label'>Name :</label>
    <input type='text' placeholder="Enter Full Name" name='name' className='form-control' value={name} onChange={(e)=>setName(e.target.value)}></input>
  

</div>
<div className='form-group mb-2'>
    <label className='form-label'>Mobile No. :</label>

    <input type='number' placeholder="Enter Mobile No." name='MobileNo' className='form-control' value={mobile_no} onChange={(e)=>setMobileNo(e.target.value)}></input>

</div>
<button className='btn btn-success' onClick={(e)=>saveStudent(e)}>Submit</button>
<Link to='/studentInfo' className='btn btn-danger ms-5'>Cancel</Link>
            </form>

            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default AddNewUserComponent
