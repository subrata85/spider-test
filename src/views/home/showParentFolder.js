import React from "react";
import { Consumer } from "../../context/context";

const ShowParentFolder = (props) => {
  return (
    <div>
      <Consumer>
        {(value) =>
          value.parentFolder.map((dir, index) => {
            return (
              <button
                type="button"
                key={index}
                style={{ marginTop: 10 }}
                onClick={() => value.showChildFolder(index)}
              >
                <img
                  alt="fileName"
                  src="https://cdn.osxdaily.com/wp-content/uploads/2017/10/folder-ios-files-app.jpg"
                  width={100}
                  height={80}
                />

                <div
                  style={{
                    // background: "red",
                    color: "#ffffff",
                    position: "absolute",
                    top: 45,
                    marginLeft: 15,
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
};

export default ShowParentFolder;
