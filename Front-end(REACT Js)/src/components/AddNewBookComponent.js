import React, { useState,useEffect } from 'react'
import { Link,useParams } from 'react-router-dom';
import BookService from '../services/BookService'
import {useNavigate} from 'react-router-dom'
const AddNewBookComponent = () => {
    
    const[title,setTitle]=useState('')
    const[author,setAuthor]=useState('')
   const[isbn,setIsbn]=useState('')
    const navigate=useNavigate();
    const {id}=useParams()

    const saveOrUpdateBook=(e)=>{
e.preventDefault();
const book={title,author,isbn,borrowed: false,
    borrowedBy: null};
    if(id){
BookService.updateBook(id,book).then((response)=>{
    
navigate('/bookInfo')
}).catch(error=>{
    console.log(error);
})
    }
    else{
        BookService.createBook(book).then((response)=>{
            console.log(response.data)
            navigate('/bookInfo')
            }).catch(error=>{
                console.log(error);
            })
    }
}
    
    useEffect(()=>{
BookService.getBookById(id).then((response)=>{
    setTitle(response.data.title);
    setAuthor(response.data.author);
    setIsbn(response.data.isbn);
}).catch(error=>{
    console.log(error);
})
    },[])

   const heading=()=>{
        if(id){
            return <h2 className="text-center">Update Book</h2>
        }
        else{
            return <h2 className="text-center">Add Book</h2>
        }
    }
  return (
    <div>
        <div className='container'>
      <div className="row">
        <div className='card col-md-6 offset-md-3 offset-md-3 my-5'>
          {
            heading()
          }
            <div className='card-body'>
            <form>
<div className='form-group mb-2'>
    <label className='form-label'>Title:</label>
    <input type='text' placeholder="Title of the Book" name='name' className='form-control' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
  

</div>
<div className='form-group mb-2'>
    <label className='form-label'>Author's Name :</label>

    <input type='text' placeholder="Enter Name" name='authorName' className='form-control' value={author} onChange={(e)=>setAuthor(e.target.value)}></input>

</div>
<div className='form-group mb-2'>
    <label className='form-label'>ISBN :</label>

    <input type='text' placeholder="ISBN No" name='No' className='form-control' value={isbn} onChange={(e)=>setIsbn(e.target.value)}></input>

</div>
<button className='btn btn-success' onClick={(e)=>saveOrUpdateBook(e)}>Submit</button>
<Link to='/bookInfo' className='btn btn-danger ms-5'>Cancel</Link>
            </form>

            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default AddNewBookComponent
