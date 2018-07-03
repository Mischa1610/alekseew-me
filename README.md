# alekseew - Michael Alekseew
## @alekseew/me

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli)

This repository contains a Web App for my blog / CV and topics about me.
This project should tell a bit about me, Michael Alekseew, as a person and developer.

Also I want to try out some libraries, frameworks, plugins, concepts, architectures, ... with this repo.
Following are currently inculded:

- Source Control Branching-Model: [**GitFlow**](http://nvie.com/posts/a-successful-git-branching-model)
- Frontend WebApp Platform / Framework: [**Angular**](https://angular.io)
- Development Language: [**Typescript**](https://www.typescriptlang.org) / ([**JavaScript**](https://www.javascript.com))
- WebApp UI Library: [**Angular Material**](https://material.angular.io)
- WebApp UI "Behaviour" Library: [**Angular CDK**](https://material.angular.io/cdk)
- Code-Formatting: [**Prettier**](https://prettier.io)
- Versioning, automatic Changelog (releases): [**Standard-Version**](https://github.com/conventional-changelog/standard-version)
- Commit Message Tool: [**Commitizen**](http://commitizen.github.io/cz-cli)
- Git-Hooks Tool: [**Husky**](https://github.com/typicode/husky)
- Animations: [**Lottie**](https://airbnb.design/lottie) & [**Lottie-Web**](https://github.com/airbnb/lottie-web)
- Server Side Rendering (SSR): [**Angular Universal**](https://universal.angular.io)
- Hosting and more... : [**FireBase**](https://firebase.google.com)
- Continous Integration (CI) / Tests & Builds: [**Travis**](https://travis-ci.org)
- Dependency Monitoring: [**Greenkeeper**](https://greenkeeper.io)
- _will be continued ..._


## Prerequisites

This project requires the following dependencies to be installed beforehand:
* **Node.js**
* **NPM**


## Dependencies

To install all needed dependencies just run:
```shell
npm install
```
This also setup's up the git commit message template (and set the wip package to use commitizen).


## GitFlow

Please use the **GitFlow** branching model and the default names for the branches of SourceTree in this project, more information's can be found here:

* [**GitFlow**](http://nvie.com/posts/a-successful-git-branching-model/)
* [**SourceTree + GitFlow**](https://blog.sourcetreeapp.com/2012/08/01/smart-branching-with-sourcetree-and-git-flow/)

### Branch names and prefixs naming convention (default setting in SourceTree):

* Production branch: **master**
* Development branch: **develop**
* Feature branch prefix: **feature/**
* Release branch prefix: **release/**
* Hotfix branch prefix: **hotfix/**
* No Version tag prefix (the Tag names will be for example v0.1.0)
