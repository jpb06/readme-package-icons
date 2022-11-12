export type Techno = {
  docUrl?: string;
  iconUrl: string;
  dependenciesPattern?: RegExp;
};

export const technosSpecs = {
  angular: {
    dependenciesPattern: /@angular.*/,
    docUrl: 'https://angular.io/docs',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Angular-Dark.svg',
  },
  apollo: {
    dependenciesPattern: /.*apollo.*/,
    docUrl: 'https://www.apollographql.com/docs/react/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Apollo.svg',
  },
  aws: {
    dependenciesPattern: /@aws-sdk.*/,
    docUrl: 'https://aws.amazon.com/developer/language/javascript/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/AWS-Dark.svg',
  },
  axios: {
    dependenciesPattern: /^axios$/,
    docUrl: 'https://axios-http.com/fr/docs/intro',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Axios-Dark.svg',
  },
  babel: {
    dependenciesPattern: /@babel.*|babel.*/,
    docUrl: 'https://babeljs.io/docs/en/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Babel-Dark.svg',
  },
  'circle-ci': {
    dependenciesPattern: undefined,
    docUrl: 'https://circleci.com/docs',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Circleci-Dark.svg',
  },
  cockroachdb: {
    dependenciesPattern: undefined,
    docUrl: 'https://www.cockroachlabs.com/docs/cockroachcloud/quickstart.html',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Cockroachdb-Dark.svg',
  },
  'conventional-changelog': {
    dependenciesPattern:
      /^commitlint$|.*conventional-changelog.*|^@commitlint.*/,
    docUrl: 'https://github.com/conventional-changelog',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/CommitLint.Dark.svg',
  },
  cypress: {
    dependenciesPattern: /^cypress$|^@cypress.*/,
    docUrl: 'https://docs.cypress.io/guides/overview/why-cypress',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Cypress-Dark.svg',
  },
  discordJs: {
    dependenciesPattern: /^discord\.js$/,
    docUrl: 'https://discord.js.org/#/docs/discord.js/main/general/welcome',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Discord.svg',
  },
  docker: {
    dependenciesPattern: undefined,
    docUrl: 'https://docs.docker.com',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Docker.svg',
  },
  dotenv: {
    dependenciesPattern: /^dotenv.*/,
    docUrl: 'https://github.com/motdotla/dotenv#readme',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Dotenv-Dark.svg',
  },
  elastic: {
    dependenciesPattern: /@elastic.*/,
    docUrl: 'https://www.elastic.co/guide/index.html',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/ElasticSearch-Dark.svg',
  },
  emotion: {
    dependenciesPattern: /@emotion.*/,
    docUrl: 'https://emotion.sh/docs/introduction',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Emotion-Dark.svg',
  },
  esbuild: {
    dependenciesPattern: /esbuild.*/,
    docUrl: 'https://esbuild.github.io/getting-started/#install-esbuild',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Esbuild-Dark.svg',
  },
  eslint: {
    dependenciesPattern: /eslint.*/,
    docUrl: 'https://eslint.org/docs/latest/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Eslint-Dark.svg',
  },
  express: {
    dependenciesPattern: /^express$/,
    docUrl: 'https://expressjs.com/en/starter/installing.html',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/ExpressJS-Dark.svg',
  },
  faker: {
    dependenciesPattern: /^@faker-js.*/,
    docUrl: 'https://fakerjs.dev/guide/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Faker-Dark.svg',
  },
  fastify: {
    dependenciesPattern: /^fastify.*/,
    docUrl: 'https://www.fastify.io/docs/latest/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Fastify-Dark.svg',
  },
  'fly-io': {
    dependenciesPattern: undefined,
    docUrl: 'https://fly.io/docs/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/FlyIo-Dark.svg',
  },
  gatsby: {
    dependenciesPattern: /gatsby.*/,
    docUrl: 'https://www.gatsbyjs.com/docs',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Gatsby.svg',
  },
  git: {
    dependenciesPattern: undefined,
    docUrl: 'https://git-scm.com/doc',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Git.svg',
  },
  'github-actions': {
    dependenciesPattern: undefined,
    docUrl: 'https://docs.github.com/en/actions',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/GithubActions-Dark.svg',
  },
  graphql: {
    dependenciesPattern: /^graphql$/,
    docUrl: 'https://graphql.org/learn/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/GraphQL-Dark.svg',
  },
  heroku: {
    dependenciesPattern: undefined,
    docUrl: 'https://devcenter.heroku.com/categories/reference',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Heroku.svg',
  },
  i18next: {
    dependenciesPattern: /.*i18next.*/,
    docUrl: 'https://www.i18next.com/overview/getting-started',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/I18next-Dark.svg',
  },
  jasmine: {
    dependenciesPattern: /^jasmine$/,
    docUrl: 'https://jasmine.github.io/pages/docs_home.html',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Jasmine-Dark.svg',
  },
  javascript: {
    dependenciesPattern: undefined,
    docUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/JavaScript.svg',
  },
  jest: {
    dependenciesPattern: /^jest$/,
    docUrl: 'https://jestjs.io/docs/getting-started',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Jest.svg',
  },
  jotai: {
    dependenciesPattern: /^jotai$/,
    docUrl: 'https://jotai.org/docs/introduction',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Jotai-Dark.svg',
  },
  jwt: {
    dependenciesPattern: /^jsonwebtoken$|^jose$/,
    docUrl: 'https://jwt.io',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Jwt-Dark.svg',
  },
  knex: {
    dependenciesPattern: /^knex$/,
    docUrl: 'https://knexjs.org/guide/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Knex-Dark.svg',
  },
  lodash: {
    dependenciesPattern: /^lodash$/,
    docUrl: 'https://lodash.com',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Lodash-Dark.svg',
  },
  materialUI: {
    dependenciesPattern: /^@material-ui.*|^@mui.*/,
    docUrl: 'https://mui.com/material-ui/getting-started/overview/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/MaterialUI-Dark.svg',
  },
  mocha: {
    dependenciesPattern: /^mocha$/,
    docUrl: 'https://mochajs.org/#getting-started',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Mocha-Dark.svg',
  },
  mongodb: {
    dependenciesPattern: /^mongoose$|^mongodb$/,
    docUrl: 'https://www.mongodb.com',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/MongoDB.svg',
  },
  msw: {
    dependenciesPattern: /^msw$/,
    docUrl: 'https://mswjs.io/docs/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Msw-Dark.svg',
  },
  mysql: {
    dependenciesPattern: undefined,
    docUrl: 'https://dev.mysql.com/doc/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/MySQL-Dark.svg',
  },
  nestjs: {
    dependenciesPattern: /^@nestjs.*/,
    docUrl: 'https://docs.nestjs.com',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/NestJS-Dark.svg',
  },
  nextjs: {
    dependenciesPattern: /^next$/,
    docUrl: 'https://nextjs.org/docs/getting-started',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/NextJS-Dark.svg',
  },
  nginx: {
    dependenciesPattern: undefined,
    docUrl: 'https://docs.nginx.com',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Nginx.svg',
  },
  node: {
    dependenciesPattern: undefined,
    docUrl: 'https://nodejs.org/en/docs/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/NodeJS-Dark.svg',
  },
  npm: {
    dependenciesPattern: undefined,
    docUrl: 'https://docs.npmjs.com',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Npm-Dark.svg',
  },
  nuxt: {
    dependenciesPattern: /^nuxt$/,
    docUrl: 'https://nuxtjs.org/docs/get-started/installation',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/NuxtJS-Dark.svg',
  },
  nx: {
    dependenciesPattern: /^nx$|^@nrwl.*/,
    docUrl: 'https://nx.dev/getting-started/intro',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Nx-Dark.svg',
  },
  passport: {
    dependenciesPattern: /^passport.*/,
    docUrl: 'https://www.passportjs.org/docs/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Passport-Dark.svg',
  },
  pino: {
    dependenciesPattern: /.*pino.*/,
    docUrl: 'https://getpino.io',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Pino-Dark.svg',
  },
  pnpm: {
    dependenciesPattern: undefined,
    docUrl: 'https://pnpm.io/motivation',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Pnpm-Dark.svg',
  },
  postgresql: {
    dependenciesPattern: undefined,
    docUrl: 'https://www.postgresql.org/docs/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/PostgreSQL-Dark.svg',
  },
  prettier: {
    dependenciesPattern: /^prettier$/,
    docUrl: 'https://prettier.io/docs/en/index.html',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Prettier-Dark.svg',
  },
  prisma: {
    dependenciesPattern: /^prisma$|^@prisma.*/,
    docUrl: 'https://www.prisma.io/docs/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Prisma.svg',
  },
  pulumi: {
    dependenciesPattern: /^@pulumi.*/,
    docUrl: 'https://www.pulumi.com/docs/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Pulumi-Dark.svg',
  },
  react: {
    dependenciesPattern: /^react$/,
    docUrl: 'https://reactjs.org/docs/getting-started.html',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/React-Dark.svg',
  },
  'react-hook-form': {
    dependenciesPattern: /^react-hook-form$/,
    docUrl: 'https://react-hook-form.com/get-started',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/ReactHookForm-Dark.svg',
  },
  'react-query': {
    dependenciesPattern: /^react-query$|^@tanstack\/react-query$/,
    docUrl: 'https://tanstack.com/query/v4/docs/overview',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/ReactQuery-Dark.svg',
  },
  redis: {
    dependenciesPattern: /^redis.*/,
    docUrl: 'https://redis.io/docs/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Redis-Dark.svg',
  },
  redux: {
    dependenciesPattern: /^@reduxjs.*/,
    docUrl: 'https://redux.js.org/introduction/getting-started',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Redux.svg',
  },
  remix: {
    dependenciesPattern: /^@remix-run.*/,
    docUrl: 'https://remix.run/docs/en/v1',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Remix-Dark.svg',
  },
  rust: {
    dependenciesPattern: undefined,
    docUrl: 'https://www.rust-lang.org/learn',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Rust.svg',
  },
  rxjs: {
    dependenciesPattern: /^rxjs$/,
    docUrl: 'https://rxjs.dev/guide/overview',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Rxjs-Dark.svg',
  },
  sass: {
    dependenciesPattern: /^sass$/,
    docUrl: 'https://sass-lang.com/documentation/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Sass.svg',
  },
  sequelize: {
    dependenciesPattern: /^sequelize$/,
    docUrl: 'https://sequelize.org',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Sequelize-Dark.svg',
  },
  socketio: {
    dependenciesPattern: /^socket.io.*/,
    docUrl: 'https://socket.io/fr/docs/v4/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/SocketIO-Dark.svg',
  },
  sonarcloud: {
    dependenciesPattern: undefined,
    docUrl: 'https://sonarcloud.io',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Sonarcloud-Dark.svg',
  },
  sqlite: {
    dependenciesPattern: undefined,
    docUrl: 'https://www.sqlite.org/docs.html',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/SQLite.svg',
  },
  sqlserver: {
    dependenciesPattern: undefined,
    docUrl: 'https://docs.microsoft.com/en-us/sql/?view=sql-server-ver16',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/SqlServer-Dark.svg',
  },
  storybook: {
    dependenciesPattern: /^@storybook.*/,
    docUrl: 'https://storybook.js.org/docs/react/get-started/introduction',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Storybook-Dark.svg',
  },
  'styled-components': {
    dependenciesPattern: /^styled-components$/,
    docUrl: 'https://styled-components.com/docs',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/StyledComponents.svg',
  },
  svelte: {
    dependenciesPattern: /^svelte$|^@sveltejs.*/,
    docUrl: 'https://svelte.dev/docs',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Svelte.svg',
  },
  swagger: {
    dependenciesPattern: /.*swagger.*/,
    docUrl: 'https://swagger.io',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Swagger-Dark.svg',
  },
  swc: {
    dependenciesPattern: /^@swc.*/,
    docUrl: 'https://swc.rs/docs/getting-started',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Swc-Dark.svg',
  },
  tailwind: {
    dependenciesPattern: /^tailwindcss$/,
    docUrl: 'https://tailwindcss.com/docs/installation',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/TailwindCSS-Dark.svg',
  },
  terraform: {
    dependenciesPattern: undefined,
    docUrl: 'https://www.terraform.io/intro',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Terraform-Dark.svg',
  },
  'testing-library': {
    dependenciesPattern: /^@testing-library.*/,
    docUrl: 'https://testing-library.com/docs/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/TestingLibrary-Dark.svg',
  },
  'type-stack': {
    dependenciesPattern: /^class-transformer$|^class-validator$/,
    docUrl: 'https://github.com/typestack',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/TypeStack-Dark.svg',
  },
  typescript: {
    dependenciesPattern: undefined,
    docUrl: 'https://www.typescriptlang.org/docs/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/TypeScript.svg',
  },
  vercel: {
    dependenciesPattern: undefined,
    docUrl: 'https://vercel.com/docs',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Vercel-Dark.svg',
  },
  vscode: {
    dependenciesPattern: undefined,
    docUrl: 'https://code.visualstudio.com/docs',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/VSCode-Dark.svg',
  },
  vuejs: {
    dependenciesPattern: /^vue$/,
    docUrl: 'https://vuejs.org/guide/introduction.html',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/VueJS-Dark.svg',
  },
  webpack: {
    dependenciesPattern: /^webpack$/,
    docUrl: 'https://webpack.js.org/concepts/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Webpack-Dark.svg',
  },
  webstorm: {
    dependenciesPattern: undefined,
    docUrl: 'https://www.jetbrains.com/webstorm/learn/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Webstorm-Dark.svg',
  },
  yarn: {
    dependenciesPattern: undefined,
    docUrl: 'https://yarnpkg.com/api/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Yarn-Dark.svg',
  },
  zod: {
    dependenciesPattern: /^zod$/,
    docUrl: 'https://github.com/colinhacks/zod#introduction',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Zod-Dark.svg',
  },
  'graphql-codegen': {
    dependenciesPattern: /^@graphql-codegen\/.*$/,
    docUrl: 'https://graphql.org/learn/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/jpb06/master/icons/GrapgqlCodegen-Dark.svg',
  },
};
