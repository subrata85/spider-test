import React from "react";
import { Consumer } from "../../context/context";

class AddParentFolder extends React.Component {
  render() {
    return (
      <div>
        <Consumer>
          {(data) => (
            <button className="btn btn-primary" onClick={data.addFolder}>
              Add Folder
            </button>
          )}
        </Consumer>
      </div>
    );
  }
}

export default AddParentFolder;
