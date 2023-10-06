export const greeter = (person: string) => {
  return `Hello, ${person}!`;
}

export function testGreeter() {
  const user = 'Grant';
  Logger.log(greeter(user));
}

