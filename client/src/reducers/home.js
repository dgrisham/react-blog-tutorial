export default (state={}, action) => {
  switch(action.type) {
    case 'SET_EDIT':
      return {
        ...state,
        articleToEdit: action.article,
      };
    case 'EDIT_ARTICLE':
      return {
        ...state,
        articleToEdit: undefined,
      };
    default:
      return state;
  }
}
