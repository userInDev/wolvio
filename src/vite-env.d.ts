/// <reference types="vite/client" />

declare module "*.css";
declare module "*.svg";
declare module "*.png";

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_API_KEY: string;
  readonly VITE_APP_ENV: string;
  readonly VITE_ENABLE_DEVTOOLS: string;
  readonly VITE_ENABLE_LOGS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
