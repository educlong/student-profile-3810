import { Component } from "react";
import Part03 from "./Part03";
/**
 * @date Dec 19, 2021
 * @author DUC LONG NGUYEN (Paul)
 * @A Display the list of students, search function (search names) and grade details for each student
 * @returns 
 */


class Part04 extends Component {
    render() {
        return (    
            <Part03 details="visibility" searchTags="d-none"/>
        );
    }
}

export default Part04;