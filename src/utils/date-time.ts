import dayjs from 'dayjs';

export function getCurrentLocalDateISO() {
  return dayjs().toISOString();
}

export function formatDateToISO(date: string | Date) {
  return dayjs(date).toISOString();
}

export function formatDateToMonthDayYear(date: string | Date) {
  return dayjs(date).format('MMM D, YYYY');
}

export function formatDateToTime(date: string | Date) {
  return dayjs(date).format('h:mm A');
}

export function formatDateToMonthDayYearTime(date: string | Date) {
  return dayjs(date).format('MMM D, YYYY h:mm A');
}
