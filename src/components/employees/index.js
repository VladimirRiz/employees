import { PureComponent } from "react";
import Employee from "../employee";

class Employees extends PureComponent {
  state = {
    isLoaded: false,
    error: null,
    userList: [],
  };

  componentDidMount() {
    fetch("https://reqres.in/api/users?per_page=12")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            userList: result.data,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  removeFromBasket = (index) => {
    let userList = [...this.state.userList];
    userList.splice(index, 1);
    this.setState({ userList });
  };

  getBody = () => {
    const { isLoaded, error, userList } = this.state;
    console.log(userList);
    if (error) {
      return <div>Error {error.message}</div>;
    } else if (!isLoaded) {
      return <p>Loading...</p>;
    } else
      return userList.map((item) => (
        <Employee
          key={item.id}
          name={item.first_name}
          remove={this.removeFromBasket}
          data={userList}
          obj={item}
        />
      ));
  };

  render() {
    return (
      <div>
        <h1>Employees</h1>
        {this.getBody()}
      </div>
    );
  }
}

export default Employees;
