export const customId = (): string =>
  (Date.now() % 100000).toString() + Date.now().toString().length;
