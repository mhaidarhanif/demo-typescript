import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const formatDateTime = (date: string) => {
  const formattedTime = dayjs().to(dayjs(date)); // "x years ago"

  return formattedTime;
};
