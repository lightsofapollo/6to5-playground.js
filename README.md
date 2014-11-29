# 6to5 Playground / Example

For a very long time now I wanted to write es6 with node but no
"transpiler" has even come close to supporting both all the features
that make this worthwhile and have proper error/handling/ease of use.

6to5 gets it very very close (maybe even right) this project itself is
not useful but demonstrates building a npm package (which can actually
be uploaded to npm) / testing of the package / error handling with
proper sources.

## Structure

  - [src](./src)/* :
      Your source code written in es6.

  - [test](./test/)/* :
      Your tests written in es6.

  - [package.json](./package.json) :
      Note the use of 6to5 as a prepublish step this will
      transpile the code in "src" to "dest".

  - [index.js](./index.js) :
      The "bootstrap" module includes polyfills (which can be optional) and
      re-exports the contents of "build". Note that source map support is
      _not_ enabled here so it's easier to debug this without knowledge of how
     this package was built.

  - [test/entrypoint.js](./test/entrypoint.js) :
      I Use mocha for testing this file configures 6to5's module loader for
      testing (which enables source maps).

## Usage

Run the tests: `npm test`
Deploy: `npm install` / `npm publish`

## License

The MIT License (MIT)

Copyright (c) 2014 Sahaja James Lal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

