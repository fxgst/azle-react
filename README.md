# ICP Development Environment with Azle and React

This template gives you everything you need to build a full-stack Web3 application on the [Internet Computer](https://internetcomputer.org/).
It includes a frontend built with Vite and React, and a backend written in JS/TS (Azle).

## Get started with one click:
### Locally:

Make sure you have you have the latest version of Docker (e.g. >25) and VS Code installed and running, then click the button below

[![Open locally in Dev Containers](https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/fxgst/azle-react)

### In your browser:

In Gitpod 

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/fxgst/azle-react/)

or GitHub Codespaces

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/fxgst/azle-react/?quickstart=1)


## 🚀 Develop

When the editor opened, run the following commands to start a local ICP node and deploy the canister smart contract:

```bash
npm install # Install dependencies
dfx start --clean # Start a local ICP node
# In a new terminal window:
dfx deploy # Deploy smart contract locally
```

If you are developing in Github Codespaces, run `./canister_urls.py` to get the canister URLs.

To interact with the backend canister smart contract, you can use `dfx` on the command line:

```bash
dfx canister call backend greet '("Dom")' # Call the greet query function with the argument "Dom"
# or 
dfx canister call backend setMessage '("GM")' # Call the setMessage update function
```

To redeploy the smart contract, run `dfx deploy` again.

When ready, run `dfx deploy --ic` to deploy your application to the ICP mainnet.
The command will print a different canister URL for mainnet, ending in `.icp0.io`.
You can make calls to the smart contract on mainnet just like to the local one!

## 🛠️ Technology Stack

- [Azle CDK](https://demergent-labs.github.io/azle/): the Canister Development Kit for JS/TS
- [Vite](https://vitejs.dev/): high-performance tooling for front-end web development
- [React](https://reactjs.org/): a component-based UI library
- [TypeScript](https://www.typescriptlang.org/): JavaScript extended with syntax for types

## 📚 Documentation

- [Azle book](https://demergent-labs.github.io/azle/the_azle_book.html)
- [Internet Computer docs](https://internetcomputer.org/docs/current/developer-docs/ic-overview)
- [Internet Computer wiki](https://wiki.internetcomputer.org/)
- [Internet Computer forum](https://forum.dfinity.org/)
- [Vite developer docs](https://vitejs.dev/guide/)
- [React quick start guide](https://react.dev/learn)
- [`dfx.json` reference schema](https://internetcomputer.org/docs/current/references/dfx-json-reference/)
- [Developer Experience Feedback Board](https://dx.internetcomputer.org/)

## 💡 Tips and Tricks

- If you get errors accessing the canister URLs developing remotely, try running `./canister_urls.py` to get the correct URLs.

- Run `npm run dev` to see the frontend update live as you make changes.

- If you get an error "You installed esbuild for another platform than the one you're currently using.", remove the `node_modules` folder and run `npm install` again.
