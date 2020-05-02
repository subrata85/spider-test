import React, { Component } from "react";
import { Provider } from "../../context/context";

import AddButton from "./addButton";
import FolderComponent from "./folderComponent";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      directory: [
        {
          id: 1,
          fileName: "Folder1",
          children: [
            {
              id: 100,
              fileName: "Accountancy",
            },
          ],
        },
      ],
    };
  }

  addNewFolder = () => {
    let directory = this.state.directory;
    let dirLength = directory.length;

    var folderName = prompt("Folder name", "");
    console.log("fol", folderName);

    if (folderName) {
      directory.push({
        id: dirLength + 1,
        fileName: folderName,
        children: [],
      });
      this.setState({
        directory,
      });
    }
  };

  render() {
    const { directory } = this.state;
    const contextValue = {
      folder: this.state.directory,
      addFolder: this.addNewFolder,
    };
    return (
      <Provider value={contextValue}>
        <div className="container">
          {directory.length > 0 ? <FolderComponent /> : null}
          <div style={{ marginTop: 20 }}>
            <AddButton />
          </div>
        </div>
      </Provider>
    );
  }
}

export default Home;
