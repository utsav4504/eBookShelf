import axios from 'axios';
const Student_BASE_REST_API_URL='http://localhost:8080/api/users';
class StudentService{
    getAllStudents(){
        return axios.get(Student_BASE_REST_API_URL)
    }
    createStudent(student){
        return axios.post(Student_BASE_REST_API_URL,student)
    }
    deleteStudent(userId){
return axios.delete(Student_BASE_REST_API_URL+'/'+userId);
    }
}
export default new StudentService();