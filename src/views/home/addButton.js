import React from "react";
import { Consumer } from "../../context/context";

class AddButton extends React.Component {
  cha = (addbtn) => {
    console.log("che", addbtn);
  };
  render() {
    return (
      <div>
        <Consumer>
          {(data) => (
            <button className="btn btn-succes" onClick={data.addFolder}>
              Add Folder
            </button>
          )}
        </Consumer>
      </div>
    );
  }
}

export default AddButton;
