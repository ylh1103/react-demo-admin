import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

export function getBuildTime() {
  dayjs.extend(utc);
}
