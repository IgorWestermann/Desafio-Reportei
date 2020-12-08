import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import api from "../../services/api";
import { Details, Header, Main, Body } from "./styles";
import { FiChevronLeft } from "react-icons/fi";
import {
  GoEye,
  GoMarkGithub,
  GoRepo,
  GoRepoForked,
  GoStar,
} from "react-icons/go";

interface Params {
  profile: string;
}
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

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Profile | null>(null);
  const match = useRouteMatch<Params>();
  useEffect(() => {
    api.get(`/repos/${match.params.profile}`).then((response) => {
      setRepository(response.data);
    });
  }, [match.params.profile]);

  return (
    <>
      <Body>
        <Header>
          <Link to="/">
            <FiChevronLeft size={16} />
            Back
          </Link>
        </Header>
        <Details>
          <header>
            <img
              src={repository?.owner.avatar_url}
              alt={repository?.owner.login}
            />
            <div>
              <h2>{repository?.full_name}</h2>
              <p>From: {repository?.owner.login}</p>
              <ul>
                <li>
                  <div>
                    <strong>{repository?.stargazers_count}</strong>
                    <GoStar size={32} />
                  </div>
                </li>
                <li>
                  <div>
                    <strong>{repository?.forks}</strong>
                    <GoRepoForked size={32} />
                  </div>
                </li>
                <li>
                  <div>
                    <strong>{repository?.watchers_count}</strong>
                    <GoEye size={32} />
                  </div>
                </li>
              </ul>
            </div>
          </header>
        </Details>
        <Main>
          <div className="content">
            <a href={repository?.owner?.html_url}>
              <p>
                <GoMarkGithub size={24} />
                <strong>Perfil do Github</strong>
              </p>
            </a>
            <a href={repository?.html_url}>
              <p>
                <GoRepo size={24} />
                <strong>Repositório</strong>
              </p>
            </a>
          </div>
          <div>
            <p>
              <strong>Clone: </strong>
              {repository?.clone_url}
            </p>
            <p>
              <strong>Descrição:</strong> {repository?.description ? (repository?.description) : ("Não possui descrição")} 
            </p>
            <p>
              <strong>Linguagem:</strong> {repository?.language}
            </p>
            <p>
              <strong>Data de criação: </strong>
              {repository?.created_at}
            </p>
          </div>
        </Main>
      </Body>
    </>
  );
};

export default Repository;
