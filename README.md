# HTML Email Boilerplate

HTML Email Boilerplate is a base structure for starting building email templates with pre-configured gulp packages and some starting code. The idea behind this small repo is to maintain it and update it with better and constantly imrpoving techniques. Any help and ideas are welcome so feel free to use and to be a great hacker.

### Features
  - Jade Template Engine
  - LessCSS
  - Images optimisation
  - Inlining CSS into HTML
  - Generating Email and Web (default) version

### Installation
Copy this repo
```sh
$ git clone https://github.com/petsto/Email-Boilerplate.git
```
Main commands
```sh
$ gulp
- optimize images, jade complile, less complile, browser refresh
$ gulp email
- inlining css and building html file in ./dist/email/
$ gulp jade
- compiles jade to html only
$ gulp less
- compiles less to css only
$ gulp images
- optimizing images only
```