/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_ENDPOINT: string;
  // Add other environment variables as needed
}

// Augment the ImportMeta interface
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
