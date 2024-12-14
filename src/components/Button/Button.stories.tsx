import { fn } from "@storybook/test";
import Button from "./Button";
import { Meta, StoryObj } from "@storybook/react/*";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "BUTTON",
  },
};
