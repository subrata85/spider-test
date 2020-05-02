import React from "react";
import { Consumer } from "../../context/context";

class FolderComponent extends React.Component {
  render() {
    return (
      <div>
        <Consumer>
          {(value) =>
            value.folder.map((dir, index) => {
              return (
                <button type="button" key={index}>
                  <img
                    alt="fileName"
                    src="https://cdn.osxdaily.com/wp-content/uploads/2017/10/folder-ios-files-app.jpg"
                    width={140}
                    height={100}
                  />

                  <div
                    style={{
                      //background: "red",
                      color: "#ffffff",
                      position: "absolute",
                      top: 45,
                      marginLeft: 40,
                    }}
                  >
                    {" "}
                    {dir.fileName}
                  </div>
                </button>
              );
            })
          }
        </Consumer>
      </div>
    );
  }
}

export default FolderComponent;
