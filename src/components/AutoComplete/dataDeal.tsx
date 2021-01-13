import { DataSourceType } from "./autoComplete";

interface LakerPlayerProps {
  value: string;
  number: number;
}

interface GithubUserProps {
  login: string;
  url: string;
  avatar_url: string;
}

const lakers: string[] = [
  "bradley",
  "pope",
  "caruso",
  "cook",
  "cousins",
  "james",
  "AD",
  "green",
  "howard",
  "kuzma",
  "McGee",
  "rando",
];

const lakersWithNumber = [
  { value: "bradley", number: 11 },
  { value: "pope", number: 1 },
  { value: "caruso", number: 4 },
  { value: "cook", number: 2 },
  { value: "cousins", number: 15 },
  { value: "james", number: 23 },
  { value: "AD", number: 3 },
  { value: "green", number: 14 },
  { value: "howard", number: 39 },
  { value: "kuzma", number: 0 },
];

// normal
export const handleFetchNormal = (query: string) => {
  return lakers.filter((player) => player.includes(query))
  .map((name) => ({ value: name }));
};

// synch
export const renderOptionSynch = (item: DataSourceType<LakerPlayerProps>) => {
  return (
    <>
      <p><strong>Name: {item.value}</strong></p>
      <p>number: {item.number}</p>
    </>
  );
};

export const handleFetchSynch = (query: string) => {
  return lakersWithNumber.filter((player) => player.value.includes(query));
};

// async
export const renderOptionAsync = (item: DataSourceType<GithubUserProps>) => {
  return (
    <>
      <p><strong>login: {item.login}</strong></p>
      {/* <p>url: {item.url}</p> */}
    </>
  );
};

export const handleFetchAsync = (query: string) => {
  return fetch(`https://api.github.com/search/users?q=${query}`)
    .then((res) => res.json()) 
    .then(({ items }) => {
      // console.log(items);
      const formatItems = items
        .slice(0, 10)
        .map((item: any) => ({ value: item.login, ...item }));
        return formatItems;
    });
};
