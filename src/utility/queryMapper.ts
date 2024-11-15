export const queryMapper = (queries: any) => {
  let keys = Object.keys(queries);
  let queryString = "?";
  if (keys.length) {
    keys.map((item, i) => {
      queryString += `${item}=${queries[keys[i]]}&`;
    });
  }

  return queryString
}