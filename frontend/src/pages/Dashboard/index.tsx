import React, { useState, FormEvent, useEffect } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { Form, Title, Container, Favorites, Main } from "./styles";
import { FiChevronRight } from "react-icons/fi";
import { FaHeart, FaSave } from "react-icons/fa";
import {
  GoEye,
  GoMarkGithub,
  GoRepo,
  GoRepoForked,
  GoStar,
} from "react-icons/go";

interface Profile {
  name: string; //nome do repo
  full_name: string; //nome do user+repo
  description: string; //descrição
  owner: {
    login: string; //nome do usuario
    avatar_url: string; //foto
    html_url: string; //endereço para o perfil do usuario
  };
  html_url: string; //endereço para o perfil do repositorio
  created_at: string; //data de criação
  clone_url: string; //link para clone
  stargazers_count: number; //numero de estrelas
  language: string; //linguagem do repo
  forks: number; //numero de forks
  watchers_count: number; //numeor de watchers
}

interface Favorite {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newUser, setNewUser] = useState("");
  const [newFavorite, setNewFavorite] = useState<Favorite[]>([]);
  const [userProfile, setUserProfile] = useState<Profile>({} as Profile);

  useEffect(() => {
    getContent();
  });

  async function handleAddUserName(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get<Profile>(`repos/${newUser}`);

    const userData = response.data;
    console.log(userData);

    setUserProfile(userData);
    setNewUser("");
  }

  const getContent = async () => {
    const res = await fetch("http://localhost:3333/profile");
    const data = await res.json();

    setNewFavorite(data);
  };

  const postContent = async () => {
    try {
      const response = await fetch("http://localhost:3333/profile", {
        method: "POST",
        body: JSON.stringify(userProfile),
        headers: { "Content-Type": "application/json" },
      });
      const responseEnv = await response.json();
      console.log(responseEnv);
    } catch (error) {
      console.log(error);
    }
  };

  const saveData = () => {
    postContent();

    console.log(newFavorite);
  };
  return (
    <>
      <Container>
        <div className="banner">
          <Title>Insira o nome do usuário</Title>
          <Form onSubmit={handleAddUserName}>
            <input
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
              placeholder="Usuário do Github/Respositório..."
              required
            />
            <button type="submit">Pesquisar</button>
          </Form>
          {userProfile.owner ? (
            <p>Resultados obtidos de: {userProfile?.full_name}</p>
          ) : (
            ""
          )}
        </div>
        <div className="wrapper-content">
          <aside className="sideBar">
            <Favorites className="sideBar-container">
              <div className="siderBar-title">
                <Title className="side-title">Favoritos</Title>
                <FaHeart />
              </div>
              {newFavorite.map((data) => (
                <Link key={data?.full_name} to={`/profile/${data.full_name}`}>
                  <img
                    width={64}
                    src={data.owner?.avatar_url}
                    alt={data.owner?.login}
                  />
                  <div>
                    <h2>{data.full_name}</h2>
                    <p>{data.description}</p>
                  </div>
                  <FiChevronRight />
                </Link>
              ))}
            </Favorites>
          </aside>
          <section className="main-content">
            {userProfile.owner ? (
              <>
                <div>
                  <div className="row">
                    <div className="column img-col">
                      <img
                        src={userProfile.owner?.avatar_url}
                        alt={userProfile.owner?.login}
                      />
                      <div className="content-icons">
                        <ul>
                          <li>
                            <div>
                              <strong>{userProfile?.stargazers_count}</strong>
                              <GoStar size={28} />
                            </div>
                          </li>
                          <li>
                            <div>
                              <strong>{userProfile?.forks}</strong>
                              <GoRepoForked size={28} />
                            </div>
                          </li>
                          <li>
                            <div>
                              <strong>{userProfile?.watchers_count}</strong>
                              <GoEye size={28} />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="column">
                      <Main>
                        <p>
                          <strong>Nome do repositório:</strong>
                          {userProfile?.name}
                        </p>
                        <div className="content">
                          <a href={userProfile?.owner?.html_url}>
                            <p>
                              <GoMarkGithub size={24} />
                              <strong>Perfil do Github</strong>
                            </p>
                          </a>
                          <a href={userProfile?.html_url}>
                            <p>
                              <GoRepo size={24} />
                              <strong>Repositório</strong>
                            </p>
                          </a>
                        </div>
                        <div>
                          <p>
                            <strong>Clone: </strong>
                            {userProfile?.clone_url}
                          </p>
                          <p>
                            <strong>Descrição:</strong>{" "}
                            {userProfile?.description
                              ? userProfile?.description
                              : "Não possui descrição"}
                          </p>
                          <p>
                            <strong>Linguagem:</strong> {userProfile?.language}
                          </p>
                          <p>
                            <strong>Data de criação: </strong>
                            {userProfile?.created_at}
                          </p>
                        </div>
                      </Main>
                    </div>
                    <div className="btn">
                      <button onClick={saveData}>
                        <FaSave size={24} />
                        <span>Salvar</span>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </section>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
