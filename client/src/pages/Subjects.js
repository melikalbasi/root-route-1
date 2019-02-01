import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";


class Subject extends Component {
  state = {
    subjects: []
  };


  componentDidMount() {
    API.getSubjects(this.props.match.params.id)
      .then(res => this.setState({ subjects: res.data }))
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
            <Jumbotron>
              <h1>SUBJECTS</h1>
            </Jumbotron>
              <List>
                {this.state.subjects.map(subject => (
                  <ListItem key={subject.id}>
                    <Link to={"/subjects/" + subject.id}>
                    <h2>
                        {subject.name}
                      </h2>
                      <p>
                        {subject.description}
                      </p>
                      <img src={subject.image} alt={subject.name} style={{height: 50}}></img>
                    </Link>
                  </ListItem>
                ))}
              </List>
      </div>
    );
  }
}

export default Subject;
