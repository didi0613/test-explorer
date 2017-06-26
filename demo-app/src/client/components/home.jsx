import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";

import Header from "./header";
import SearchBar from "./search-bar";
import Menu from "./menu";

import {TestExplorer} from "test-explorer";

const locale = "en";

export class Home extends React.Component {
  render() {
    return (
      <IntlProvider locale={locale}>
        <div className="explorer">
          <Header/>
          <SearchBar/>
          <Menu/>
          <div className="explorer-body">
          </div>
        </div>
      </IntlProvider>
    );
  }
}

Home.propTypes = {
  children: PropTypes.node
};

export default connect((state) => state)(Home);
