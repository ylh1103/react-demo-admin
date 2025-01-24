declare namespace Env {
  interface ImportMeta extends ImportMetaEnv {
    readonly VITE_BASE_URL: string;
    readonly VITE_APP_TITLE: string;
  }
}
