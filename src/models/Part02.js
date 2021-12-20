import { Component } from "react";
import Students from './Students';
/**
 * @date Dec 19, 2021
 * @author DUC LONG NGUYEN (Paul)
 * @A Display the list of students (css)
 * @returns 
 */


class Part02 extends Component {
    render() {
        return (    
            <Students container="container padding-part02" 
                listStu="list-part02 pb-4 pt-4"
                ul="list-group list-group-flush text-left mx-auto"
                li="list-group-item" 
                rows="row d-flex align-items-center"
                stuImg="col-sm-3 img-student rounded-circle border border-dark"
                stuName="text-uppercase font-weight-bold h3 format-name"
                stuEmail="ml-4"
                stuCompany="ml-4"
                stuSkill="ml-4"
                stuAverage="ml-4"
                stuGrades="d-none"
                moreDetails="d-none"/>
        );
    }
}

export default Part02;