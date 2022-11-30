import { PointTypes, UserTypes } from "../types";

export const userFetcher = async () => {
  const res = await fetch("/api/user/user");

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }
  const data = await res.json();

  // console.log(data)

  const users: UserTypes[] = data.users;

  return users;
};

 
export const pointFetcher = async (...args: any[]) => {

  // console.log(...args)
  const [url, query] = args

  // console.log('This is url:',url);
  
  // console.log('This is query:',query);
  const [name, value] = query.split(' ')

  const res = await fetch(`${url}?${name}=${query}`)

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }
  const data = await res.json();

  // console.log(data)

  const points: PointTypes[] = data.points;

  return points;
};
