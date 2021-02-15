import { Component } from "react";
import { MdAdd } from "react-icons/md";
import "./style.css";

class Add extends Component {
  state = {
    value: "",
  };

  handleChange = ({ target }) => {
    this.setState({
      value: target.value,
    });
  };

  addEmployee = () => {
    const user = {
      first_name: this.state.value,
    };
    this.props.add(user);
  };

  render() {
    return (
      <div className="add">
        <h3>Add Employee</h3>
        <div className="add_employee">
          <input value={this.state.value} onChange={this.handleChange} />
          <MdAdd className="add__button" onClick={this.addEmployee} />
        </div>
      </div>
    );
  }
}

export default Add;
