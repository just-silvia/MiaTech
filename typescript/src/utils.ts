function filterTodos<T>(arr: T[], predicate: (item: T) => boolean): T []{
  return arr.filter(predicate);
}