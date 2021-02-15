import { Component } from "react";
import { MdAdd } from "react-icons/md";
import "./style.css";

class Add extends Component {
  state = {
    value: "",
    id: 100,
  };

  handleChange = ({ target }) => {
    this.setState({
      value: target.value,
    });
  };

  addEmployee = () => {
    const { value, id } = this.state;
    if (!value) return;
    const user = {
      first_name: value,
      id,
    };
    this.props.add(user);
    this.setState((prevState) => ({ id: prevState.id + 1 }));
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
