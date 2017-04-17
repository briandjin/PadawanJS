import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';

function MentorCard (props) {
  return (
    <Card style={{marginTop: 50}}>
      <Image src={props.mentor.picture} />
      <Card.Content>
        <Card.Header>
          {props.mentor.name}
        </Card.Header>
        <Card.Meta>
          <span className='Location'>
            {props.mentor.location}
          </span>
        </Card.Meta>
        <Card.Description>
          <h5>Tech Stacks:</h5> {props.mentor.techStack.join(', ')}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  )
}

function mapStateToProps(state) {
  return {
    mentor: state.selectedMentor,
  };
}

export default connect(mapStateToProps)(MentorCard);