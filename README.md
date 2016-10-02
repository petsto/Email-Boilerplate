# Email Boilerplate

HTML Email Boilerplate is a base structure for starting building email templates with pre-configured gulp packages and some starting templates. The idea behind this small repo is to maintain it and update it with better and constantly imrpoving techniques.

### Features
  - Pug Template Engine
  - Stylus
  - Images optimisation
  - Inlining CSS into HTML
  - Generating Email and Web (default) version

### Installation
Copy the repo
```sh
$ git clone https://github.com/petsto/Email-Boilerplate.git
```
Install Node.js packages
```sh
$ npm install
```

Main commands
```sh
$ gulp
- optimize images, pug templates complile, stylus complile, browser sync
$ gulp email
- inlining css and building html file in ./dist/email/
$ gulp pug
- only compiles .pug to .html
$ gulp less
- only compiles .styl to .css
$ gulp images
- only optimizing images
$ gulp clean
- removes ./dist/ folder
```

#### Things to-do
  - Templates
  - Proper testing and integration with Litmus
  - Free testing via Putsmail
