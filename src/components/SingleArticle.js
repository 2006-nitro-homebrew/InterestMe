import React from "react";
import ReactDOM from "react-dom";
import db from "../db/index";
import { connect } from "react-redux";
import { fetchArticle } from "../store/singleArticle";

export class SingleArticle extends React.Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    const articleId = this.props.match.params.articleId;
    this.props.getArticle(articleId);
  }

  render() {
    let article = this.props.article;

    return (
      // <div>
      //   {article.length > 0 ? (
      //     <div>
      //       <h1>{article.name}</h1>
      //       <h3>Source: {article.source}</h3>
      //       <h3>{article.content}</h3>
      //     </div>
      //   ) : (
      //     <h1>No Article</h1>
      //   )}
      // </div>

      <div>
        <h1>{article.name}</h1>
        <h3>Source: {article.source}</h3>
        <h3>{article.content}</h3>
      </div>
    );
  }
}

const mapState = (state) => {
  return { article: state.article };
};

const mapDispatch = (dispatch) => {
  return {
    getArticle: (id) => dispatch(fetchArticle(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleArticle);
