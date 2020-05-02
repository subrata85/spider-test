import React, { Component } from "react";
import { Provider } from "../../context/context";

import AddParentFolder from "./addParentFolder";
import ParentFolderComponent from "./parentFolderComponent";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      directory: [
        {
          id: 1,
          fileName: "For Sale",
          children: [],
        },
      ],
      parentFolderName: "",
      childFolder: [],
    };
  }

  addNewFolder = () => {
    let directory = this.state.directory;
    let dirLength = directory.length;

    var folderName = prompt("Enter folder name", "");

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

  showChildFolder = (index) => {
    let directory = this.state.directory[index];
    console.log("foldddd", directory);
    this.setState({
      parentFolderName: directory.fileName,
    });
  };

  render() {
    const { directory, parentFolderName, childFolder } = this.state;
    const contextValue = {
      folder: this.state.directory,
      childFolder: this.state.childFolder,
      addFolder: this.addNewFolder,
      showChildFolder: this.showChildFolder,
    };
    return (
      <Provider value={contextValue}>
        <div className="container">
          {directory.length > 0 ? <ParentFolderComponent /> : null}
          <div style={{ marginTop: 20 }}>
            <AddParentFolder />
          </div>
          <hr />
          {childFolder.length > 0 ? <div>{parentFolderName}</div> : null}
        </div>
      </Provider>
    );
  }
}

export default Home;
