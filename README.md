# readme-package-icons

[![Open in Visual Studio Code](https://img.shields.io/static/v1?logo=visualstudiocode&label=&message=Open%20in%20Visual%20Studio%20Code&labelColor=2c2c32&color=007acc&logoColor=007acc)](https://github.dev/jpb06/readme-package-icons)
![npm bundle size](https://img.shields.io/bundlephobia/min/readme-package-icons)
![Github workflow](https://img.shields.io/github/actions/workflow/status/jpb06/readme-package-icons/ci.yml?branch=main&logo=github-actions&label=last%20workflow)
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
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=jpb06_readme-package-icons&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=jpb06_readme-package-icons)
![Last commit](https://img.shields.io/github/last-commit/jpb06/readme-package-icons?logo=git)

Generating a list of icons from dependencies.

<!-- readme-package-icons start -->

<p align="left"><a href="https://docs.github.com/en/actions" target="_blank"><img height="70" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/GithubActions-Dark.svg" /></a>&nbsp;<a href="https://www.typescriptlang.org/docs/" target="_blank"><img height="70" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/TypeScript.svg" /></a>&nbsp;<a href="https://nodejs.org/en/docs/" target="_blank"><img height="70" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/NodeJS-Dark.svg" /></a>&nbsp;<a href="https://bun.sh/docs" target="_blank"><img height="70" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Bun-Dark.svg" /></a>&nbsp;<a href="https://biomejs.dev/guides/getting-started/" target="_blank"><img height="70" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Biome-Dark.svg" /></a>&nbsp;<a href="https://github.com/conventional-changelog" target="_blank"><img height="70" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/CommitLint.Dark.svg" /></a>&nbsp;<a href="https://vitest.dev/guide/" target="_blank"><img height="70" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Vitest-Dark.svg" /></a></p>

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

## ⚡ Thanks

This module uses some icons from [devicons](https://github.com/devicons/devicon/). Thanks for their great work!
