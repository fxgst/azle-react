#!/usr/bin/python3

import json
from os import environ, path

GREEN='\033[1;32m'
NORMAL='\033[0m'
BOLD='\033[1m'

def get_host():
    if 'GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN' in environ:
        return f"https://{environ['CODESPACE_NAME']}-4943.{environ['GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN']}"
    else:
        return 'http://127.0.0.1:4943'

if __name__ == "__main__":
    root_path = path.dirname(path.realpath(__file__))
    canister_id_file = f'{root_path}/.dfx/local/canister_ids.json';
    if not path.exists(canister_id_file):
        print(f"Run 'dfx deploy' first.")
        exit(1)
    with open(canister_id_file) as f:
        data = json.load(f)
        frontend_canisters = []
        backend_canisters = []

        for key, value in data.items():
            if key == '__Candid_UI':
                candid_ui_canister_id = value['local']
            elif 'frontend' in key:
                frontend_canisters.append((key, value['local']))
            else:
                backend_canisters.append((key, value['local']))

        host = get_host()
        
        print(f"{BOLD}URLs:{NORMAL}")
        if frontend_canisters:
            print(f"""{BOLD}  Frontend canister via browser{NORMAL}""")
            for name, id in frontend_canisters:
                print(f"{BOLD}    {name}: {GREEN}{host}/?canisterId={id}{NORMAL}")
        if backend_canisters:
            print(f"{BOLD}  Backend canister via Candid interface:")
            for name, id in backend_canisters:
                print(f"{BOLD}    {name}: {GREEN}{host}/?canisterId={candid_ui_canister_id}&id={id}{NORMAL}")
