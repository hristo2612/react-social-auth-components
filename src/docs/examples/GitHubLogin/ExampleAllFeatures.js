import React from "react";
import GitHubLogin from "../../../components/GitHubLogin";

const GitHubClientId = process.env.NODE_ENV === "production" ? "ce6876ac12e6f9f512b9" : "3145d9a7608514f31567";

/** All features enabled */
class ExampleAllFeatures extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  onSuccess(res) {
    console.log(res)
  }

  onFailure(err) {
      console.log(err);
  }

  render() {
    return (
      <div>
        <GitHubLogin 
            clientId={GitHubClientId}
            className="styledButton"
            redirectUri=""
            scope="user"
            onSuccess={this.onSuccess}
            onFailure={this.onFailure} />
      </div>
    );
  }
}

export default ExampleAllFeatures;
