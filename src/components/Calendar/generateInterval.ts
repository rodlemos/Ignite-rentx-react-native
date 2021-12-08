import { eachDayOfInterval, format, parseISO } from "date-fns";
import theme from "../../global/theme";
import { getPlatformDate } from "../../utils/getPlatformDate";
import { MarkedDateProps, DayProps } from '.';

export function generateInterval(start: DayProps, end: DayProps) {
  let interval: MarkedDateProps = {};

  eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp)
  }).forEach((item) => {
    const date = format(getPlatformDate(item), 'yyyy-MM-dd');
    interval = {
      ...interval,
      [date]: {
        color: start.dateString === date || end.dateString === date
          ? theme.colors.main : theme.colors.main_light,
        textColor: start.dateString === date || end.dateString === date
          ? theme.colors.background_secundary : theme.colors.main
      }
    }
  });

  return interval;
}