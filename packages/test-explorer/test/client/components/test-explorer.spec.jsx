/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import TestExplorer from "src/components/test-explorer";

describe("components/test-explorer", () => {

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<TestExplorer />);
      expect(component).to.not.be.null;
    });

  });

});
