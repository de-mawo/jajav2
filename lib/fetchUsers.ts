import { UserTypes } from "../types";

const userFetcher = async () => {
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

export default userFetcher;
