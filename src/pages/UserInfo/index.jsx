import { CardRepository } from "../../components/CardRepository";
import { CardUser } from "../../components/CardUser";
import { useUser } from "../../context/UserContext";
import "./styles.scss";

export const UserInfo = () => {
  const { repositoryList } = useUser();

  console.log(repositoryList)
  return (
    <div>
      <CardUser />
      {repositoryList.map((repos) => (
        <CardRepository
          name={repos.name}
          description={repos.description}
          link={repos.html_url}
          repoPublic={repos.private}
        />
      ))}
    </div>
  );
};
