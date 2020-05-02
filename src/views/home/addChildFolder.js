import React from "react";
import { Consumer } from "../../context/context";

const AddChildFolder = (props) => {
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
};

export default AddChildFolder;
