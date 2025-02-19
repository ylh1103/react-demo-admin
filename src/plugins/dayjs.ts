import { extend, locale } from 'dayjs';
import localeData from 'dayjs/plugin/localeData';

// dayjs汉化
export const setupDayjs = () => {
  extend(localeData);

  locale('zh-cn');
}
