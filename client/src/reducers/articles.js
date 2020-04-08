export default (state=[], action) => {
  switch(action.type) {
    case 'HOME_PAGE_LOADED':
      return action.data.articles;
    case 'SUBMIT_ARTICLE':
      return [action.data.article].concat(state);
    case 'DELETE_ARTICLE':
      return state.filter(article => article._id !== action.id);
    case 'EDIT_ARTICLE':
      let articles = state.map(article => {
        if (article._id === action.data.article._id) {
          return {
            ...action.data.article,
          }
        }
        return article;
      });
      console.log('articles: ', articles);
      return articles;
    default:
      return state;
  }
};
