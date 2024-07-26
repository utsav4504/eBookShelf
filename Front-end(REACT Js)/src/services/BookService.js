import axios from 'axios';
const Book_BASE_REST_API_URL='http://localhost:8080/api/books';
const Student_BASE_REST_API_URL='http://localhost:8080/api/users';
class BookService{
    getAllBooks(){
        return axios.get(Book_BASE_REST_API_URL)
    }
    createBook(book){
        return axios.post(Book_BASE_REST_API_URL,book)
    }
getBookById(bookId){
return axios.get(Book_BASE_REST_API_URL+'/'+bookId);
}
getUserById(userId){
    return axios.get(Student_BASE_REST_API_URL+'/'+userId);
}
updateBook(bookId,book){
    return axios.put(Book_BASE_REST_API_URL+'/'+bookId,book)
}
borrowBook(bookId, userId) {
    return axios.post(`${Book_BASE_REST_API_URL}/${bookId}/borrow/${userId}`);
}

returnBook(bookId) {
    return axios.post(Book_BASE_REST_API_URL + '/' + bookId + '/' + 'return');
}
deleteBook(bookId){
    return axios.delete(Book_BASE_REST_API_URL+'/'+bookId);
        }
}
export default new BookService();