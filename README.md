# alekseew - Michael Alekseew

## @alekseew/me

[![Build Status](https://travis-ci.org/Mischa1610/alekseew.svg?branch=master)](https://travis-ci.org/Mischa1610/alekseew)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli)
[![Greenkeeper badge](https://badges.greenkeeper.io/Mischa1610/alekseew.svg)](https://greenkeeper.io)
<a href="https://github.com/webmaxru/progressive-web-apps-logo"><img src="https://diekus.com/images/PWA_LOGO_SOURCE.svg" alt="PWA" width="50"></a>

This repository contains a Web App for my blog / CV and topics about me.
This project should tell a bit about me, Michael Alekseew, as a person and developer.

The WebApp to this project can be found here: [**alekseew** - WebApp](https://alekseew-b6c4e.firebaseapp.com)

The GitHub Page to this project / repo can be found here: [**alekseew** - GitHub Page](https://mischa1610.github.io/alekseew)

Also I want to try out some libraries, frameworks, plugins, concepts, architectures, ... with this repo.
Following are currently included:

| Nr. | Topic                                | Framework & Link                                                                   |
| --- | ------------------------------------ | ---------------------------------------------------------------------------------- |
| 01. | Source Control Branching-Model       | [**GitFlow**](http://nvie.com/posts/a-successful-git-branching-model)              |
| 02. | Frontend WebApp Platform / Framework | [**Angular**](https://angular.io)                                                  |
| 03. | Development Language                 | [**Typescript**](https://www.typescriptlang.org)                                   |
| 04. | (Development Language)               | ([**JavaScript**](https://www.javascript.com))                                     |
| 05. | WebApp UI Library                    | [**Angular Material**](https://material.angular.io)                                |
| 06. | WebApp UI "Behavior" Library         | [**Angular CDK**](https://material.angular.io/cdk)                                 |
| 07. | Code-Formatting                      | [**Prettier**](https://prettier.io)                                                |
| 08. | Versioning, Changelog                | [**Standard-Version**](https://github.com/conventional-changelog/standard-version) |
| 09. | Commit Message Tool                  | [**Commitizen**](http://commitizen.github.io/cz-cli)                               |
| 10. | Git-Hooks Tool                       | [**Husky**](https://github.com/typicode/husky)                                     |
| 11. | Animations                           | [**Lottie**](https://airbnb.design/lottie)                                         |
| 12. | Animations                           | [**Lottie-Web**](https://github.com/airbnb/lottie-web)                             |
| 13. | Server Side Rendering (SSR)          | [**Angular Universal**](https://universal.angular.io)                              |
| 14. | Hosting and more...                  | [**FireBase**](https://firebase.google.com)                                        |
| 15. | Continuos Integration (CI)           | [**Travis**](https://travis-ci.org)                                                |
| 16. | Dependency Monitoring                | [**Greenkeeper**](https://greenkeeper.io)                                          |

_will be continued ..._

## Table of Contents

-   [alekseew - Michael Alekseew](#alekseew---michael-alekseew)
    -   [@alekseew/me](#alekseewme)
    -   [Table of Contents](#table-of-contents)
    -   [Prerequisites](#prerequisites)
    -   [Dependencies](#dependencies)
    -   [GitFlow](#gitflow)
        -   [Branch names and prefix's naming convention (default setting in SourceTree)](#branch-names-and-prefixs-naming-convention-default-setting-in-sourcetree)
    -   [Conventional Changelog / Commits](#conventional-changelog--commits)
        -   [Commit Message Format](#commit-message-format)
            -   [Type](#type)
            -   [Scope](#scope)
            -   [Subject](#subject)
            -   [Body](#body)
            -   [Footer](#footer)
    -   [Commit Hooks](#commit-hooks)
        -   [Prettier Format Check](#prettier-format-check)
        -   [Commit Message Linting](#commit-message-linting)
    -   [Project Version & Release](#project-version--release)
    -   [Continues Integration & Deployment](#continues-integration--deployment)

## Prerequisites

This project requires the following dependencies to be installed beforehand:

-   **Node.js**
-   **NPM**

## Dependencies

To install all needed dependencies just run:

```shell
npm install
```

This also setup's up the git commit message template (and set the wip package to use commitizen).

## GitFlow

Please use the **GitFlow** branching model and the default names for the branches of SourceTree in this project, more information's can be found here:

-   [**GitFlow**](http://nvie.com/posts/a-successful-git-branching-model/)
-   [**SourceTree + GitFlow**](https://blog.sourcetreeapp.com/2012/08/01/smart-branching-with-sourcetree-and-git-flow/)

### Branch names and prefix's naming convention (default setting in SourceTree)

| Kind                  | Setting                                    |
| --------------------- | ------------------------------------------ |
| Production branch     | **master**                                 |
| Development branch    | **develop**                                |
| Feature branch prefix | **feature/**                               |
| Release branch prefix | **release/**                               |
| Hotfix branch prefix  | **hotfix/**                                |
| No Version tag prefix | (the Tag names will be for example v0.1.0) |

## Conventional Changelog / Commits

In this project (angular) conventional commits [**Angular Commit Message Guidelines**](https://github.com/angular/material2/blob/master/CONTRIBUTING.md#-commit-message-guidelines) are used.

They will be used to auto generate the changelog with the npm package [**standard-version**](https://github.com/conventional-changelog/standard-version), to do this just run `npm run release`.
This will do following task:

-   Update the project version
-   Generate / update the CHANGELOG.md
-   Commit this changes (ready to push to remote)
-   Generate a git tag

You can use `npm run commit` to get a wizard that helps you to write the correct commit messages (this is done with [**commitizen**](https://github.com/commitizen/cz-cli)).

Also the commit messages will be checked that they are correct with [**commitlint**](https://github.com/marionebl/commitlint) (if you really need to skip it, you can bypass the githooks, but you should not do it normally).

You can generate a git commit message template with `npm run prepare-git-commit-template`, this will also be done during npm install.

### Commit Message Format

The **header** (consist of **type**, **scope** and **subject**) should not be longer than 72 characters.

```text
type(scope?): subject

body?

footer?
```

#### Type

Must be one of the following:

| Type         | Description                                                                                                |
| ------------ | ---------------------------------------------------------------------------------------------------------- |
| **feat**     | A new feature                                                                                              |
| **fix**      | A bug fix                                                                                                  |
| **docs**     | Documentation only changes                                                                                 |
| **style**    | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)     |
| **refactor** | A code change that neither fixes a bug nor adds a feature                                                  |
| **perf**     | A code change that improves performance                                                                    |
| **test**     | Adding missing tests or correcting existing tests                                                          |
| **build**    | Changes that affect the build system, CI configuration or external dependencies (gulp, broccoli, npm, ...) |
| **ci**       | Changes to our CI configuration files and scripts (Travis, Circle, BrowserStack, SauceLabs, ...)           |
| **chore**    | Other changes that don't modify `src` or `test` files                                                      |
| **revert**   | Reverts a previous commit                                                                                  |

#### Scope

The scope could be anything specifying place of the commit change. I am using following conventions (examples):

| Scope    | Description                                                  |
| -------- | ------------------------------------------------------------ |
| **all**  | changes for the whole project (general project release, ...) |
| **root** | changes in the root (folder) of the project                  |
| **be**   | changes in the backend part of the project                   |
| **fe**   | changes in the frontend part (webapp) of the project         |

#### Subject

The subject contains succinct description of the change:

-   use the imperative, present tense: "change" not "changed" nor "changes"
-   don't capitalize first letter
-   no dot (.) at the end

#### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

#### Footer

The footer should contain any information about **Breaking Changes** and is also the place to reference issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines.
The rest of the commit message is then used for this.

## Commit Hooks

In this repo git hooks are used (setup with **husky**) to check for "clean" source code.

### Prettier Format Check

If Typescript or SCSS files are changed and pushed a commit hook is triggered and the staged files are formatted with prettier.
It does the formating / changes and commits and pushes this changes, with the help of **pretty-quick**.

### Commit Message Linting

Checks if the git commit message is a conventional git commit message, otherwise it will cancel the commit.

## Project Version & Release

The last commit on the release branch should set the project version and generate the Changelog, this should be done with `npm run release`.
This **set's the project version**, **generates the changelog** and **commits this changes**.
More information's can be found under the chapter: **_Conventional Changelog / Commits_**

## Continues Integration & Deployment

On this project **Travis CI** is setup as lint-, test-, e2e-tests- and build-slave.
If everything was tested and build successfully Travis CI will deploy the **WebApp** to **FireBase**.
