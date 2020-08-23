import React from "react";
import ReactDOM from "react-dom";
import db from "../db/index";


export default class SingleArticle extends React.Component {
  constructor() {
    super();
    this.state = {
      article: {},
    };
  }

  async componentDidMount() {
    db.collection("users/testuser/savedOffline")
      .doc("sampleArticle")
      .get().then((doc) => {
        if (!doc.exists) return;
        console.log("Document data:", doc.data());
        let data = doc.data()
        this.setState({ article: data });
      });
  }


  render() {
    let article = this.state.article
    console.log(article)
    return (
      <div>
        {(Object.keys(article).length>0)?(
          <div>
          <h1>{article.name}</h1>
          <h3>Source: {article.source}</h3>
          <h3>{article.content}</h3>
          </div>
        ):<h1>No Article</h1>}
      </div >

    );
  }
}
