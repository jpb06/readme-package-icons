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
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  },
  apollo: {
    dependenciesPattern: /.*apollo.*/,
    docUrl: 'https://www.apollographql.com/docs/react/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/apollo.png',
  },
  aws: {
    dependenciesPattern: /@aws-sdk.*/,
    docUrl: 'https://aws.amazon.com/developer/language/javascript/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/aws.jpg',
  },
  axios: {
    dependenciesPattern: /^axios$/,
    docUrl: 'https://axios-http.com/fr/docs/intro',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/axios.png',
  },
  babel: {
    dependenciesPattern: /@babel.*|babel.*/,
    docUrl: 'https://babeljs.io/docs/en/',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg',
  },
  'circle-ci': {
    dependenciesPattern: undefined,
    docUrl: 'https://circleci.com/docs',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain-wordmark.svg',
  },
  cockroachdb: {
    dependenciesPattern: undefined,
    docUrl: 'https://www.cockroachlabs.com/docs/cockroachcloud/quickstart.html',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/cockroachdb.svg',
  },
  'conventional-changelog': {
    dependenciesPattern:
      /^commitlint$|.*conventional-changelog.*|^@commitlint.*/,
    docUrl: 'https://github.com/conventional-changelog',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/conventional-changelog.svg',
  },
  cypress: {
    dependenciesPattern: /^cypress$|^@cypress.*/,
    docUrl: 'https://docs.cypress.io/guides/overview/why-cypress',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/cypress.png',
  },
  discordJs: {
    dependenciesPattern: /^discord\.js$/,
    docUrl: 'https://discord.js.org/#/docs/discord.js/main/general/welcome',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg',
  },
  docker: {
    dependenciesPattern: undefined,
    docUrl: 'https://docs.docker.com',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  dotenv: {
    dependenciesPattern: /^dotenv.*/,
    docUrl: 'https://github.com/motdotla/dotenv#readme',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/dotenv.png',
  },
  elastic: {
    dependenciesPattern: /@elastic.*/,
    docUrl: 'https://www.elastic.co/guide/index.html',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/elastic.png',
  },
  emotion: {
    dependenciesPattern: /@emotion.*/,
    docUrl: 'https://emotion.sh/docs/introduction',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/emotion.png',
  },
  esbuild: {
    dependenciesPattern: /esbuild.*/,
    docUrl: 'https://esbuild.github.io/getting-started/#install-esbuild',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/esbuild.svg',
  },
  eslint: {
    dependenciesPattern: /eslint.*/,
    docUrl: 'https://eslint.org/docs/latest/',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg',
  },
  express: {
    dependenciesPattern: /^express$/,
    docUrl: 'https://expressjs.com/en/starter/installing.html',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  faker: {
    dependenciesPattern: /^@faker-js.*/,
    docUrl: 'https://fakerjs.dev/guide/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/faker.svg',
  },
  fastify: {
    dependenciesPattern: /^fastify.*/,
    docUrl: 'https://www.fastify.io/docs/latest/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/fastify.svg',
  },
  'fly-io': {
    dependenciesPattern: undefined,
    docUrl: 'https://fly.io/docs/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/fly-io.png',
  },
  gatsby: {
    dependenciesPattern: /gatsby.*/,
    docUrl: 'https://www.gatsbyjs.com/docs',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-plain.svg',
  },
  git: {
    dependenciesPattern: undefined,
    docUrl: 'https://git-scm.com/doc',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  'github-actions': {
    dependenciesPattern: undefined,
    docUrl: 'https://docs.github.com/en/actions',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/github-actions.svg',
  },
  graphql: {
    dependenciesPattern: /^graphql$/,
    docUrl: 'https://graphql.org/learn/',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
  },
  heroku: {
    dependenciesPattern: undefined,
    docUrl: 'https://devcenter.heroku.com/categories/reference',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg',
  },
  i18next: {
    dependenciesPattern: /.*i18next.*/,
    docUrl: 'https://www.i18next.com/overview/getting-started',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/i18next.png',
  },
  jasmine: {
    dependenciesPattern: /^jasmine$/,
    docUrl: 'https://jasmine.github.io/pages/docs_home.html',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jasmine/jasmine-plain.svg',
  },
  javascript: {
    dependenciesPattern: undefined,
    docUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  jest: {
    dependenciesPattern: /^jest$/,
    docUrl: 'https://jestjs.io/docs/getting-started',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
  },
  jotai: {
    dependenciesPattern: /^jotai$/,
    docUrl: 'https://jotai.org/docs/introduction',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/jotai.png',
  },
  jwt: {
    dependenciesPattern: /^jsonwebtoken$|^jose$/,
    docUrl: 'https://jwt.io',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/jwt.png',
  },
  knex: {
    dependenciesPattern: /^knex$/,
    docUrl: 'https://knexjs.org/guide/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/knex.png',
  },
  lodash: {
    dependenciesPattern: /^lodash$/,
    docUrl: 'https://lodash.com',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/lodash.svg',
  },
  luxon: {
    dependenciesPattern: /^luxon$/,
    docUrl: 'https://moment.github.io/luxon/#/?id=luxon',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/luxon.png',
  },
  materialUI: {
    dependenciesPattern: /^@material-ui.*|^@mui.*/,
    docUrl: 'https://mui.com/material-ui/getting-started/overview/',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
  },
  mocha: {
    dependenciesPattern: /^mocha$/,
    docUrl: 'https://mochajs.org/#getting-started',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg',
  },
  mongodb: {
    dependenciesPattern: /^mongoose$|^mongodb$/,
    docUrl: 'https://www.mongodb.com',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  msw: {
    dependenciesPattern: /^msw$/,
    docUrl: 'https://mswjs.io/docs/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/msw.svg',
  },
  mysql: {
    dependenciesPattern: undefined,
    docUrl: 'https://dev.mysql.com/doc/',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  nestjs: {
    dependenciesPattern: /^@nestjs.*/,
    docUrl: 'https://docs.nestjs.com',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
  },
  nextjs: {
    dependenciesPattern: /^next$/,
    docUrl: 'https://nextjs.org/docs/getting-started',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  nginx: {
    dependenciesPattern: undefined,
    docUrl: 'https://docs.nginx.com',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
  },
  node: {
    dependenciesPattern: undefined,
    docUrl: 'https://nodejs.org/en/docs/',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  npm: {
    dependenciesPattern: undefined,
    docUrl: 'https://docs.npmjs.com',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
  },
  nuxt: {
    dependenciesPattern: /^nuxt$/,
    docUrl: 'https://nuxtjs.org/docs/get-started/installation',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
  },
  nx: {
    dependenciesPattern: /^nx$|^@nrwl.*/,
    docUrl: 'https://nx.dev/getting-started/intro',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/nx.png',
  },
  passport: {
    dependenciesPattern: /^passport.*/,
    docUrl: 'https://www.passportjs.org/docs/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/passport.svg',
  },
  pino: {
    dependenciesPattern: /.*pino.*/,
    docUrl: 'https://getpino.io',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/pino.png',
  },
  pnpm: {
    dependenciesPattern: undefined,
    docUrl: 'https://pnpm.io/motivation',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/pnpm.svg',
  },
  postgresql: {
    dependenciesPattern: undefined,
    docUrl: 'https://www.postgresql.org/docs/',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  prettier: {
    dependenciesPattern: /^prettier$/,
    docUrl: 'https://prettier.io/docs/en/index.html',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/prettier.png',
  },
  prisma: {
    dependenciesPattern: /^prisma$|^@prisma.*/,
    docUrl: 'https://www.prisma.io/docs/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/prisma.svg',
  },
  pulumi: {
    dependenciesPattern: /^@pulumi.*/,
    docUrl: 'https://www.pulumi.com/docs/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/pulumi.svg',
  },
  react: {
    dependenciesPattern: /^react$/,
    docUrl: 'https://reactjs.org/docs/getting-started.html',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  'react-hook-form': {
    dependenciesPattern: /^react-hook-form$/,
    docUrl: 'https://react-hook-form.com/get-started',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/react-hook-form.png',
  },
  'react-query': {
    dependenciesPattern: /^react-query$|^@tanstack\/react-query$/,
    docUrl: 'https://tanstack.com/query/v4/docs/overview',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/react-query.svg',
  },
  redis: {
    dependenciesPattern: /^redis.*/,
    docUrl: 'https://redis.io/docs/',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  },
  redux: {
    dependenciesPattern: /^@reduxjs.*/,
    docUrl: 'https://redux.js.org/introduction/getting-started',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  },
  remix: {
    dependenciesPattern: /^@remix-run.*/,
    docUrl: 'https://remix.run/docs/en/v1',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/remix.png',
  },
  rust: {
    dependenciesPattern: undefined,
    docUrl: 'https://www.rust-lang.org/learn',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg',
  },
  rxjs: {
    dependenciesPattern: /^rxjs$/,
    docUrl: 'https://rxjs.dev/guide/overview',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/rxjs.png',
  },
  sass: {
    dependenciesPattern: /^sass$/,
    docUrl: 'https://sass-lang.com/documentation/',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
  },
  sequelize: {
    dependenciesPattern: /^sequelize$/,
    docUrl: 'https://sequelize.org',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg',
  },
  slate: {
    dependenciesPattern: /^slate.*/,
    docUrl: 'http://docs.slatejs.org',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/slate.png',
  },
  socketio: {
    dependenciesPattern: /^socket.io.*/,
    docUrl: 'https://socket.io/fr/docs/v4/',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
  },
  sonarcloud: {
    dependenciesPattern: undefined,
    docUrl: 'https://sonarcloud.io',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/sonarcloud.svg',
  },
  sqlite: {
    dependenciesPattern: undefined,
    docUrl: 'https://www.sqlite.org/docs.html',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
  },
  sqlserver: {
    dependenciesPattern: undefined,
    docUrl: 'https://docs.microsoft.com/en-us/sql/?view=sql-server-ver16',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
  },
  storybook: {
    dependenciesPattern: /^@storybook.*/,
    docUrl: 'https://storybook.js.org/docs/react/get-started/introduction',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg',
  },
  'styled-components': {
    dependenciesPattern: /^styled-components$/,
    docUrl: 'https://styled-components.com/docs',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/styled-components.png',
  },
  svelte: {
    dependenciesPattern: /^svelte$|^@sveltejs.*/,
    docUrl: 'https://svelte.dev/docs',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
  },
  swagger: {
    dependenciesPattern: /.*swagger.*/,
    docUrl: 'https://swagger.io',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/swagger.png',
  },
  swc: {
    dependenciesPattern: /^@swc.*/,
    docUrl: 'https://swc.rs/docs/getting-started',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/swc.svg',
  },
  tailwind: {
    dependenciesPattern: /^tailwindcss$/,
    docUrl: 'https://tailwindcss.com/docs/installation',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  },
  terraform: {
    dependenciesPattern: undefined,
    docUrl: 'https://www.terraform.io/intro',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
  },
  'testing-library': {
    dependenciesPattern: /^@testing-library.*/,
    docUrl: 'https://testing-library.com/docs/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/testing-library.png',
  },
  'type-stack': {
    dependenciesPattern: /^class-transformer$|^class-validator$/,
    docUrl: 'https://github.com/typestack',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/type-stack.png',
  },
  typescript: {
    dependenciesPattern: undefined,
    docUrl: 'https://www.typescriptlang.org/docs/',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  vercel: {
    dependenciesPattern: undefined,
    docUrl: 'https://vercel.com/docs',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/vercel.svg',
  },
  vscode: {
    dependenciesPattern: undefined,
    docUrl: 'https://code.visualstudio.com/docs',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  },
  vuejs: {
    dependenciesPattern: /^vue$/,
    docUrl: 'https://vuejs.org/guide/introduction.html',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  },
  webpack: {
    dependenciesPattern: /^webpack$/,
    docUrl: 'https://webpack.js.org/concepts/',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
  },
  webstorm: {
    dependenciesPattern: undefined,
    docUrl: 'https://www.jetbrains.com/webstorm/learn/',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webstorm/webstorm-original.svg',
  },
  yarn: {
    dependenciesPattern: undefined,
    docUrl: 'https://yarnpkg.com/api/',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg',
  },
  zod: {
    dependenciesPattern: /^zod$/,
    docUrl: 'https://github.com/colinhacks/zod#introduction',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/zod.svg',
  },
  'graphql-codegen': {
    dependenciesPattern: /^@graphql-codegen\/.*$/,
    docUrl: 'https://graphql.org/learn/',
    iconUrl:
      'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/grapgql-codegen.svg',
  },
};
