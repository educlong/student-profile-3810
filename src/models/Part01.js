import { Component } from "react";
import Students from './Students';
/**
 * @date Dec 19, 2021
 * @author DUC LONG NGUYEN (Paul)
 * @A Display the list of students
 * @returns 
 */

class Part01 extends Component {
    render() {
        return (    
            <Students container="padding-part01" listStu="" 
                ul="list-group list-group-flush text-left "
                li="list-group-item " rows=""
                stuImg="ml-3 pl-3 mb-4"
                stuName="ml-1 pl-1 mb-2"
                stuEmail="ml-1 pl-1 mb-2 mt-2"
                stuCompany="ml-1 pl-1 mb-2 mt-2"
                stuSkill="ml-1 pl-1 mb-2 mt-2"
                stuAverage="ml-1 pl-1 mb-2 mt-2"
                stuGrades="d-none"
                moreDetails="d-none"/>
        );
    }
}

export default Part01;