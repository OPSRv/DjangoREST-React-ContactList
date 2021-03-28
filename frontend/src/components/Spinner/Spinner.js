import React from "react";
import Loader from "react-loader-spinner";
import "./Spinner.css";

class Spinner extends React.Component {
  //other logic
  render() {
    return (
      <div className="spinner spinner-size">
        <Loader type="TailSpin" color="#45d9af" height={80} width={80} />
      </div>
    );
  }
}
export default Spinner;
