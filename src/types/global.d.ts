declare global {
	/* 环境便配置 */
	interface ViteEnv {
		VITE_APP_TITLE: string;
		VITE_PORT: number;
		VITE_PUBLIC_PATH: string;
		VITE_APP_URL: string;
		VITE_STRICT_PORT: boolean;
		VITE_CDN: boolean;
		VITE_COMPRESSION: string;
	}
}
