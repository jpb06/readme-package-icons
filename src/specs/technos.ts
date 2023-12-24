import { iconsRemotePath } from '../constants/icons-remote-path.constant';

export type Techno = {
  docUrl?: string;
  iconUrl: string;
  dependenciesPattern?: RegExp;
};

export const technosSpecs = {
  angular: {
    dependenciesPattern: /@angular.*/,
    docUrl: 'https://angular.io/docs',
    iconUrl: `${iconsRemotePath}/Angular-Dark.svg`,
  },
  apollo: {
    dependenciesPattern: /.*apollo.*/,
    docUrl: 'https://www.apollographql.com/docs/react/',
    iconUrl: `${iconsRemotePath}/Apollo.svg`,
  },
  aws: {
    dependenciesPattern: /@aws-sdk.*/,
    docUrl: 'https://aws.amazon.com/developer/language/javascript/',
    iconUrl: `${iconsRemotePath}/AWS-Dark.svg`,
  },
  axios: {
    dependenciesPattern: /^axios$/,
    docUrl: 'https://axios-http.com/fr/docs/intro',
    iconUrl: `${iconsRemotePath}/Axios-Dark.svg`,
  },
  babel: {
    dependenciesPattern: /@babel.*|babel.*/,
    docUrl: 'https://babeljs.io/docs/en/',
    iconUrl: `${iconsRemotePath}/Babel-Dark.svg`,
  },
  'circle-ci': {
    dependenciesPattern: undefined,
    docUrl: 'https://circleci.com/docs',
    iconUrl: `${iconsRemotePath}/Circleci-Dark.svg`,
  },
  cockroachdb: {
    dependenciesPattern: undefined,
    docUrl: 'https://www.cockroachlabs.com/docs/cockroachcloud/quickstart.html',
    iconUrl: `${iconsRemotePath}/Cockroachdb-Dark.svg`,
  },
  'conventional-changelog': {
    dependenciesPattern:
      /^commitlint$|.*conventional-changelog.*|^@commitlint.*/,
    docUrl: 'https://github.com/conventional-changelog',
    iconUrl: `${iconsRemotePath}/CommitLint.Dark.svg`,
  },
  cypress: {
    dependenciesPattern: /^cypress$|^@cypress.*/,
    docUrl: 'https://docs.cypress.io/guides/overview/why-cypress',
    iconUrl: `${iconsRemotePath}/Cypress-Dark.svg`,
  },
  discordJs: {
    dependenciesPattern: /^discord\.js$/,
    docUrl: 'https://discord.js.org/#/docs/discord.js/main/general/welcome',
    iconUrl: `${iconsRemotePath}/Discord.svg`,
  },
  docker: {
    dependenciesPattern: undefined,
    docUrl: 'https://docs.docker.com',
    iconUrl: `${iconsRemotePath}/Docker.svg`,
  },
  dotenv: {
    dependenciesPattern: /^dotenv.*/,
    docUrl: 'https://github.com/motdotla/dotenv#readme',
    iconUrl: `${iconsRemotePath}/Dotenv-Dark.svg`,
  },
  elastic: {
    dependenciesPattern: /@elastic.*/,
    docUrl: 'https://www.elastic.co/guide/index.html',
    iconUrl: `${iconsRemotePath}/ElasticSearch-Dark.svg`,
  },
  emotion: {
    dependenciesPattern: /@emotion.*/,
    docUrl: 'https://emotion.sh/docs/introduction',
    iconUrl: `${iconsRemotePath}/Emotion-Dark.svg`,
  },
  esbuild: {
    dependenciesPattern: /esbuild.*/,
    docUrl: 'https://esbuild.github.io/getting-started/#install-esbuild',
    iconUrl: `${iconsRemotePath}/Esbuild-Dark.svg`,
  },
  eslint: {
    dependenciesPattern: /eslint.*/,
    docUrl: 'https://eslint.org/docs/latest/',
    iconUrl: `${iconsRemotePath}/Eslint-Dark.svg`,
  },
  express: {
    dependenciesPattern: /^express$/,
    docUrl: 'https://expressjs.com/en/starter/installing.html',
    iconUrl: `${iconsRemotePath}/ExpressJS-Dark.svg`,
  },
  faker: {
    dependenciesPattern: /^@faker-js.*/,
    docUrl: 'https://fakerjs.dev/guide/',
    iconUrl: `${iconsRemotePath}/Faker-Dark.svg`,
  },
  fastify: {
    dependenciesPattern: /^fastify.*/,
    docUrl: 'https://www.fastify.io/docs/latest/',
    iconUrl: `${iconsRemotePath}/Fastify-Dark.svg`,
  },
  'fly-io': {
    dependenciesPattern: undefined,
    docUrl: 'https://fly.io/docs/',
    iconUrl: `${iconsRemotePath}/FlyIo-Dark.svg`,
  },
  gatsby: {
    dependenciesPattern: /gatsby.*/,
    docUrl: 'https://www.gatsbyjs.com/docs',
    iconUrl: `${iconsRemotePath}/Gatsby.svg`,
  },
  git: {
    dependenciesPattern: undefined,
    docUrl: 'https://git-scm.com/doc',
    iconUrl: `${iconsRemotePath}/Git.svg`,
  },
  'github-actions': {
    dependenciesPattern: undefined,
    docUrl: 'https://docs.github.com/en/actions',
    iconUrl: `${iconsRemotePath}/GithubActions-Dark.svg`,
  },
  graphql: {
    dependenciesPattern: /^graphql$/,
    docUrl: 'https://graphql.org/learn/',
    iconUrl: `${iconsRemotePath}/GraphQL-Dark.svg`,
  },
  heroku: {
    dependenciesPattern: undefined,
    docUrl: 'https://devcenter.heroku.com/categories/reference',
    iconUrl: `${iconsRemotePath}/Heroku.svg`,
  },
  i18next: {
    dependenciesPattern: /.*i18next.*/,
    docUrl: 'https://www.i18next.com/overview/getting-started',
    iconUrl: `${iconsRemotePath}/I18next-Dark.svg`,
  },
  jasmine: {
    dependenciesPattern: /^jasmine$/,
    docUrl: 'https://jasmine.github.io/pages/docs_home.html',
    iconUrl: `${iconsRemotePath}/Jasmine-Dark.svg`,
  },
  javascript: {
    dependenciesPattern: undefined,
    docUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    iconUrl: `${iconsRemotePath}/JavaScript.svg`,
  },
  jest: {
    dependenciesPattern: /^jest$/,
    docUrl: 'https://jestjs.io/docs/getting-started',
    iconUrl: `${iconsRemotePath}/Jest.svg`,
  },
  jotai: {
    dependenciesPattern: /^jotai$/,
    docUrl: 'https://jotai.org/docs/introduction',
    iconUrl: `${iconsRemotePath}/Jotai-Dark.svg`,
  },
  jwt: {
    dependenciesPattern: /^jsonwebtoken$|^jose$/,
    docUrl: 'https://jwt.io',
    iconUrl: `${iconsRemotePath}/Jwt-Dark.svg`,
  },
  knex: {
    dependenciesPattern: /^knex$/,
    docUrl: 'https://knexjs.org/guide/',
    iconUrl: `${iconsRemotePath}/Knex-Dark.svg`,
  },
  lodash: {
    dependenciesPattern: /^lodash$/,
    docUrl: 'https://lodash.com',
    iconUrl: `${iconsRemotePath}/Lodash-Dark.svg`,
  },
  materialUI: {
    dependenciesPattern: /^@material-ui.*|^@mui.*/,
    docUrl: 'https://mui.com/material-ui/getting-started/overview/',
    iconUrl: `${iconsRemotePath}/MaterialUI-Dark.svg`,
  },
  mocha: {
    dependenciesPattern: /^mocha$/,
    docUrl: 'https://mochajs.org/#getting-started',
    iconUrl: `${iconsRemotePath}/Mocha-Dark.svg`,
  },
  mongodb: {
    dependenciesPattern: /^mongoose$|^mongodb$/,
    docUrl: 'https://www.mongodb.com',
    iconUrl: `${iconsRemotePath}/MongoDB.svg`,
  },
  msw: {
    dependenciesPattern: /^msw$/,
    docUrl: 'https://mswjs.io/docs/',
    iconUrl: `${iconsRemotePath}/Msw-Dark.svg`,
  },
  mysql: {
    dependenciesPattern: undefined,
    docUrl: 'https://dev.mysql.com/doc/',
    iconUrl: `${iconsRemotePath}/MySQL-Dark.svg`,
  },
  nestjs: {
    dependenciesPattern: /^@nestjs.*/,
    docUrl: 'https://docs.nestjs.com',
    iconUrl: `${iconsRemotePath}/NestJS-Dark.svg`,
  },
  nextjs: {
    dependenciesPattern: /^next$/,
    docUrl: 'https://nextjs.org/docs/getting-started',
    iconUrl: `${iconsRemotePath}/NextJS-Dark.svg`,
  },
  nginx: {
    dependenciesPattern: undefined,
    docUrl: 'https://docs.nginx.com',
    iconUrl: `${iconsRemotePath}/Nginx.svg`,
  },
  node: {
    dependenciesPattern: undefined,
    docUrl: 'https://nodejs.org/en/docs/',
    iconUrl: `${iconsRemotePath}/NodeJS-Dark.svg`,
  },
  npm: {
    dependenciesPattern: undefined,
    docUrl: 'https://docs.npmjs.com',
    iconUrl: `${iconsRemotePath}/Npm-Dark.svg`,
  },
  nuxt: {
    dependenciesPattern: /^nuxt$/,
    docUrl: 'https://nuxtjs.org/docs/get-started/installation',
    iconUrl: `${iconsRemotePath}/NuxtJS-Dark.svg`,
  },
  nx: {
    dependenciesPattern: /^nx$|^@nrwl.*/,
    docUrl: 'https://nx.dev/getting-started/intro',
    iconUrl: `${iconsRemotePath}/Nx-Dark.svg`,
  },
  passport: {
    dependenciesPattern: /^passport.*/,
    docUrl: 'https://www.passportjs.org/docs/',
    iconUrl: `${iconsRemotePath}/Passport-Dark.svg`,
  },
  pino: {
    dependenciesPattern: /.*pino.*/,
    docUrl: 'https://getpino.io',
    iconUrl: `${iconsRemotePath}/Pino-Dark.svg`,
  },
  pnpm: {
    dependenciesPattern: undefined,
    docUrl: 'https://pnpm.io/motivation',
    iconUrl: `${iconsRemotePath}/Pnpm-Dark.svg`,
  },
  postgresql: {
    dependenciesPattern: undefined,
    docUrl: 'https://www.postgresql.org/docs/',
    iconUrl: `${iconsRemotePath}/PostgreSQL-Dark.svg`,
  },
  prettier: {
    dependenciesPattern: /^prettier$/,
    docUrl: 'https://prettier.io/docs/en/index.html',
    iconUrl: `${iconsRemotePath}/Prettier-Dark.svg`,
  },
  prisma: {
    dependenciesPattern: /^prisma$|^@prisma.*/,
    docUrl: 'https://www.prisma.io/docs/',
    iconUrl: `${iconsRemotePath}/Prisma.svg`,
  },
  pulumi: {
    dependenciesPattern: /^@pulumi.*/,
    docUrl: 'https://www.pulumi.com/docs/',
    iconUrl: `${iconsRemotePath}/Pulumi-Dark.svg`,
  },
  react: {
    dependenciesPattern: /^react$/,
    docUrl: 'https://reactjs.org/docs/getting-started.html',
    iconUrl: `${iconsRemotePath}/React-Dark.svg`,
  },
  'react-hook-form': {
    dependenciesPattern: /^react-hook-form$/,
    docUrl: 'https://react-hook-form.com/get-started',
    iconUrl: `${iconsRemotePath}/ReactHookForm-Dark.svg`,
  },
  'react-query': {
    dependenciesPattern: /^react-query$|^@tanstack\/react-query$/,
    docUrl: 'https://tanstack.com/query/v4/docs/overview',
    iconUrl: `${iconsRemotePath}/ReactQuery-Dark.svg`,
  },
  redis: {
    dependenciesPattern: /^redis.*/,
    docUrl: 'https://redis.io/docs/',
    iconUrl: `${iconsRemotePath}/Redis-Dark.svg`,
  },
  redux: {
    dependenciesPattern: /^@reduxjs.*/,
    docUrl: 'https://redux.js.org/introduction/getting-started',
    iconUrl: `${iconsRemotePath}/Redux.svg`,
  },
  remix: {
    dependenciesPattern: /^@remix-run.*/,
    docUrl: 'https://remix.run/docs/en/v1',
    iconUrl: `${iconsRemotePath}/Remix-Dark.svg`,
  },
  rust: {
    dependenciesPattern: undefined,
    docUrl: 'https://www.rust-lang.org/learn',
    iconUrl: `${iconsRemotePath}/Rust.svg`,
  },
  rxjs: {
    dependenciesPattern: /^rxjs$/,
    docUrl: 'https://rxjs.dev/guide/overview',
    iconUrl: `${iconsRemotePath}/Rxjs-Dark.svg`,
  },
  sass: {
    dependenciesPattern: /^sass$/,
    docUrl: 'https://sass-lang.com/documentation/',
    iconUrl: `${iconsRemotePath}/Sass.svg`,
  },
  sequelize: {
    dependenciesPattern: /^sequelize$/,
    docUrl: 'https://sequelize.org',
    iconUrl: `${iconsRemotePath}/Sequelize-Dark.svg`,
  },
  socketio: {
    dependenciesPattern: /^socket.io.*/,
    docUrl: 'https://socket.io/fr/docs/v4/',
    iconUrl: `${iconsRemotePath}/SocketIO-Dark.svg`,
  },
  sonarcloud: {
    dependenciesPattern: undefined,
    docUrl: 'https://sonarcloud.io',
    iconUrl: `${iconsRemotePath}/Sonarcloud-Dark.svg`,
  },
  sqlite: {
    dependenciesPattern: undefined,
    docUrl: 'https://www.sqlite.org/docs.html',
    iconUrl: `${iconsRemotePath}/SQLite.svg`,
  },
  sqlserver: {
    dependenciesPattern: undefined,
    docUrl: 'https://docs.microsoft.com/en-us/sql/?view=sql-server-ver16',
    iconUrl: `${iconsRemotePath}/SqlServer-Dark.svg`,
  },
  storybook: {
    dependenciesPattern: /^@storybook.*/,
    docUrl: 'https://storybook.js.org/docs/react/get-started/introduction',
    iconUrl: `${iconsRemotePath}/Storybook-Dark.svg`,
  },
  'styled-components': {
    dependenciesPattern: /^styled-components$/,
    docUrl: 'https://styled-components.com/docs',
    iconUrl: `${iconsRemotePath}/StyledComponents.svg`,
  },
  svelte: {
    dependenciesPattern: /^svelte$|^@sveltejs.*/,
    docUrl: 'https://svelte.dev/docs',
    iconUrl: `${iconsRemotePath}/Svelte.svg`,
  },
  swagger: {
    dependenciesPattern: /.*swagger.*/,
    docUrl: 'https://swagger.io',
    iconUrl: `${iconsRemotePath}/Swagger-Dark.svg`,
  },
  swc: {
    dependenciesPattern: /^@swc.*/,
    docUrl: 'https://swc.rs/docs/getting-started',
    iconUrl: `${iconsRemotePath}/Swc-Dark.svg`,
  },
  tailwind: {
    dependenciesPattern: /^tailwindcss$/,
    docUrl: 'https://tailwindcss.com/docs/installation',
    iconUrl: `${iconsRemotePath}/TailwindCSS-Dark.svg`,
  },
  terraform: {
    dependenciesPattern: undefined,
    docUrl: 'https://www.terraform.io/intro',
    iconUrl: `${iconsRemotePath}/Terraform-Dark.svg`,
  },
  'testing-library': {
    dependenciesPattern: /^@testing-library.*/,
    docUrl: 'https://testing-library.com/docs/',
    iconUrl: `${iconsRemotePath}/TestingLibrary-Dark.svg`,
  },
  'type-stack': {
    dependenciesPattern: /^class-transformer$|^class-validator$/,
    docUrl: 'https://github.com/typestack',
    iconUrl: `${iconsRemotePath}/TypeStack-Dark.svg`,
  },
  typescript: {
    dependenciesPattern: undefined,
    docUrl: 'https://www.typescriptlang.org/docs/',
    iconUrl: `${iconsRemotePath}/TypeScript.svg`,
  },
  vercel: {
    dependenciesPattern: undefined,
    docUrl: 'https://vercel.com/docs',
    iconUrl: `${iconsRemotePath}/Vercel-Dark.svg`,
  },
  vscode: {
    dependenciesPattern: undefined,
    docUrl: 'https://code.visualstudio.com/docs',
    iconUrl: `${iconsRemotePath}/VSCode-Dark.svg`,
  },
  vuejs: {
    dependenciesPattern: /^vue$/,
    docUrl: 'https://vuejs.org/guide/introduction.html',
    iconUrl: `${iconsRemotePath}/VueJS-Dark.svg`,
  },
  webpack: {
    dependenciesPattern: /^webpack$/,
    docUrl: 'https://webpack.js.org/concepts/',
    iconUrl: `${iconsRemotePath}/Webpack-Dark.svg`,
  },
  webstorm: {
    dependenciesPattern: undefined,
    docUrl: 'https://www.jetbrains.com/webstorm/learn/',
    iconUrl: `${iconsRemotePath}/Webstorm-Dark.svg`,
  },
  yarn: {
    dependenciesPattern: undefined,
    docUrl: 'https://yarnpkg.com/api/',
    iconUrl: `${iconsRemotePath}/Yarn-Dark.svg`,
  },
  zod: {
    dependenciesPattern: /^zod$/,
    docUrl: 'https://github.com/colinhacks/zod#introduction',
    iconUrl: `${iconsRemotePath}/Zod-Dark.svg`,
  },
  'graphql-codegen': {
    dependenciesPattern: /^@graphql-codegen\/.*$/,
    docUrl: 'https://graphql.org/learn/',
    iconUrl: `${iconsRemotePath}/GrapgqlCodegen-Dark.svg`,
  },
  vite: {
    dependenciesPattern: /^vite$/,
    docUrl: 'https://vitejs.dev/guide/',
    iconUrl: `${iconsRemotePath}/Vite-Dark.svg`,
  },
  vitest: {
    dependenciesPattern: /^vitest$/,
    docUrl: 'https://vitest.dev/guide/',
    iconUrl: `${iconsRemotePath}/Vitest-Dark.svg`,
  },
  daisyui: {
    dependenciesPattern: /^daisyui$/,
    docUrl: 'https://daisyui.com/docs/install/',
    iconUrl: `${iconsRemotePath}/DaisyUi-Dark.svg`,
  },
  effect: {
    dependenciesPattern: /^effect$/,
    docUrl: 'https://www.effect.website/docs/quickstart',
    iconUrl: `${iconsRemotePath}/Effect-Dark.svg`,
  },
  framerMotion: {
    dependenciesPattern: /^framer-motion$/,
    docUrl: 'https://www.framer.com/motion/introduction/',
    iconUrl: `${iconsRemotePath}/FramerMotion-Dark.svg`,
  },
  temporal: {
    dependenciesPattern: /^@temporalio.*/,
    docUrl: 'https://docs.temporal.io/',
    iconUrl: `${iconsRemotePath}/Temporal-Dark.svg`,
  },
};
