export default {
  title: 'main',

  colors: {
    primary: '#f18b8c',
    secondary: '#292534',
    white: '#fff',
    purple: '#ab47bc',
    green: '#66bb6a',
    purpleStrong: '#9c27b0',
    grey: '#adadad',
    greyStrong: '#312e38',
    greyInput: '#87868b',
    grey999: '#999',
    sub: '#ffffff9e',
    red: '#c53030',
    redForm: '#ef5350',
    frozen: '#f4ede8',
  },
  fontSizes: {
    default: '1.4rem',
    large: '1.6rem',
    small: '1.2rem',
    tiny: '1rem',
  },
  spacing: {
    default: '1.6rem',
    vertical: '1.6rem 0',
    horizontal: '0 1.6rem',
    large: '2.4rem',
  },
  transition: {
    default: '180ms ease-in-out',
  },
  radius: {
    default: '0.5rem',
    small: '0.3rem',
    tiny: '0.2rem',
  },
  borders: {
    default: '1px solid #e0e0e0',
  },
  shadows: {
    default: '0 0.5rem 2rem rgba(0, 0, 0, 0.14)',
    flat: '0 0.2rem 0.2rem rgba(0, 0, 0, 0.08)',
    small: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
    purple:
      '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(156, 39, 176,.4)',
    red: '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(244, 67, 54,.4)',
    yellow:
      '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(255, 152, 0,.4)',
    green:
      '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(76, 175, 80,.4)',
    blue:
      '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(0, 172, 193,.4)',
  },
  modals: {
    purple: 'linear-gradient(60deg, #ab47bc, #8e24aa)',
    red: 'linear-gradient(60deg, #ef5350, #e53935)',
    yellow: 'linear-gradient(60deg, #ffa726, #fb8c00)',
    green: 'linear-gradient(60deg, #66bb6a, #43a047)',
    blue: 'linear-gradient(60deg, #26c6da, #00acc1)',
  },
} as const;
