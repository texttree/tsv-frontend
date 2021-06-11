const path = require('path');
const { name, version, url } = require('./package.json');

let sections = [
  {
    name: 'SendToTSV',
    content: 'src/components/SendToTSV/SendToTSV.md',
  },
  {
    name: 'SendError',
    content: 'src/components/SendError/SendError.md',
  },
];

module.exports = {
  //  components: 'src/components/**/[A-Z]*.js',
  ribbon: {
    url,
    text: 'Open on GitHub',
  },
  title: `${name} v${version}`,
  template: {
    head: {
      meta: [
        {
          name: 'description',
          content: 'React component library for send user notes to TSV files',
        },
      ],
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Fira+Sans:400,600',
        },
      ],
    },
  },
  moduleAliases: { [name]: path.resolve(__dirname, 'src') },
  skipComponentsWithoutExample: true,
  sections,
  styles: {
    ComponentsList: {
      isSelected: {
        fontWeight: 'normal',
        '&>a': {
          fontWeight: 'bold !important',
        },
      },
    },
  },
  theme: {
    color: {
      link: '#4B4E6A',
      linkHover: '#2B3847',
      baseBackground: '#fff',
      border: '#D0DAE4',
      sidebarBackground: '#fff',
    },
    fontFamily: {
      base: '"Fira Sans", sans-serif',
    },
  },
  exampleMode: 'expand',
  usageMode: 'expand',
  pagePerSection: true,
  getComponentPathLine(componentPath) {
    const componentName = path.basename(componentPath, '.js');
    return `import { ${componentName} } from '${name}';`;
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
};
