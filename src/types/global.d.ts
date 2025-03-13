declare global {
  /* 环境便配置 */
  export declare interface ViteEnv {
    VITE_APP_TITLE: string;
    VITE_PORT: number;
    VITE_PUBLIC_PATH: string;
    VITE_APP_URL: string;
    VITE_APP_BASE_API: string;
    VITE_STRICT_PORT: boolean;
    VITE_POST_CSS_PX_TO_VIEWPORT8_PLUGIN: boolean;
    VITE_MOCK_DEV_SERVER: boolean;
    VITE_MOCK_BASE_API: string;
    VITE_CDN: boolean;
    VITE_COMPRESSION: string;
  }
}
