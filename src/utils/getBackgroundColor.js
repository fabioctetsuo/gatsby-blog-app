export const getBackgroundColor = () => {
  const theme = typeof window !== 'undefined' && window.__theme;
  return theme === 'light' ? '#fff' : '#16202c';
}