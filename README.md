# Portfolio website Jesse de Koe

Install guide for dummy me:

New Project -> Vite (react template) <br>
``
npm install
``

Then install mantine:

``
npm install @mantine/core @mantine/hooks @mantine/form @mantine/dates dayjs @mantine/charts recharts@2 @mantine/notifications @mantine/code-highlight @mantine/tiptap @tiptap/pm @tiptap/react @tiptap/extension-link @tiptap/starter-kit @mantine/dropzone @mantine/carousel embla-carousel-react@^7.1.0 @mantine/spotlight @mantine/modals @mantine/nprogress
``

Then:

``
npm install --save-dev postcss postcss-preset-mantine postcss-simple-vars
``
<br>

Then create a file that is called `postcss.config.cjs` put the following code in:

````
module.exports = {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '36em',
        'mantine-breakpoint-sm': '48em',
        'mantine-breakpoint-md': '62em',
        'mantine-breakpoint-lg': '75em',
        'mantine-breakpoint-xl': '88em',
      },
    },
  },
};
````

Then when everything is installed test it by running `npm run dev`