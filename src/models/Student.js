import { Component } from "react";
import { connect } from 'react-redux';
/**
 * @date Dec 19, 2021
 * @author DUC LONG NGUYEN (Paul)
 * @A The student class represents a student and his/her information (name, email, pic, etc.) from the API
 * @returns 
 */

class Student extends Component{
    render(){
        return (        
            <li key={this.props.count} className={this.props.li}>
                <div className="container">
    
                    {/**part01, part02: Display the list of students, and css for web app*/}
                    <div className={this.props.rows}>
                        <img src={this.props.stu.pic} alt={this.props.stu.firstName+" "+this.props.stu.lastName} 
                            className={this.props.stuImg}>
                        </img>
                        <div className="col-sm-9 mr-0 pr-0">
                            <div className="container-fluid pr-0">
                                <div className="row">
                                    <div className="col-sm-11 pl-0 pr-0">
                                        <h5 className={this.props.stuName}>
                                            {this.props.stu.firstName} {this.props.stu.lastName}
                                        </h5>
                                        <div className={this.props.stuEmail}>Email: {this.props.stu.email}</div>
                                    </div>
                                    <div className={"col-sm-1 pl-0 pr-0 mt-2 details "+this.props.moreDetails} 
                                        onClick={()=>{  /**event handle for displaying the detail of a student' grades */
                                            this.props.studentStatus(
                                                [...this.props.detailStudent.slice(0,this.props.count),
                                                !this.props.detailStudent[this.props.count],
                                                ...this.props.detailStudent.slice(this.props.count+1)]
                                            )
                                        }}>
                                        {this.props.detailStudent[this.props.count] 
                                        ? <div className="text-center display-1 isDetails">-</div> 
                                        : <div className="text-center display-1 isDetails">+</div>}
                                    </div>
                                </div>
                            </div>
                            <div className={this.props.stuCompany}>Company: {this.props.stu.company}</div>
                            <div className={this.props.stuSkill}>Skill: {this.props.stu.skill}</div>
                            <div className={this.props.stuAverage}>Average: 
                                {this.props.stu.grades.reduce((sum,oneGrade)=>sum=sum+parseInt(oneGrade),0)/this.props.stu.grades.length}%
                            </div>
                            
                        </div>
                    </div>
                
                    {/**part04: Display grade details for each student*/}
                    <div className={"row  "+(this.props.detailStudent[this.props.count] ? "visibility" : "invisibility")}>
                        <ul className={this.props.stuGrades+" mt-3 push-4 col-sm-12 pl-0"}>
                            {
                                this.props.stu.grades.map((test, testIndex)=>{
                                    return(
                                        <li key={testIndex} className="list-unstyled">
                                            Test {(testIndex+1)}: &emsp; {test}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    
                    {/**part05: search tags (and add tags)*/}
                    <div className={"row invisibility "+this.props.searchTag}>
                        <div className=" push-4 col-sm-12 pl-0">
                            {this.props.listTags?.map((tag,indexTag)=>{
                                /**get all tags from the store and arrange them into each student */
                                if(parseInt(tag.substring(0,tag.indexOf("|")))===this.props.count)
                                    return (
                                        <button key={indexTag} className="tag tag pl-3 pr-3 mr-2">
                                            {tag.substring(tag.indexOf("|")+1).trim()}
                                        </button>
                                    )
                                else return <div className="d-none" key={indexTag}></div>
                            })}
                        </div>
                        <input className="form-control form-control-lg border-top-0 border-left-0 border-right-0 mr-3 pr-3 rounded-0 push-4 col-4 pl-0" 
                            type="text" placeholder="Add a tag" name="tags" 
                            onKeyPress={(event) => { 
                                /**
                                 * event handle after entering the name of tag from a student
                                 * -> add this tag into the store (Key Search store) for searching
                                */
                                if (event.key === "Enter" && event.target.value.trim().length>0) {
                                    this.props.allTags([...this.props.listTags, this.props.count+"|"+event.target.value])
                                }
                            }}></input>
                    </div>
                </div>
            </li>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        //this state stores a array of statement of the students' grades
        //  a element has a true value or false value 
        //  (true: display the grades detail, false: hide the grades detail)
        detailStudent: state.reducerStudent.detailStudent,
        //list of tags for all the students (initialization: null)
        listTags : state.reducerSearch.listTags,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        studentStatus: (detailStudent) => { //action for displaying the grade details of a student
            dispatch({type: "STUDENT_STATUS",detailStudent})
        },
        allTags: (listTags) => {            //action for pushing a tag into a list of tags
            dispatch({type: "KEY_SEARCH_TAG",listTags})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Student)