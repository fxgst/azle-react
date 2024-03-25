# ICP Development Environment with Azle and React

This template gives you everything you need to build a full-stack Web3 application on the [Internet Computer](https://internetcomputer.org/).
It includes a frontend built with Vite and React, and a backend written in JS/TS (Azle).

## Get started with one click:
### In your browser:

In Gitpod 

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/fxgst/azle-react/)

or GitHub Codespaces

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/fxgst/azle-react/?quickstart=1)


### Locally:

Make sure you have you have Docker and VS Code installed and running, then click the button below

[![Open locally in Dev Containers](https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/fxgst/azle-react)


## 🚀 Develop

When the editor opened, run the following commands to deploy the canisters and start a development server:

```sh
npm install # Install project dependencies
dfx deploy # Deploy canisters locally

npm start # Start the development server
```

The frontend will update automatically as you save changes. 
For the backend, run `dfx deploy backend` to redeploy.
To redeploy all canisters (front- and backend), run `dfx deploy`.

When ready, run `dfx deploy --network ic` to deploy your application to the ICP mainnet.

## 🛠️ Technology Stack

- [Vite](https://vitejs.dev/): high-performance tooling for front-end web development
- [React](https://reactjs.org/): a component-based UI library
- [TypeScript](https://www.typescriptlang.org/): JavaScript extended with syntax for types
- [Sass](https://sass-lang.com/): an extended syntax for CSS stylesheets
- [Azle CDK](https://demergent-labs.github.io/azle/): the Canister Development Kit for JS/TS

## 📚 Documentation

- [Internet Computer docs](https://internetcomputer.org/docs/current/developer-docs/ic-overview)
- [Internet Computer wiki](https://wiki.internetcomputer.org/)
- [Internet Computer forum](https://forum.dfinity.org/)
- [Vite developer docs](https://vitejs.dev/guide/)
- [React quick start guide](https://react.dev/learn)
- [`dfx.json` reference schema](https://internetcomputer.org/docs/current/references/dfx-json-reference/)
- [Azle developer docs](https://internetcomputer.org/docs/current/developer-docs/backend/typescript/)
- [Developer Experience Feedback Board](https://dx.internetcomputer.org/)


## 💡 Tips and Tricks

- If the links printed by dfx do not work in Codespaces, run `./canister_urls.py` and click the links shown there.
- If you get an error "Error: An error happened during communication with the replica: ... Connection refused", run `dfx start --clean --background` to start dfx
