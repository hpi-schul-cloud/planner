import { configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

addDecorator(
  withInfo({
    inline: true,
    source: false // Global configuration for the info addon across all of your stories.
  })
);

const req = require.context("../stories", true, /\.tsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
