import React from "react";
import Modal from "./components/Modal";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  open = () => {
    this.setState({ show: true });
  };

  closeAlert = () => {
    //取消Action
    this.setState({
      show: false,
    });
  };
  commitAction = () => {
    //确认Action
    this.setState({
      show: false,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.open.bind(this)}>开启宝藏</button>
        <Modal
          show={this.state.show}
          name="模态框标题"
          text="模态框内容"
          closeAction={this.closeAlert.bind(this)}
          commitAction={this.commitAction.bind(this)}
        />
      </div>
    );
  }
}
export default App;
