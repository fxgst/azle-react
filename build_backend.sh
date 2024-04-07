#!/bin/bash

source .env
if [ "$DFX_NETWORK" == "local" ] 
    then VITE_CANISTER_URL=http://$(dfx canister id backend).localhost:4943 npm run build --workspaces --if-present
elif [ "$DFX_NETWORK" == "ic" ]
    then VITE_CANISTER_URL=https://$(dfx canister id backend --ic).raw.icp0.io npm run build --workspaces --if-present
fi
