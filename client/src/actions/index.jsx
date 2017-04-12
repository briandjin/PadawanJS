export function selectMentor(mentor) {
  console.log('Action:', mentor);
  return {
    type: 'MENTOR_SELECTED',
    payload: mentor
  };
}