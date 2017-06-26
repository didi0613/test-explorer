import React from "react";
import { FormattedMessage } from "react-intl";

import styles from "../../src/styles/test-explorer.css";
import messages from "../lang/default-messages";

export default class TestExplorer extends React.Component {
  render() {
    return (
      <div className={styles.someStyle}>
        <FormattedMessage {...messages.editMe} />
      </div>
    );
  }
}

TestExplorer.displayName = "TestExplorer";

TestExplorer.propTypes = { };

TestExplorer.defaultProps = { };
