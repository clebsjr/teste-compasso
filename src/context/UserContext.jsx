import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../services/api";

import { toast } from "react-toastify";

const UserContext = createContext({});

export function UserProvider({ children }) {
  const [userName, setUserName] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [repositoryList, setRepositoryList] = useState([]);

  const history = useHistory();

  async function handleSearchUser() {
    try {
      const response = await api.get(`/${userName}`);

      setUserInfo(response.data);

      history.push({ pathname: `/${userName}` });
    } catch {
      toast.error("Usuário não encontrado");
    }
  }

  async function handleSeachRepository(type) {
    try {
      if (type === "repos") {
        const response = await api.get(`/${userName}/repos`);

        setRepositoryList(response.data);
      } else {
        const response = await api.get(`/${userName}/starred`);

        setRepositoryList(response.data);
      }
    } catch {
      toast.error("Não foi possível listar repositórios");
    }
  }

  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
        handleSearchUser,
        userInfo,
        handleSeachRepository,
        repositoryList
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  return context;
}
