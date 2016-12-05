# Email Boilerplate

Email Boilerplate is a base structure for starting building email templates with pre-configured gulp packages and some starting templates. The idea behind this small repo is to maintain it and update it with better techniques.

### Features
  - Pug Template Engine
  - Stylus for CSS awesomeness
  - Images optimization
  - Inlining CSS into HTML
  - Working environment
  - Build final email command.

## Installation & Requirements
##### Copy this repo
You can do this true Terminal if you have Github setup locally. True your Github Desktop app or just [download as a .zip file](https://github.com/petsto/Email-Boilerplate/archive/master.zip).
```sh
$ git clone https://github.com/petsto/Email-Boilerplate.git
```

##### Install Node.js packages
For proper development with this Boilerplate, you'll need to have Node.js installed on your computer. Node is compatible with Windows, OS X, and Linux. [Visit Node.js website for installation](https://nodejs.org/en/)
```
$ npm install
```

##### Main commands
Now, once you have all the things installed, here are the base commands you can use with this Boilerplate (at least for now):
```
$ gulp
-- optimize images, pug templates compile, stylus compile, browser sync
$ gulp templates
-- only compiles .pug to .html
$ gulp stylus
-- only compiles .styl to .css
$ gulp images
-- only optimizing images
$ gulp clean
-- deletes ./dist/ folder
$ gulp email
-- inlining css and building email pages in ./dist/email/
```

#### Roadmap
  - ~~Proper Templates folder structures~~
  - Mixins for faster structure builds
  - Components for different type of elements
  - Email Templates
  - * Basic
  - * Basic + Sidebar
  - * Invitation
  - * Password Reset
  - * Newsletter
  - * Cards with images
  - Testing Templates for compatibility
  - Integration with Litmus ( if possible )
  - Free testing via Putsmail