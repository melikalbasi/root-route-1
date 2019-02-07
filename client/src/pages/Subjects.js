import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

import SubjectCard from "../components/Cards/SubjectCard";

const style = {
  SubjectHeader:{
    textAlign: "center",

  }
}

class Subject extends Component {
  state = {
    subjects: []
  };


  componentDidMount() {
    API.getSubjects(this.props.match.params.pathid)
      .then(res => this.setState({ subjects: res.data }))
      .catch(err => console.log(err));
  }


  render() {

    return (
      <div>
        <div className="SubjectHeader" style={style.SubjectHeader}>
        <h3>Click on any technology to find the best online courses</h3>
        </div>
        {this.state.subjects.map(subject => (
          <SubjectCard
            subject={subject}
            link={`/paths/${this.props.match.params.pathid}`}
          >
          </SubjectCard>
        ))}
      </div>
    );
  }
}

export default Subject;
