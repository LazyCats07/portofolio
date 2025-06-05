export type Theme = 'light' | 'dark';

export const applyTheme = (theme: Theme): void => {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  localStorage.setItem('theme', theme);
};

export const loadTheme = (): void => {
  if (typeof window === 'undefined') return;
  const saved = localStorage.getItem('theme') as Theme | null;
  applyTheme(saved === 'dark' ? 'dark' : 'light');
};

export const toggleTheme = (): Theme => {
  const current =
    (localStorage.getItem('theme') as Theme | null) || 'light';
  const next: Theme = current === 'light' ? 'dark' : 'light';
  applyTheme(next);
  return next;
};
