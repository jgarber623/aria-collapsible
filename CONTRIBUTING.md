# Contributing to aria-collapsible

I'd love to have your help improving aria-collapsible! If you'd like to pitch in, you can do so in a number of ways:

1. Look through open [Issues](https://github.com/jgarber623/aria-collapsible/issues).
2. Review any open [Pull Requests](https://github.com/jgarber623/aria-collapsible/pulls).
3. [Fork aria-collapsible](#getting-set-up-to-contribute) and fix an open Issue or add your own feature.
4. File new Issues if you have a good idea or see a bug and don't know how to fix it yourself. _Only do this after you've made sure the behavior or problem you're seeing isn't already documented in an open Issue._

I definitely appreciate your interest in (and help improving) aria-collapsible. Thanks!


## Install development dependencies

aria-collapsible's build process uses [npm](https://www.npmjs.com/) and [Node.js](http://nodejs.org/). If you're using a Mac, the easiest way to install npm and Node.js (and plenty of other great tools) is with [Homebrew](http://brew.sh/):

	brew install node

If you're using a different operating system, use a different package manager, or prefer not to use Homebrew, check out the [Node.js Downloads page](http://nodejs.org/download/).


## Get set up to contribute

Contributing to aria-collapsible is pretty straightforward:

1. Fork the aria-collapsible repo and clone it.
2. Install development dependencies by running `npm install` from the root of the project.
3. Create a feature branch for the issue or new feature you're looking to tackle: `git checkout -b your-descriptive-branch-name`.
4. _Write some code!_
5. ~~If your changes would benefit from testing, add the necessary tests and verify everything passes by running `npm test`.~~
6. Commit your changes: `git commit -am 'Add some new feature or fix some issue'`.
7. Push the branch to your fork of aria-collapsible: `git push origin your-descriptive-branch-name`.
8. Create a new Pull Request and I'll give it a look!


## "But what files do I change?!?"

Excellent question. aria-collapsible's source code is in the file `src/aria-collapsible.js`. Make your changes here!

When you're done working (and before you push your code or issue a pull request), run `npm run build` from the root of the project to recreate the files in the `dist` folder. This task will generate compiled and compressed versions of the project.

**Do not directly edit the files in the `dist` folder!**


## Code Style

Code styles are like opinions: Everyone's got one and yours is better than mine. Here's how aria-collapsible should be written:

- Use hard tabs for indentation.
- No trailing whitespace and blank lines should have whitespace removed.
- Prefer single quotes over double quotes unless interpolating.
- Follow the conventions you see in the existing source code as best as you can.

aria-collapsible's formatting guidelines are defined in the `.editorconfig` file which uses the [EditorConfig](http://editorconfig.org/) syntax. There are [a number of great plugins for a variety of editors](http://editorconfig.org/#download) that utilize the settings in the `.editorconfig` file. Using EditorConfig will make your time spent coding a little bit easier.

Your bug fix or feature addition won't be rejected if it runs afoul of any (or all) of these guidelines, but following the guidelines will definitely make everyone's lives a little easier.
