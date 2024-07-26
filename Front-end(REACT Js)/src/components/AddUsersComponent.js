
import React, { useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import StudentService from '../services/StudentService'

const AddUsersComponent = () => {
const [student,setStudent]=useState([])
useEffect(()=>{
  getAllStudents();
},[])
const getAllStudents=()=>{
    StudentService.getAllStudents().then((response)=>{
        setStudent(response.data);
console.log(response.data);
    }).catch(error=>{
        console.log(error);
    })
}
const deleteStudent=(studentId)=>{
    StudentService.deleteStudent(studentId).then((response)=>{
getAllStudents();
    }).catch(error=>{
        console.log(error);
    })
}
  return (
    <div className='container '>
         <Link to="/add-student" className='btn btn-primary me-5 my-3'>Add Student</Link>
        
      <h2 className="text-center">List of Students</h2>
   
      <table className='table bg-white table-bordered table-striped rounded shadow small table-hover'>
      
<thead>
    <th >Student Id</th>
    <th>Student Name</th>
    <th>Mobile No.</th>
    <th>Actions</th>
</thead>
<tbody>
    {
        student.map(
            student =>
            <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.mobile_no}</td>
                <td>
                    <button className='btn btn-danger' onClick={(()=>deleteStudent(student.id))}>Delete</button>
                </td>
            </tr>
        )
    }
</tbody>
      </table>
      
     
    </div>

  )

}

export default AddUsersComponent
