import React from "react";
import { storiesOf } from "@storybook/react";
import SchicView from "../src/components/schiC";
import { action } from "@storybook/addon-actions";
import { styles as schulCloudStyles } from "./schulCloudStyles";

storiesOf("SchicView", module)
  .add("with default styles", () => <SchicView onSave={action("onSave")} />)
  .add("with Schul-Cloud styles", () => {
    return <SchicView onSave={action("onSave")} styles={schulCloudStyles} />;
  });
