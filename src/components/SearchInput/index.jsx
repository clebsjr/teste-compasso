import { useUser } from "../../context/UserContext";
import "./styles.scss";

export const SearchInput = () => {
  const { userName, setUserName, handleSearchUser } = useUser();

  return (
    <div className="container search_container">
      <div className="row">
        <div className="col-md-10">
          <input
            type="text"
            className="form-control"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            placeholder="Digite um nome de usuário do Github"
          />
        </div>
        <div className="col-md-2">
          <button type="button" class="btn btn-dark" onClick={handleSearchUser}>
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};
