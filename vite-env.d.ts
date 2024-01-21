// vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_API_ENDPOINT: string;
    // Add other environment variables as needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  