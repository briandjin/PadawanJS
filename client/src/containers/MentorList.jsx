import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle } from 'react-materialize';
import { selectMentor } from '../actions/index.jsx'
import { bindActionCreators } from 'redux';
import MentorPage from '../components/MentorPage.jsx';
import { Link } from 'react-router';
import { getMentors } from '../actions/mentorActions.jsx'

class MentorList extends Component {
  componentDidMount() {
    this.props.getMentorsAction.getMentors();
  }

  renderList() {
    return this.props.mentors.filtered.map((mentor, index) => {
      return (
        <div style={{marginTop: 100}}>
        <Card 
        key={index}
        header={
          <CardTitle 
            reveal 
            image={mentor.picture} 
            waves='light'/>}
        title={mentor.name}
        reveal={
              <div>
                <ul>
                  <br />
                  <li>Location: {mentor.location}</li>
                  <li>Expertise: {mentor.techStack.join(', ')}</li>
                </ul>
                <Link
                  to={"/profile/" + mentor.id}
                  onClick={()=> this.props.selectMentorAction.selectMentor(mentor)}
                  className="viewProfileButton">View Profile
                </Link>
                <button className="requestLightSaberButton">Request Lightsaber</button>
              </div>
            }>
        </Card>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="cardsContainer">
        {this.renderList()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    mentors: state.mentors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMentorsAction: bindActionCreators({getMentors: getMentors}, dispatch),
    selectMentorAction: bindActionCreators({selectMentor: selectMentor}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MentorList)