import React from "react";
import db from "../db/index";

export default class ReadingList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: {},
    };
  }

  async componentDidMount() {
    db.collection("users/testuser/savedOffline")
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({ list: data });
      });
  }

  renderTableHeader() {
    let header = Object.keys(this.state.list[0]).filter(key => key != "content")
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  render() {
    let allList = this.state.list
    console.log(allList)
    return (
      <div>
        <h3 id='title'>Saved Reading List</h3>
        <table id='readinglist'>
        <tbody>
          {(allList.length > 0)?<tr>{this.renderTableHeader()}</tr>:console.log()}
          {(allList.length > 0) ? allList.map(doc => (
            <tr key={doc.id}>
              <td>{doc.id}</td>
              <td>{doc.name}</td>
              <td>{doc.source}</td>
            </tr>
          )) : <h1>Nothing Saved</h1>}
        </tbody>
        </table>
      </div >
    );
  }
}
