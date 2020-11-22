import React from "react";
import PropTypes from "prop-types";
class Modal extends React.Component {
  //数据类型验证
  static propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    closeAlert: PropTypes.func,
    commitAction: PropTypes.func,
    show: PropTypes.bool,
  };
  //state 状态初始化
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      name: " ",
      text: " ",
    };
  }
  confirm = () => {
    this.props.commitAction();
  };
  cancel = () => {
    this.props.closeAction();
  };
  render() {
    return (
      <div
        className="alert_moudel"
        style={this.props.show ? { display: "block" } : { display: "none" }}
      >
        <h1 className="alert_title">{this.props.name}</h1>
        <p className="alert_content">{this.props.text}</p>
        <div className="button_group">
          <button onClick={this.cancel.bind(this)}>取消</button>
          <button onClick={this.confirm.bind(this)} className="alert_confirm">
            确定
          </button>
        </div>
      </div>
    );
  }
}
export default Modal;
