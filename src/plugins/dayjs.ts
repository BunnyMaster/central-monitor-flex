import 'dayjs/locale/zh-cn';

import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';

dayjs.extend(weekday);
dayjs.extend(localeData);

dayjs.locale('zh-cn');

export default dayjs;
