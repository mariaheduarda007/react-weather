export const WEATHERAPI =
  process.env.NODE_ENV === 'development'
    ? '/weather'
    : 'https://api.hgbrasil.com/weather';

