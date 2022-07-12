# readme-package-icons

[![Open in Visual Studio Code](https://img.shields.io/static/v1?logo=visualstudiocode&label=&message=Open%20in%20Visual%20Studio%20Code&labelColor=2c2c32&color=007acc&logoColor=007acc)](https://github.dev/jpb06/readme-package-icons)
![npm bundle size](https://img.shields.io/bundlephobia/min/readme-package-icons)
![Github workflow](https://img.shields.io/github/workflow/status/jpb06/readme-package-icons/Main%20workflow?label=Tests&logo=github-actions)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=jpb06_readme-package-icons&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=jpb06_readme-package-icons)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=jpb06_readme-package-icons&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=jpb06_readme-package-icons)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=jpb06_readme-package-icons&metric=security_rating)](https://sonarcloud.io/dashboard?id=jpb06_readme-package-icons)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=jpb06_readme-package-icons&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=jpb06_readme-package-icons)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=jpb06_readme-package-icons&metric=coverage)](https://sonarcloud.io/dashboard?id=jpb06_readme-package-icons)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=jpb06_readme-package-icons&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=jpb06_readme-package-icons)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=jpb06_readme-package-icons&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=jpb06_readme-package-icons)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=jpb06_readme-package-icons&metric=code_smells)](https://sonarcloud.io/dashboard?id=jpb06_readme-package-icons)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=jpb06_readme-package-icons&metric=bugs)](https://sonarcloud.io/summary/new_code?id=jpb06_readme-package-icons)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=jpb06_readme-package-icons&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=jpb06_readme-package-icons)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/readme-package-icons?label=snyk%20vulnerabilities)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=jpb06_readme-package-icons&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=jpb06_readme-package-icons)
![Last commit](https://img.shields.io/github/last-commit/jpb06/readme-package-icons?logo=git)

Generating a list of icons from dependencies.

<!-- readme-package-icons start -->

<p align="left"><a href="https://www.typescriptlang.org/docs/"><img height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" /></a>&nbsp;<a href="https://nodejs.org/en/docs/"><img height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /></a>&nbsp;<a href="https://pnpm.io/motivation"><img height="100" src="https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/pnpm.svg" /></a>&nbsp;<a href="https://eslint.org/docs/latest/"><img height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" /></a>&nbsp;<a href="https://jestjs.io/docs/getting-started"><img height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" /></a>&nbsp;<a href="https://prettier.io/docs/en/index.html"><img height="100" src="https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/prettier.png" /></a>&nbsp;<a href="https://swc.rs/docs/getting-started"><img height="100" src="https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/swc.svg" /></a>&nbsp;</p>

<!-- readme-package-icons end -->

## ⚡ Purpose

I wanted people visiting my repos to catch at first glance the stack used in them. What's better than icons for this?

### 🔶 Usage

This package exposes one function named `generateReadmeIcons` that will check the content of `package.json` and a few others things (whether a `tsconfig.json` file exists for example). It will then generate html code that will be inserted between two placeholder tags in `README.md`.

#### 🌀 Amending readme

The first step is to add placeholder tags into `README.md`:

```markdown
# my-package

<!-- readme-package-icons start -->
<!-- readme-package-icons end -->

Blabla
```

Our icons list will be inserted between these two tags.

#### 🌀 Cli

One way to use this package is to use its executable. The `generateReadmeIcons` function takes two optional arguments:

| name | description          | Example  | Default |
| ---- | -------------------- | -------- | ------- |
| p    | The path to the repo | ./myRepo | .       |
| h    | Height of the icons  | 100      | 50      |

##### 🍥 Within a package

We could add a script to our package.json for example:

```json
{
  "scripts": {
    "readme-icons": "generateReadmeIcons"
  }
}
```

##### 🍥 Globally

We can also install the package globally:

```bash
npm install -g readme-package-icons
```

Then we can use it by using the `-p` option:

```bash
npm run generateReadmeIcons -p /Users/jpb06/repos/myRepo
```

#### 🌀 node

This package exposes the function as well:

```typescript
import { generateReadmeIcons } from 'readme-package-icons';

(async (): Promise<void> => {
  const path = './path/to/my/repo';
  const iconsHeight = 50;

  const iconsAddedToReadmeCount = await generateReadmeIcons({
    path,
    iconsHeight,
  });
})();
```
