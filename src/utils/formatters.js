// Helper functions for formatting values
export function uppercase(value) {
  return String(value).toUpperCase();
}

export function truncate(value, length = 10) {
  return String(value).length > length ? String(value).slice(0, length) + '...' : value;
}
