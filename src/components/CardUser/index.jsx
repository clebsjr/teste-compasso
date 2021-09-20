import { useUser } from "../../context/UserContext";
import "./styles.scss";

export const CardUser = () => {
  const { userInfo, handleSeachRepository } = useUser();
  return (
    <div className="card card_info">
      <div className="card-body">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="avatar">
                <img src={userInfo.avatar_url} alt={userInfo.name} />
              </div>
            </div>
            <div className="col-lg-6 text_info">
              <p>
                <strong>Nome: </strong>
                {userInfo.name}
              </p>
              <p>
                <strong>username: </strong>
                {userInfo.login}
              </p>
              <p>
                <strong>Bio: </strong>
                {userInfo.bio}
              </p>
              <p>
                <strong>GitHub: </strong>
                <a href={userInfo.html_url}>{userInfo.html_url}</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper_buttons">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleSeachRepository("repos")}
        >
          Listar Repositórios
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => handleSeachRepository("starred")}
        >
          Listar Favoritos
        </button>
      </div>
    </div>
  );
};
