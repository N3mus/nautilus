import { Meta, StoryObj } from "@storybook/react/*";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    placeholder: "example input",
  },
  argTypes: {
    variant: {
      description: "Changing the variant mainly changes the color",
      control: {
        type: "select",
      },
      options: ["light", "dark"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    variant: "light",
  },
};

export const LightDisabled: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    variant: "light",
    disabled: true,
  },
};

export const Dark: Story = {
  args: {
    variant: "dark",
  },
};

export const DarkDisabled: Story = {
  args: {
    variant: "dark",
    disabled: true,
  },
};
