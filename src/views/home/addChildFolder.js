import React from "react";
import { Consumer } from "../../context/context";

class AddChildFolder extends React.Component {
  render() {
    return (
      <div>
        <Consumer>
          {(data) => (
            <button
              className="btn btn-info"
              onClick={() => data.addChildrenFolder()}
            >
              Add Child Folder
            </button>
          )}
        </Consumer>
      </div>
    );
  }
}

export default AddChildFolder;
