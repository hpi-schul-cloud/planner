import React from "react";
import { storiesOf } from "@storybook/react";
import SchicView from "../src/components/schiC/SchicView";
import { action } from "@storybook/addon-actions";

storiesOf("SchicView", module).add("Default View", () => (
  <SchicView onSave={action("onSave")} />
));
