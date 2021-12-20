import { Component } from "react";
import Students from './Students';
import { connect } from 'react-redux';
/**
 * @date Dec 19, 2021
 * @author DUC LONG NGUYEN (Paul)
 * @A Display the list of students and search function (search names and search tags)
 * @returns 
 */


class Part03 extends Component {

    render() {
        return (
            <div>

                {/**part03: search name of students */}
                <div className="container search-name">
                    <div className="container bg-white pt-1 format-search">
                        <div className="row">
                            <input className="form-control form-control-lg border-top-0 border-left-0 border-right-0 ml-3 pl-3 mr-3 pr-3 rounded-0" type="text" placeholder="Search by name"
                            name="key-search"
                            onChange={(event) => {  //event handle for search names through action getKey (in store)
                                var targetName = event.target.name; 
                                this.setState({[targetName]: event.target.value});
                                this.props.getKey(event.target.value);
                            }}></input>
                        </div>
                    </div>
                </div>

                {/**part05: search name of tags */}
                <div className={"container search-tag invisibility "+this.props.searchTags}>
                    <div className="container bg-white pt-1">
                        <div className="row">
                            <input className="form-control form-control-lg border-top-0 border-left-0 border-right-0 ml-3 pl-3 mr-3 pr-3 rounded-0" type="text" placeholder="Search by tag"
                            name="key-search"
                            onChange={(event) => {  //event handle for search tags through action getTags (in store)
                                var targetTag = event.target.name; 
                                this.setState({[targetTag]: event.target.value});
                                this.props.getTags(event.target.value);
                            }}></input>
                        </div>
                    </div>
                </div>

                {/**part03, part04, part05: search name, search tags (and add tags), grade details for each students */}
                <Students container="container padding-part03" 
                    listStu="list-part03 pb-4 pt-4"
                    ul="list-group list-group-flush text-left mx-auto"
                    li="list-group-item" 
                    rows="row d-flex align-items-center"
                    stuImg="col-sm-3 img-student rounded-circle border border-dark"
                    stuName="text-uppercase font-weight-bold h3 format-name"
                    stuEmail="ml-4"
                    stuCompany="ml-4"
                    stuSkill="ml-4"
                    stuAverage="ml-4"
                    stuGrades={"invisibility "+this.props.details}
                    moreDetails={"invisibility "+this.props.details}
                    searchTag={""+this.props.searchTag}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getKey: (keySearch) => {    //action for search the name of the student
            dispatch({type:"KEY_WORDS_FOR_SEARCH",keySearch})
        },
        getTags: (keyTag) => {      //action for search the name of the tag
            dispatch({type:"KEY_WORDS_FOR_TAG",keyTag})
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Part03)