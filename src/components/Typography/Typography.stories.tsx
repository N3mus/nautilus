import { Meta, StoryObj } from "@storybook/react/*";
import Typography from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "Changing the variant mainly changes the size",
      control: {
        type: "select",
      },
      options: [
        "display",
        "display2",
        "heading",
        "heading2",
        "heading3",
        "heading4",
        "subheading",
        "subheading2",
        "paragraph",
        "paragraph2",
        "paragraph3",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Display: Story = {
  args: {
    variant: "display",
    children: "Display",
  },
};

export const Display2: Story = {
  args: {
    variant: "display2",
    children: "Display 02",
  },
};

export const Heading: Story = {
  args: {
    variant: "heading",
    children: "Heading 01",
  },
};

export const Heading2: Story = {
  args: {
    variant: "heading2",
    children: "Heading 02",
  },
};

export const Heading3: Story = {
  args: {
    variant: "heading3",
    children: "Heading 03",
  },
};

export const Heading4: Story = {
  args: {
    variant: "heading4",
    children: "Heading 04",
  },
};

export const SubHeading: Story = {
  args: {
    variant: "subheading",
    children: "Subheading 01",
  },
};

export const SubHeading2: Story = {
  args: {
    variant: "subheading2",
    children: "Subheading 02",
  },
};

export const Paragraph: Story = {
  args: {
    variant: "paragraph",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
};

export const Paragraph2: Story = {
  args: {
    variant: "paragraph2",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
};

export const Paragraph3: Story = {
  args: {
    variant: "paragraph3",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
};
