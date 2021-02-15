import { PureComponent } from "react";

class Employees extends PureComponent {
  state = {
    isLoad: false,
    error: null,
    items: [],
  };
  render() {
    return (
      <div>
        <h1>Employees</h1>
      </div>
    );
  }
}

export default Employees;
