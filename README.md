# bLANS: better LaTeX for ANS

[ANS.app](https://ans.app/) is the satisfying grading platform. But sometimes
typesetting math is not very satisfying. ANS uses its own flavour of markup
which for typesetting [LaTeX](https://www.latex-project.org/) uses double dollar
signs (\$\$) for inline equations and triple dollar signs (\$\$\$) for display
equations. ANS has the extra quirk of not supporting line-breaks in LaTeX
expressions.

This is quite unusual, and I have yet to find other editors providing this same
flavour of markup. The closest, which happens to be the most widely used, is
[Pandoc](https://pandoc.org/)-flavoured
[markdown](https://daringfireball.net/projects/markdown/), which uses one less
dollar sign across the board and allows for, as expected, line-breaks in LaTeX
expressions.

More importantly, this flavour is supported by most modern editors and tools.
The idea with bLANS is therefore to allow users to write their answers in their
editor of choice, and then convert these to ANS-flavour markup via bLANS. This
allows users to work more safely (don't need to rely on ANS not crashing) and
more comfortably (can use more advanced editors).

## Usage

Simply paste your normal LaTeX markup (pandoc markdown) in the top text area and
press 'Convert'. Your input will appear converted to ANS LaTeX markup in the
bottom text area. You can then either manually highlight and copy the result or
press the 'Copy to Clipboard' button.

## Development

This project is built using [GatsbyJS](https://www.gatsbyjs.com/) and
[TailwindCSS](https://tailwindcss.com/), with hosting provided by
[GitHub Pages](https://pages.github.com/).

To get set up:

1. Fork this repository
2. Clone your fork
3. Install [NodeJS](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/). I
   recommend using [NVM](https://github.com/nvm-sh/nvm) to take care of that
4. `cd` to the cloned repo
5. Run `npm install` to install the necessary packages
6. Run `npm run develop` to run a development version of the site on your local
   machine

[Pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
are welcome.

## Issues and Feature Requests

For the moment the repo is very basic.

If something is not working or you would like an extra feature, please submit a
new issue in the
[GitHub issues page](https://github.com/thesofakillers/bLANS/issues)
