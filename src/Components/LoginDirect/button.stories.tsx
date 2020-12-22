import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";

import { ButtonStyle } from "./styles";

export default {
  title: "Button",
  component: ButtonStyle,
};

const Template: Story<ComponentProps<typeof ButtonStyle>> = (args) => (
  <ButtonStyle {...args} >Button</ButtonStyle>
);

export const FirstStory = Template.bind({});
FirstStory.args = {
  margem: 30,
  borderColor: '#FFF',
  backgroundColor: "#E83F5B",
  textColor: '#FFF',
};
