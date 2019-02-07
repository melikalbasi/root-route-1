import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import SubjectCard from "../components/Cards/SubjectCard";

class Subject extends Component {
  state = {
    subjects: [],
    user: this.props.user
  };


  componentDidMount() {
    // Parsing user info for reference
    console.log("USERNAME IN SUBJECTS", this.state.user.name);
    console.log("USEREMAIL IN SUBJECTS", this.state.user.email);
    API.getSubjects(this.props.match.params.pathid)
      .then(res => this.setState({ subjects: res.data }))
      .catch(err => console.log(err));
  }


  render() {

    return (
      <div>
        <Jumbotron />
        <h1 className="PickPathText">Subjects</h1>
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
