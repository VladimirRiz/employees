import { PureComponent } from "react";
import { MdDeleteForever } from "react-icons/md";
import Add from "../add";
import "./style.css";

class Employee extends PureComponent {
  checkIfExist = (arr, obj) => {
    return arr.findIndex((item) => {
      return item["first_name"] === obj["first_name"];
    });
  };

  removeFromBasket = () => {
    const { data, obj, remove } = this.props;
    const index = this.checkIfExist(data, obj);
    return remove(index);
  };

  render() {
    const { name } = this.props;
    return (
      <div className="employee">
        <h3>{name}</h3>
        <div>
          <MdDeleteForever className="remove" onClick={this.removeFromBasket} />
        </div>
      </div>
    );
  }
}

export default Employee;
