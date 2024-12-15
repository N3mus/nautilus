import { fn } from "@storybook/test";
import Button from "../Button";
import { Meta, StoryObj } from "@storybook/react/*";
import buttonArgTypes from "./button-argtypes";

const meta: Meta<typeof Button> = {
  title: "Button/DangerPrimary",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "gray",
    },
  },
  tags: ["autodocs"],
  args: {
    variant: "dangerPrimary",
    onClick: fn(),
  },
  argTypes: buttonArgTypes,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "small",
    children: "BUTTON",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    children: "BUTTON",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "BUTTON",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "BUTTON",
  },
};
