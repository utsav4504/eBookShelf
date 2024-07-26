import React, { useState, useEffect } from 'react';
import BookService from '../services/BookService';
import { useNavigate, useParams } from 'react-router-dom';

const BorrowBookComponent = () => {
    const { bookId } = useParams();
    const [userId, setUserId] = useState('');
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await BookService.getBookById(bookId);
                setBook(response.data);
            } catch (err) {
                setError('Error fetching book details.');
            } finally {
                setLoading(false);
            }
        };
        
        fetchBook();
    }, [bookId]);

    const handleBorrow = () => {
        if (book && !book.borrowed) {
            BookService.borrowBook(bookId, userId)
                .then(response => {
                    console.log('Book borrowed:', response.data);
                    navigate('/bookInfo');
                })
                .catch(error => {
                    console.error('Error while borrowing a book:', error);
                    setError('Error while borrowing a book.');
                });
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    return (
        <div className="container">
            <h2 className="text-center">Borrow Book</h2>
            <div className="card col-md-6 offset-md-3 offset-md-3">
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label className="form-label">User ID:</label>
                            <input 
                                type="text" 
                                placeholder="Enter User ID" 
                                name="userId" 
                                className="form-control"
                                value={userId}
                                onChange={e => setUserId(e.target.value)} 
                            />
                        </div>
                        <button 
                            type="button" 
                            className="btn btn-success" 
                            onClick={handleBorrow}
                            disabled={book && book.borrowed}
                        >
                            Borrow
                        </button>
                    </form>
                    {book && book.borrowed && (
                        <div className="alert alert-warning mt-3">
                            This book is already borrowed.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BorrowBookComponent;
