import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookService from '../services/BookService';

const ReturnBookComponent = () => {
    const [bookId, setBookId] = useState('');
    const navigate = useNavigate();

    const returnBook = (e) => {
        e.preventDefault();
        BookService.returnBook(bookId).then((response) => {
            console.log(response.data);
            navigate('/bookInfo');
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3 my-5">
                    <h2 className="text-center">Return Book</h2>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label">Book ID:</label>
                                <input
                                    type="text"
                                    placeholder="Book ID"
                                    name="bookId"
                                    className="form-control"
                                    value={bookId}
                                    onChange={(e) => setBookId(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-success" onClick={returnBook}>Return</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReturnBookComponent;
