import { parseISO, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

function toDayMonthYear(date: string) {
  const formattedDate = parseISO(date);
  return format(formattedDate, 'dd/MM/yyyy').toString();
}

function toHourMinute(date: string) {
  const formattedDate = parseISO(date);
  return format(formattedDate, 'HH:mm').toString();
}

function formatDateWithHour(date: string) {
  return format(parseISO(date), "dd/MM/yyyy 'às' HH:mm", { locale: ptBR });
}

const formatDate = {
  toDayMonthYear,
  toHourMinute,
  formatDateWithHour,
};

export default formatDate;
