export function generateId() {
  const randomId = Math.floor(Math.random() * Date.now());
  return randomId.toString();
}
