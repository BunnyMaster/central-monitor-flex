import dayjs from 'dayjs';
import { dependencies, devDependencies, engines, name, version } from '../package.json';

const __APP_INFO__ = {
	pkg: { name, version, engines, dependencies, devDependencies },
	lastBuildTime: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
};

export const define = () => {
	return {
		__APP_INFO__: JSON.stringify(__APP_INFO__),
	};
};
