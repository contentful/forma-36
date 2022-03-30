<h1><img src="./forma-icon.svg" height="24"> Forma 36 - The Contentful Design System</h1>

[![Contentful](https://circleci.com/gh/contentful/forma-36.svg?style=shield)](https://circleci.com/gh/contentful/forma-36)
[![All Contributors](https://img.shields.io/github/all-contributors/contentful/forma-36/main)](#contributors-)

[Forma 36](https://f36.contentful.com/) is an open-source design system by [Contentful](https://www.contentful.com) created with the intent to reduce the overhead of creating UI by providing tools and guidance for digital teams building and extending Contentful products

## Table of contents

<!-- TOC -->

- [Table of contents](#table-of-contents)
  - [Creating new packages](#creating-new-packages)
- [Development](#development)
  - [Storybook for f36-components](#storybook-for-f36-components)
- [Commits & releases](#commits--releases)
- [Testing with your own project locally](#testing-with-your-own-project-locally)
- [Get involved](#get-involved)
- [Reach out to us](#reach-out-to-us)
  - [You found a bug or want to propose a feature?](#you-found-a-bug-or-want-to-propose-a-feature)
- [License](#license)
- [Code of Conduct](#code-of-conduct)
- [Contributors ✨](#contributors-)

<!-- /TOC -->

### Creating new packages

We use use [Plop](https://plopjs.com/) to create scripts that help you to scaffold new packages. In the root of the repo, you can run `yarn generate`. Then follow the steps in the CLI. Plop will generate the relevant files and add the relevant imports and exports to the main `src/index.ts` file required to make the component available when publishing the library. Read more about [contribution to Forma 36](https://f36.contentful.com/introduction/contributing).

## Development

_Note: The default branch has been renamed! `master` is now named `main`. If you have a local clone, you can update it by running the following commands._

```bash
git branch -m master main
git fetch origin
git branch -u origin/main main
git remote set-head origin -a
```

For local development, in the root of the repo run `yarn` to install all dependencies and then `yarn build` to build all packages. Now follow the instructions of the specific package you’re working on.
You will find each package’s instructions in their README files, check the [Packages](#packages) section for a list of all packages.

> In case you are having problems to install the dependencies, try using NVM to get the same node version we use by running `nvm use` in the root of the repo

### Storybook for f36-components

We use storybook with our react component library to develop components. You can start it from the root of the repo, just run `yarn storybook`

## Commits & releases

Use `yarn commit`. This uses the [Commitzen](https://github.com/commitizen/cz-cli) CLI to create a conventional commit message based on your changes. CI is setup to release all new commits on the main branch that contains a new [changeset](https://github.com/changesets/changesets).

Read more about changeset [here](RELEASES.md)

## Testing with your own project locally

You can test changes to a package of this monorepo in your own project locally by taking the following steps:

1. Run `yarn build` in the desired package's directory to ensure your latest changes have been built
2. Run `yarn link` in the desired package's directory
3. Change to your local project's directory and run `yarn link NAME_OF_PACKAGE` to link to the local version of the package (e.g. `yarn link @contentful/f36-components`)

## Get involved

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?maxAge=31557600)](http://makeapullrequest.com)

We appreciate any help on our repositories. For more details about how to contribute to a package, see the README of the corresponding package.

## Reach out to us

You can reach out to us using the [Contentful community Slack](https://www.contentful.com/slack/). We've setup a channel [#forma36](https://contentful-community.slack.com/messages/CFXGTMB98) in which we announce latest changes and updates.

### You found a bug or want to propose a feature?

Create an issue using one of the templates [![File an issue](https://img.shields.io/badge/-Create%20Issue-6cc644.svg?logo=github&maxAge=31557600)](https://github.com/contentful/forma-36/issues/new/choose).
Make sure to remove any credential from your code before sharing it.

## License

This repository is published under the [MIT](LICENSE.md) license.

## Code of Conduct

We want to provide a safe, inclusive, welcoming, and harassment-free space and experience for all participants, regardless of gender identity and expression, sexual orientation, disability, physical appearance, socioeconomic status, body size, ethnicity, nationality, level of experience, age, religion (or lack thereof), or other identity markers.

[Read our full Code of Conduct](https://github.com/contentful-developer-relations/community-code-of-conduct).

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://lol.xxx"><img src="https://avatars0.githubusercontent.com/u/4446634?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mike Mitchell</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=m10l" title="Code">💻</a> <a href="#maintenance-m10l" title="Maintenance">🚧</a></td>
    <td align="center"><a href="http://bugiel.studio"><img src="https://avatars2.githubusercontent.com/u/1766274?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Johannes Bugiel</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=wichniowski" title="Code">💻</a> <a href="#maintenance-wichniowski" title="Maintenance">🚧</a></td>
    <td align="center"><a href="http://guisantos.com/"><img src="https://avatars0.githubusercontent.com/u/6597467?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gui Santos</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=gui-santos" title="Code">💻</a> <a href="#maintenance-gui-santos" title="Maintenance">🚧</a> <a href="https://github.com/contentful/forma-36/commits?author=gui-santos" title="Documentation">📖</a></td>
    <td align="center"><a href="http://mshaaban.com"><img src="https://avatars0.githubusercontent.com/u/6163988?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Moe Shaaban</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=mshaaban0" title="Code">💻</a> <a href="#maintenance-mshaaban0" title="Maintenance">🚧</a> <a href="https://github.com/contentful/forma-36/commits?author=mshaaban0" title="Documentation">📖</a></td>
    <td align="center"><a href="http://kazimir.app/"><img src="https://avatars3.githubusercontent.com/u/4272331?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Patrycja Radaczyńska</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=burakukula" title="Code">💻</a> <a href="#maintenance-burakukula" title="Maintenance">🚧</a> <a href="https://github.com/contentful/forma-36/commits?author=burakukula" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/domarku"><img src="https://avatars2.githubusercontent.com/u/7631029?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dominik Markušić</b></sub></a><br /><a href="#design-domarku" title="Design">🎨</a> <a href="https://github.com/contentful/forma-36/commits?author=domarku" title="Documentation">📖</a></td>
    <td align="center"><a href="https://kristoffer.is"><img src="https://avatars3.githubusercontent.com/u/219017?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kristoffer</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=denkristoffer" title="Code">💻</a> <a href="#maintenance-denkristoffer" title="Maintenance">🚧</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://suevalov.com"><img src="https://avatars3.githubusercontent.com/u/3672221?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alexander Suevalov</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=suevalov" title="Code">💻</a> <a href="#maintenance-suevalov" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/Gracegross"><img src="https://avatars2.githubusercontent.com/u/69515265?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gracegross</b></sub></a><br /><a href="#design-Gracegross" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/Miretxu"><img src="https://avatars0.githubusercontent.com/u/22014714?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Miretxu</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=Miretxu" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/thebesson"><img src="https://avatars0.githubusercontent.com/u/12238477?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tanya Bessonova</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=thebesson" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Jwhiles"><img src="https://avatars3.githubusercontent.com/u/20307225?v=4?s=100" width="100px;" alt=""/><br /><sub><b>John Whiles</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=Jwhiles" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/guilebarbosa"><img src="https://avatars0.githubusercontent.com/u/36824?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Guilherme Barbosa</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=guilebarbosa" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/marcolink"><img src="https://avatars2.githubusercontent.com/u/156505?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Marco Link</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=marcolink" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/davidfateh"><img src="https://avatars3.githubusercontent.com/u/4086109?v=4?s=100" width="100px;" alt=""/><br /><sub><b>David Fateh</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=davidfateh" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/freakyfelt"><img src="https://avatars1.githubusercontent.com/u/552364?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Bruce Felt</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=freakyfelt" title="Code">💻</a></td>
    <td align="center"><a href="https://www.dvasylenko.com/"><img src="https://avatars1.githubusercontent.com/u/4171202?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Daniel Vasylenko</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=Spring3" title="Code">💻</a></td>
    <td align="center"><a href="https://kdamball.com/"><img src="https://avatars3.githubusercontent.com/u/3318312?v=4?s=100" width="100px;" alt=""/><br /><sub><b>kdamball</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=kdamball" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/MarkusLaut"><img src="https://avatars2.githubusercontent.com/u/40791319?v=4?s=100" width="100px;" alt=""/><br /><sub><b>MarkusLaut</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=MarkusLaut" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/anho"><img src="https://avatars1.githubusercontent.com/u/863612?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Andreas Hörnicke</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=anho" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/ChidinmaOrajiaku"><img src="https://avatars3.githubusercontent.com/u/30434146?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ChidinmaOrajiaku</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=ChidinmaOrajiaku" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/andipaetzold"><img src="https://avatars0.githubusercontent.com/u/4947671?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Andi Pätzold</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=andipaetzold" title="Code">💻</a> <a href="https://github.com/contentful/forma-36/issues?q=author%3Aandipaetzold" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/dalach"><img src="https://avatars0.githubusercontent.com/u/1868267?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Wiktoria Dalach</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=dalach" title="Code">💻</a></td>
    <td align="center"><a href="https://joshuasmock.com/"><img src="https://avatars2.githubusercontent.com/u/4960056?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Joshua Smock</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=jo-sm" title="Code">💻</a></td>
    <td align="center"><a href="http://www.yiotis.net/"><img src="https://avatars2.githubusercontent.com/u/12873414?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yiotis Kaltsikis</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=giotiskl" title="Code">💻</a></td>
    <td align="center"><a href="https://kodfabrik.com/"><img src="https://avatars2.githubusercontent.com/u/13072?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Azer Koçulu</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=azer" title="Code">💻</a></td>
    <td align="center"><a href="https://mastodon.social/@taye"><img src="https://avatars2.githubusercontent.com/u/1679746?v=4?s=100" width="100px;" alt=""/><br /><sub><b>taye</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=taye" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/dannyiacono"><img src="https://avatars0.githubusercontent.com/u/37335078?v=4?s=100" width="100px;" alt=""/><br /><sub><b>dannyiacono</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=dannyiacono" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/gregferg"><img src="https://avatars0.githubusercontent.com/u/17146277?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Grant Sauer</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=gregferg" title="Code">💻</a></td>
    <td align="center"><a href="http://joao.pt/"><img src="https://avatars3.githubusercontent.com/u/1187347?v=4?s=100" width="100px;" alt=""/><br /><sub><b>João Ramos</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=joaoramos" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/OriginalEXE"><img src="https://avatars0.githubusercontent.com/u/2056251?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ante Sepic</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=OriginalEXE" title="Code">💻</a> <a href="https://github.com/contentful/forma-36/issues?q=author%3AOriginalEXE" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://www.vmware.com/"><img src="https://avatars3.githubusercontent.com/u/18731474?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Blair Rampling</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=brampling" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/DanweDE"><img src="https://avatars3.githubusercontent.com/u/101926?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Daniel A. R. Werner</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=DanweDE" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/sbezludny"><img src="https://avatars0.githubusercontent.com/u/1378452?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sergii Bezliudnyi</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=sbezludny" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/shikaan"><img src="https://avatars1.githubusercontent.com/u/17052868?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Manuel Spagnolo</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=shikaan" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://mturki.me/"><img src="https://avatars3.githubusercontent.com/u/1846594?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mohamed Turki</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=mohamedturki" title="Code">💻</a></td>
    <td align="center"><a href="https://ahmed.sd/"><img src="https://avatars1.githubusercontent.com/u/12673605?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ahmed T. Ali</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=z0al" title="Code">💻</a></td>
    <td align="center"><a href="https://brunoxd13.github.io/"><img src="https://avatars0.githubusercontent.com/u/7950082?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Bruno Russi Lautenschlager</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=brunoxd13" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/heyitstowler"><img src="https://avatars0.githubusercontent.com/u/16481282?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Chris Towler</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=heyitstowler" title="Code">💻</a> <a href="https://github.com/contentful/forma-36/issues?q=author%3Aheyitstowler" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://markentier.tech/"><img src="https://avatars1.githubusercontent.com/u/446613?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Christoph Grabo</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=asaaki" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/colshacol"><img src="https://avatars2.githubusercontent.com/u/19484365?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Colton Colcleasure</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=colshacol" title="Code">💻</a></td>
    <td align="center"><a href="https://connorbaer.co/"><img src="https://avatars0.githubusercontent.com/u/11017722?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Connor Bär</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=connor-baer" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/djagya"><img src="https://avatars0.githubusercontent.com/u/2600431?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Danil Zakablukovskii</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=djagya" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/dominicbonnice"><img src="https://avatars0.githubusercontent.com/u/46789816?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dominic Bonnice</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=dominicbonnice" title="Code">💻</a></td>
    <td align="center"><a href="https://khaledgarbaya.net/"><img src="https://avatars1.githubusercontent.com/u/1156093?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Khaled Garbaya</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=Khaledgarbaya" title="Code">💻</a></td>
    <td align="center"><a href="https://www.stefanjudis.com/"><img src="https://avatars3.githubusercontent.com/u/962099?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Stefan Judis</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=stefanjudis" title="Code">💻</a></td>
    <td align="center"><a href="https://www.responsive.ch/"><img src="https://avatars1.githubusercontent.com/u/654171?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Thomas Jaggi</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=backflip" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/justman00"><img src="https://avatars2.githubusercontent.com/u/36477870?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Turcan Vladimir</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=justman00" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/vmilone"><img src="https://avatars2.githubusercontent.com/u/49650100?v=4?s=100" width="100px;" alt=""/><br /><sub><b>V. Milone</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=vmilone" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/arpl"><img src="https://avatars0.githubusercontent.com/u/1368611?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Aris Plakias</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=arpl" title="Code">💻</a></td>
    <td align="center"><a href="https://kamsar.net"><img src="https://avatars0.githubusercontent.com/u/103677?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kam Figy</b></sub></a><br /><a href="https://github.com/contentful/forma-36/issues?q=author%3Akamsar" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/VaguelySerious"><img src="https://avatars0.githubusercontent.com/u/29887157?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Peter Wielander</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=VaguelySerious" title="Code">💻</a> <a href="https://github.com/contentful/forma-36/issues?q=author%3AVaguelySerious" title="Bug reports">🐛</a></td>
    <td align="center"><a href="http://felixboenke.dev"><img src="https://avatars.githubusercontent.com/u/4083285?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Felix Boenke</b></sub></a><br /><a href="https://github.com/contentful/forma-36/issues?q=author%3AFLoppix" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/damienxy"><img src="https://avatars.githubusercontent.com/u/33579339?v=4?s=100" width="100px;" alt=""/><br /><sub><b>damienxy</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=damienxy" title="Code">💻</a> <a href="https://github.com/contentful/forma-36/issues?q=author%3Adamienxy" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://nikazawila.com"><img src="https://avatars.githubusercontent.com/u/9191638?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nika Zawila</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=nikazawila" title="Code">💻</a> <a href="#maintenance-nikazawila" title="Maintenance">🚧</a> <a href="https://github.com/contentful/forma-36/commits?author=nikazawila" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Sarah-Roediger"><img src="https://avatars.githubusercontent.com/u/67960996?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sarah</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=Sarah-Roediger" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/th1nkgr33n"><img src="https://avatars.githubusercontent.com/u/7330927?v=4?s=100" width="100px;" alt=""/><br /><sub><b>th1nkgr33n</b></sub></a><br /><a href="https://github.com/contentful/forma-36/issues?q=author%3Ath1nkgr33n" title="Bug reports">🐛</a></td>
    <td align="center"><a href="http://chaoste.github.io"><img src="https://avatars.githubusercontent.com/u/9327071?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Thomas Kellermeier</b></sub></a><br /><a href="https://github.com/contentful/forma-36/issues?q=author%3AChaoste" title="Bug reports">🐛</a> <a href="https://github.com/contentful/forma-36/commits?author=Chaoste" title="Code">💻</a></td>
    <td align="center"><a href="https://bandism.net/"><img src="https://avatars.githubusercontent.com/u/22633385?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ikko Ashimine</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=eltociear" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/anilkk"><img src="https://avatars.githubusercontent.com/u/1124415?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Anil Kumar krishanshetty</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=anilkk" title="Code">💻</a> <a href="https://github.com/contentful/forma-36/commits?author=anilkk" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/massao"><img src="https://avatars.githubusercontent.com/u/1071799?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Renato Massao Yonamine</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=massao" title="Code">💻</a></td>
    <td align="center"><a href="http://www.charliechrisman.com"><img src="https://avatars.githubusercontent.com/u/6521666?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Charlie Chrisman</b></sub></a><br /><a href="https://github.com/contentful/forma-36/issues?q=author%3Acachrisman" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/janvandenberg"><img src="https://avatars.githubusercontent.com/u/4704819?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jan van den Berg</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=janvandenberg" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/SirGavin"><img src="https://avatars.githubusercontent.com/u/11873876?v=4?s=100" width="100px;" alt=""/><br /><sub><b>SirGavin</b></sub></a><br /><a href="https://github.com/contentful/forma-36/issues?q=author%3ASirGavin" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/Lelith"><img src="https://avatars.githubusercontent.com/u/1789174?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kathrin Holzmann</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=Lelith" title="Code">💻</a> <a href="#maintenance-Lelith" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://bgutsol.com/"><img src="https://avatars.githubusercontent.com/u/10744462?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Bohdan Hutsol</b></sub></a><br /><a href="https://github.com/contentful/forma-36/commits?author=bgutsol" title="Code">💻</a> <a href="#maintenance-bgutsol" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/ghepting"><img src="https://avatars.githubusercontent.com/u/492573?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gary Hepting</b></sub></a><br /><a href="https://github.com/contentful/forma-36/issues?q=author%3Aghepting" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
