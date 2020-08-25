import db from "../db/index";

//Action types
const ADD_ARTICLE = "ADD_ARTICLE";

//Action creators
export const addArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    article,
  };
};

//Thunk creators
//For when user saves an article and adds into the database
export const fetchAddArticle = (id) => {
  return async (dispatch) => {
    try {
      db.collection(`users/${id}/savedOffline`) //replace testuser with actual user id
        .doc(id)
        .add({
          content: [],
          style: []
        })
        .then((doc) => {
          if (!doc.exists) return;
          console.log("Document data: ", doc.data());
          let data = doc.data();
          dispatch(addArticle(data));
        });
    } catch (err) {
      console.error(err);
    }
  };
};

//Reducer
const initialState = [];
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return action.article;
    default:
      return state;
  }
}

