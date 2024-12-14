import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";

import "../tailwind.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: "light", value: "#f3f3f3" },
        { name: "dark", value: "#131313" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];

export default preview;
