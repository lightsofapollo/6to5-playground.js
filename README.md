# 6to5 Playground / Example

For a very long time now I wanted to write es6 with node but no
"transpiler" has even come close to supporting both all the features
that make this worthwhile and have proper error/handling/ease of use.

6to5 gets it very very close (maybe even right) this project itself is
not useful but demonstrates building a npm package (which can actually
be uploaded to npm) / testing of the package / error handling with
proper sources.

## Structure

  - src/* : Your source code written in es6.

  - test/* : Your tests written in es6.

  - package.json: Note the use of 6to5 as a prepublish step this will
                  transpile the code in "src" to "dest".

  - index.js : The "bootstrap" module includes polyfills (which can be
               optional) and re-exports the contents of "build". Note
               that source map support is _not_ enabled here so it's easier to
               debug this without knowledge of how this package was built.

  - test/entrypoint.js : I Use mocha for testing this file configures
                         6to5's module loader for testing (which enables
                         source maps).
