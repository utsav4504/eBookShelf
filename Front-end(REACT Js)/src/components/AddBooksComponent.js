
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookService from '../services/BookService';

const AddBooksComponent = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
       getAllBooks();
    }, []);
    const getAllBooks=()=>{
        BookService.getAllBooks().then((response)=>{
            setBooks(response.data);
    console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }
    const deleteBook=(bookId)=>{
        BookService.deleteBook(bookId).then((response)=>{
    getAllBooks();
        }).catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className='container'>
            
            <Link to="/add-book" className='btn btn-primary me-5 my-3'>Add book</Link>
            <Link to="/return-book" className='btn btn-primary me-5 my-3'>Return Book</Link>
            <h2 className="text-center">List of Books</h2>
            <table className='table bg-white table-bordered table-striped rounded shadow small table-hover'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Author's Name</th>
                        <th>ISBN No.</th>
                        <th>Borrowed</th>
                        <th>Borrowed By</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.isbn}</td>
                            <td>{book.borrowed ? 'Yes' : 'No'}</td>
                            <td>
                                {book.borrowedBy 
                                    ? (
                                        <div>
                                            {book.borrowedBy.name} <br />
                                            {book.borrowedBy.mobile_no}
                                        </div>
                                    ) 
                                    : 'N/A'}
                            </td>
                            <td>
                                <Link className="btn btn-info ms-5" to={`/edit-book/${book.id}`}>Update</Link>
                                <Link className="btn btn-warning ms-5" to={`/borrow-book/${book.id}`}>Borrow</Link>
                                <button className='btn btn-danger ms-5' onClick={(()=>deleteBook(book.id))}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AddBooksComponent;

