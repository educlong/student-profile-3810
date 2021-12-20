import { Component } from "react";
import Part03 from "./Part03";
/**
 * @date Dec 19, 2021
 * @author DUC LONG NGUYEN (Paul)
 * @A Display the list of students, search function (search names, search tags, add tags) and grade details for each student
 * @returns 
 */


class Part05 extends Component {
    render() {
        return (    
            <Part03 details="visibility" searchTags="d-block" searchTag="visibility"/>
        );
    }
}

export default Part05;