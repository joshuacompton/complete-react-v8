# Pure react

ReactDOM.createElement, render - will never be used because jsx does this
possibly use if state needed to be imported from (ex angular or websocket)

## react benefits

good way to organize components
handles state well
not opinionated about data
one way data flow makes things easy to follow

# NPM and other tools

npm run lint -- --debug
-- means that the following --debug will be passed to eslint and not npm

build tools
webpack - more verbose config and not performant for large projects
parcel - still valid https://parceljs.org/

## vite

standard for react
vite requires .jsx but react would work with .js
vite has "tree shaking" which is "live code inclusion"
