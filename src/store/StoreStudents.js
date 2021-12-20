const axios=require('axios');
/**
 * @date Dec 19, 2021
 * @author DUC LONG NGUYEN (Paul)
 * @A The reducer of the student information
 * @returns 
 */
const studentState={
    //get all students (a list of students from the API)
    getStudent: axios.get('https://api.hatchways.io/assessment/students')
                    .then((response)=>(response.data.students)),
    //this state stores a array of statement of the students' grades
    //  a element has a true value or false value 
    //  (true: display the grades detail, false: hide the grades detail)
    detailStudent : []
}

const reducerStudent = (state=studentState, action) => {
    switch(action.type){
        //action for displaying the grade details of a student
        case "STUDENT_STATUS":
            return {...state,detailStudent: action.detailStudent};
        //action for getting all the student from the API
        case "GET_ALL_STUDENTS":
            return state;
        default:
            return state;
    }
}

export default reducerStudent;