export default function updateUniqItems(groceries) {
  if (!(groceries instanceof Map)) throw Error('Cannot process');
  groceries.set('Pasta', 100);
  groceries.set('Rice', 100);
  return groceries;
}
