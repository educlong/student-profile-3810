import { Component } from "react";
import { connect } from 'react-redux';
import Student from "./Student";
/**
 * @date Dec 19, 2021
 * @author DUC LONG NGUYEN (Paul)
 * @A The students class represents a list of students from the API
 * @returns 
 */

class Students extends Component{
    constructor(props){
        super(props);
        this.state={
            stateStudent: null, //store a list of students from the API
            status: [],
        }
    }
    
    /**
     * before render, get all students from the API (in the store) and store this list into stateStudent state 
    */
    renderStudents = async() => {
        try {
            var self = this;
            await this.props.students.then((res)=>{
                self.setState({
                    stateStudent: res
                })
            })
            for (let index = 0; index < self.state.stateStudent.length; index++) {
                this.setState({status:[...this.state.status, false]});
            }
            this.props.studentStatus(this.state.status)
        } catch (err) {
            console.log(err);
        }
    }
    
    componentDidMount() {
        this.renderStudents();
    }


    render(){
        return (        
            <div className={this.props.container}>
                <div className={this.props.listStu}>
                    <ul className={this.props.ul}> 
                        {
                            this.state.stateStudent?.map((stu, count) => {
                                /**if statement for search name */
                                if(stu.firstName.toLowerCase().includes(this.props.keySearch.trim().toLowerCase()) || 
                                    stu.lastName.toLowerCase().includes(this.props.keySearch.trim().toLowerCase())){
                                    /**get each tag for search tags */
                                    var indexTag = -1
                                    if(this.props.keyTag.trim().length>0){
                                        this.props.listTags?.forEach(tag => {
                                            if(tag.substring(tag.indexOf("|")+1).trim().toLowerCase().includes(this.props.keyTag) 
                                                && parseInt(tag.substring(0,tag.indexOf("|")))===count){
                                                indexTag=count
                                            }
                                        })
                                    }
                                    /**render student based on search name or search tags */
                                    if(this.props.keyTag.trim().length===0                      //render student based on search name
                                    || (this.props.keyTag.trim().length>0 && indexTag===count)) //render student based on search tags
                                        return(
                                            <Student li={this.props.li}
                                                rows={this.props.rows} 
                                                stuImg={this.props.stuImg}
                                                stuName={this.props.stuName}
                                                stuEmail={this.props.stuEmail}
                                                stuCompany={this.props.stuCompany}
                                                stuSkill={this.props.stuSkill}
                                                stuAverage={this.props.stuAverage}
                                                stuGrades={this.props.stuGrades}
                                                moreDetails={this.props.moreDetails}
                                                //for loop listStudent
                                                key={count}
                                                count={count}
                                                stu={stu}
                                                searchTag={this.props.searchTag}
                                                />
                                        )
                                    else return(<div key={count} className="d-none"></div>);
                                }
                                else return(<div key={count} className="d-none"></div>);
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        students: state.reducerStudent.getStudent,  //get all students (a list of students from the API)
        keySearch: state.reducerSearch.keySearch,   //key word that user typed to search the name of the student
        listTags : state.reducerSearch.listTags,    //list of tags for all the students (initialization: null)
        keyTag: state.reducerSearch.keyTag          //key word that user typed to search the name of the tag
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        studentStatus: (detailStudent) => {         //action for displaying the grade details of a student
            dispatch({type: "STUDENT_STATUS",detailStudent})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students)