
import './App.css';
import React, { Component} from 'react'

import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import HomePageComponent from './components/HomePageComponent';
import AddUsersComponent from './components/AddUsersComponent';
import AddNewUserComponent from './components/AddNewUserComponent';
import AddBooksComponent from './components/AddBooksComponent';
import AddNewBookComponent from './components/AddNewBookComponent';
import BorrowBookComponent from './components/BorrowBookComponent';
import ReturnBookComponent from './components/ReturnBookComponent';
export default class App extends Component{
  render(){
  return (
<Router>
    <div>
        
<Navbar title="Library Management System"  />

   
     <Routes>
  
     <Route path="/" element={<HomePageComponent />} />
     <Route path="studentInfo" element={<AddUsersComponent/>}/>
     <Route path="/add-student" element={<AddNewUserComponent/>}/>
     <Route path="bookInfo" element={<AddBooksComponent/>}/>
     <Route path="/add-book" element={<AddNewBookComponent/>}/>
     <Route path="/edit-book/:id" element={<AddNewBookComponent/>}/>
     <Route path="/borrow-book/:bookId" element={<BorrowBookComponent />} />
     <Route path="/return-book/" element={<ReturnBookComponent />} />
    </Routes>
    </div>
    </Router>
  )
}
}


