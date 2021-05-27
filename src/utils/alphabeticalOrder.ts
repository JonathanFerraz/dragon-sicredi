export function alphabeticalOrder(data: any) {
  const response = data.sort(function (a: any, b: any) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });

  return response;
}
