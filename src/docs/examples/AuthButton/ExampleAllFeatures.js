import React from "react";
import AuthButton from "../../../components/AuthButton";

/** All features enabled */
class ExampleAllFeatures extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  onRequestSearchHandler(query) {
    console.log('HOHO, you are searching for...', query);
  }

  render() {
    return (
      <div>
        <AuthButton
          value={this.state.value}
          onChange={newValue => this.setState({ value: newValue })}
          onRequestSearch={() => this.onRequestSearchHandler(this.state.value)}
        />
      </div>
    );
  }
}

export default ExampleAllFeatures;
