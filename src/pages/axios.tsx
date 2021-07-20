import axios from "axios";
import { useEffect, useState } from "react";
import { IUser } from "../types/user";
// you don't need anything else to import

interface Props {
  // TODO: add user type
  items: IUser;
}
const AxiosTest: React.FC<Props> = (props) => {
  // TODO: once you get data map through data and show them name
  const [users, setUserList] = useState<Props[]>([]);
  const getRepo = () => {
    axios.get<Props[]>("/api/users").then((response) => {
      console.log(response);
      setUserList(response.data);
    });
  };
  useEffect(() => getRepo(), []);
  console.log(users[0]);
  return (
    <>
      <div>
        <div>Simple Axios And Data Fetching :: Edit src/pages/axios.tsx</div>
        <ul>
          {users.map((user) => (
            <li>
              <span>{user.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AxiosTest;
// TODO: fetch data with axios to use in app
// RestApi: axios.get("/api/users") => [{name: "amir"}]
// NOTE: data fetching should happen in server side
// Resource: https://nextjs.org/docs/basic-features/data-fetching
// Resource: https://github.com/axios/axios
