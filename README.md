# React + Redux + TypeScript pattern

This is a pattern for using React with Redux in TypeScript. This includes type-safety for FSA ([Flux standard actions](https://github.com/acdlite/flux-standard-action)) at the action creation and in the reducer.

React Components are wrapped in a Container that connects the Component to Redux. Interfaces are declared for the component's Props in the Container; split into `Props` and `Actions` to separate properties and action callbacks.

You can also read the [original create-react-app README](README-CRA.md)

### Layout

The folder / file layout this pattern uses is:

* `src/modules/root/index.ts` the root file for the Redux store and root reducer
* `src/modules/<module>` app modules, containing components, containers, actions and reducers.
* `src/modules/<module>/components` React components
* `src/modules/<module>/containers` React component containers
* `src/modules/<module>/actions.ts` Redux action creators
* `src/modules/<module>/reducer.ts` Redux reducer

## Dependencies

* [react](http://reactjs.org)
* [redux](https://redux.js.org)
* [react-redux](https://github.com/reactjs/react-redux) (connects React and Redux)
* [immer](https://github.com/immerjs/immer) (immutable state)
* [typescript-fsa](https://github.com/aikoven/typescript-fsa) (type-safe creators for flux standard actions)
* [typescript-fsa-reducers](https://github.com/dphilipson/typescript-fsa-reducers) (type-safe reducers for flux standard actions)
* [redux-devtools-extension](http://extension.remotedev.io) (debug Redux)

### Immer / Immutability

Immer provides us with guaranteed immutability without being intrusive like [`immutablejs`](https://github.com/immutable-js/immutable-js).

We combine it with a TypeScript conditional type called `DeepReadonly`, which makes all of our types `readonly` at compile-time
as well.

You can see Immer at work in the reducers. It not only ensures immutable output, it also simplifies the writing of reducers as
we no longer need to use object spreading.

## Running

You can run this project by cloning the git repo, then cd into the project folder.

Install the required node modules:

```shell
npm install
```

Then run it using:

```shell
npm start
```

## Setup

This project was setup using [create-react-app](https://github.com/facebook/create-react-app). You can setup your own project using the commands below.

We use [`nvm`](https://github.com/nvm-sh/nvm) for managing the versions of `node` and `npm`, so that
everyone uses the same version.

```shell
nvm install 12.16.1
nvm use 12.16.1
```

Check that you're using the latest version of `create-react-app`. Consult (npmjs.com)[https://www.npmjs.com/package/create-react-app] for the latest version
then run `npx` to check that it's using the latest version. If it's not, try uninstalling any globally installed versions.

```shell
npx create-react-app --version
```

Create the project using `create-react-app`:

```shell
npx create-react-app <project> --use-npm --template typescript
cd <project>
```

Setup [nvm](https://github.com/nvm-sh/nvm) inside the project itself, so all users of the project can
type `nvm use` to get the right node version for the project:

```
echo 12.16.1 > .nvmrc
```

Now when we run `nvm use` inside the project we'll get the right version of node for the project.

It is important that you always run `nvm use` before you use `npm`, so that you use the right version of `node` and `npm` when installing dependencies and running the project.

If `nvm` complains about the right version of node not being available, run `nvm install`.

Install dependencies:

```shell
npm install --save redux react-redux typescript-fsa-reducers typescript-fsa immer
npm install --save-dev @types/react-redux
```

Include the devtools:

```shell
npm install --save redux-devtools-extension
```

Edit `package.json` and move all of the `@types/*` packages from `dependencies` to `devDependencies`.

Edit `tsconfig.json` and add to the `compilerOptions`:

```json
"baseUrl": "src",
```

This enables us to use imports relative to the root of our source directory, no matter where the file we're authoring is located, e.g. `import Example from 'modules/template/containers/Example'`.

Copy the template files by copying the `modules` folder from this
repository into your new project:

```
cp -r ../react-redux-typescript-pattern/src/modules src/
```

Then look at the `src/App.tsx` in this pattern to see how to include the example container into your project.

### IDE

Download and install [Visual Studio Code](https://code.visualstudio.com).

There is a good tutorial on using [Visual Studio Code with React](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial).

#### Linting

Install the following VSCode extensions:
* ESLint

Copy the `.eslintrc.js` and `.vscode/settings.json` files. These files setup my standard linting rules and enable them in VS Code.

More information about this setup is available from https://facebook.github.io/create-react-app/docs/setting-up-your-editor

#### Debugging

Create a file `.vscode/launch.json` with the following contents:

```
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:3000",
            "webRoot": "${workspaceFolder}"
        }
    ]
}
```

Then after running `npm start`, close the browser window it creates, then go to the Debug tab in VSCode and click the Play button.

### Redux DevTools Extension

Install the Redux DevTools for Chrome, Firefox and others by visiting http://extension.remotedev.io and following the instructions.
