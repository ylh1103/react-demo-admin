declare namespace Env {
  interface ImportMeta extends ImportMetaEnv {
    readonly VITE_BASE_URL: string;
    readonly VITE_APP_TITLE: string;
    readonly VITE_ICON_PREFIX: 'icon';
    readonly VITE_ICON_LOCAL_PREFIX: 'local';
    readonly VITE_AUTOMATICALLY_DETECT_UPDATE: 'Y' | 'N';
  }
}
