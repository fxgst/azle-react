/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly CANISTER_URL: string | undefined;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
