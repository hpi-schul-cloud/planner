import React from "react";
import { storiesOf } from "@storybook/react";
import Test from "../src/components/Test";
import SchicView from "../src/components/schiC/SchicView";
import { action } from "@storybook/addon-actions";

storiesOf("SchicView", module).add("default", () => (
  <SchicView onSave={action("onSave")} />
));
