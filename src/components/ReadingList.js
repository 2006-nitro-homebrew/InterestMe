import React from "react";
import db from "../../db/index";

export default class ReadingList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: {},
    };
  }

  async componentDidMount() {
    const offline = db
      .collection("users")
      .doc("testuser")
      .collection("savedOffline");
    try {
      const allList = await offline.get();
      this.setState({ list: allList });
    } catch (error) {}
  }

  render() {
    return (
      <div>
        {this.state.list.forEach((doc) => {
          <div>{doc.data()}</div>;
        })}
      </div>
    );
  }
}
