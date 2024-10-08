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

# Hooks

useEffect will run something once the component rerenders by default
add arguments array to end to make it update on state change

## useEffect

some people only use useEffect within a custom hook (ex useBreedList)
most bugs happen here and getting it right is the hardest part of writing maintainable code
rule - minimize useEffect in your code. if theres an api / tool that can handle it then use that instead

# Forms

e is a synthetic dom event

## uncontrolled vs controlled

uncontrolled has a submit function that will process submitted data.
controlled adds state to each field.

# Routing

HashRouter - dont use unless needed because its bad for SEO
Use Link from react-router-dom because link doesnt rerender the whole app

# React Query

its possible to have multiple query clients in an app but there arent many use cases for this.
