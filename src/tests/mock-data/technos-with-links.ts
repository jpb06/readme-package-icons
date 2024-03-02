import { Techno } from '../../specs/technos';

export const technosWithLinks: Techno[] = [
  {
    dependenciesPattern: /esbuild.*/,
    docUrl: 'https://esbuild.github.io/getting-started/#install-esbuild',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/esbuild.svg',
  },
  {
    dependenciesPattern: /eslint.*/,
    docUrl: 'https://eslint.org/docs/latest/',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg',
  },
  {
    dependenciesPattern: /^express$/,
    docUrl: 'https://expressjs.com/en/starter/installing.html',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
];
