export const ENV = {
  // API
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL ?? "",
  API_KEY: import.meta.env.VITE_API_KEY ?? "",

  // App
  APP_ENV: import.meta.env.VITE_APP_ENV ?? "development",
  ENABLE_DEVTOOLS: import.meta.env.VITE_ENABLE_DEVTOOLS === "true",
  ENABLE_LOGS: import.meta.env.VITE_ENABLE_LOGS === "true",

  // Vite built-ins
  IS_DEV: import.meta.env.DEV,
  IS_PROD: import.meta.env.PROD,
  MODE: import.meta.env.MODE,
} as const;
