import { combineReducers } from 'redux';
import MentorsReducer from './reducer_mentors.jsx';
import SelectedMentor from './reducer_selected_mentor.jsx';


const rootReducer = combineReducers({
  mentors: MentorsReducer,
  selectedMentor: SelectedMentor
});

export default rootReducer;