import React from 'react';
import { Link } from 'react-router-dom';

const HomePageComponent = () => {
    return (
        <div className="home-page">
             <header>
        <h1 className='text-center'>eBookShelf</h1>
    </header>
            
            <div className="row">
                <div className="col-md-3">
                    <div className="card h-100">
                        <div className="card-body fixed-card-body card-background">
                            <h5 className="card-title">Books</h5>
                            <p className="card-text">View, add, update, and delete books in the library.</p>
                            <Link to="/bookInfo" className="btn btn-primary">Manage Books</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card h-100">
                        <div className="card-body fixed-card-body card-background">
                            <h5 className="card-title">Borrow Book</h5>
                            <p className="card-text">Borrow a book from the library.</p>
                            <Link to="/bookInfo" className="btn btn-primary">Borrow Book</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card h-100">
                        <div className="card-body fixed-card-body card-background">
                            <h5 className="card-title">Return Book</h5>
                            <p className="card-text">Return a borrowed book to the library.</p>
                            <Link to="/return-book" className="btn btn-primary">Return Book</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card h-100">
                        <div className="card-body fixed-card-body card-background">
                            <h5 className="card-title">Students</h5>
                            <p className="card-text">View, add and delete students.</p>
                            <Link to="/studentInfo" className="btn btn-primary">Manage Students</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageComponent;
