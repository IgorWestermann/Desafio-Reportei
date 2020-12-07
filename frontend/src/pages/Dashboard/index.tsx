import { error, profile } from "console";
import React, { useState, FormEvent, useEffect } from "react";
import api from "../../services/api";
import instagramApi from "../../services/InstagramApi";
import { Form, Title, Container } from "./styles";
// import api from "../../services/api";

//interface para API do instagram

// interface Profile {
// graphql: {
//   user: {
//     biography: string, //biografia
//     external_url: string, //link externo
//     edge_followed_by: { //seguidores
//       count: number
//     },
//     edge_follow: { //Seguindo
//       count: number
//     },
//     full_name: string, //nome completo
//     id: string, //id
//     business_category_name: string, //tipo de conta
//     is_private: boolean, //conta privada?
//     is_verified: boolean, //conta verificada?
//     edge_mutual_followed_by: { //seguidores em comum
//       count: number,
//     },
//     profile_pic_url: string, //foto de perfil
//     username: string, //nome do usuario
//     edge_owner_to_timeline_media: { //publicações
//       count: number,
//     },
//   },
// },
// }

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


  // useEffect(() => {
    // api
    //   .get("/profile")
    //   .then((response) => {
    //     const profiles = response.data;
    //     setNewFavorite(profiles);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  // }, []);

  async function handleAddUserName(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    const response = await instagramApi.get<Profile>(`repos/${newUser}`);

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

  // async function handleGetData(): Promise<void> {
  //   const getData = await api.get('/profile');
  //   const repo = getData.data;
  //   setNewFavorite([...newFavorite, repo]);
  // }

  const saveData = () => {
    postContent();

    console.log(newFavorite);
    
    getContent();
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
              placeholder="Digite o perfil desejado..."
            />
            <button type="submit">Pesquisar</button>
          </Form>
          <p>Resultados obtidos de: {userProfile?.full_name}</p>
        </div>
        <div className="wrapper-content">
          <aside className="sideBar">
            <div className="sideBar-container">
              <div>
                <div>
                  <Title style={{ fontSize: "16px" }}>Favoritos</Title>
                  {newFavorite.map((data) => (
                    <a key={data?.full_name} href="www.google.com.br">
                      <img
                        width={64}
                        src={data.owner?.avatar_url}
                        alt={data.owner?.login}
                      />
                      <div>
                        <h2>{data.full_name}</h2>
                        <p>{data.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
          <section className="main-content">
            <div>
              <div className="row">
                <div className="column">
                  <img
                    src={userProfile.owner?.avatar_url}
                    alt={userProfile.owner?.login}
                  />
                </div>

                <div className="column">
                  <p>
                    <strong>Nome do repositório:</strong> {userProfile?.name}
                  </p>
                  <p>
                    <strong>Descrição:</strong> {userProfile?.description}
                  </p>
                  <p>
                    <strong>Linguagem:</strong> {userProfile?.language}
                  </p>
                  <hr />
                  <div className="content">
                    <a href={userProfile?.owner?.html_url}>
                      <p>
                        <strong>Perfil do Github</strong>
                      </p>
                    </a>
                    <a href={userProfile?.html_url}>
                      <p>
                        <strong>Repositório</strong>
                      </p>
                    </a>
                    <p>
                      <strong>Clone: </strong>
                      {userProfile?.clone_url}
                    </p>
                    <p>
                      <strong>Data de criação: </strong>
                      {userProfile?.created_at}
                    </p>
                  </div>
                </div>

                <div className="column icons">
                  <p>stars: {userProfile?.stargazers_count}</p>
                  <p>forks: {userProfile?.forks}</p>
                  <p>watcs: {userProfile?.watchers_count}</p>
                </div>
              </div>
            </div>
            <div className="saveButton">
              <button onClick={saveData}>Salvar</button>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;

<>
  {/* <div>

              //infos da api do instragram

              <a key={userProfile.graphql?.user?.full_name} href="teste">
                <img src={userProfile.graphql?.user?.profile_pic_url} alt={userProfile.graphql?.user?.username} />
                <p>name: {userProfile.graphql?.user?.full_name}</p>
              </a>
            </div>
                <p>username: {userProfile?.graphql?.user?.username}</p>
                <p>biography: {userProfile?.graphql?.user?.biography}</p>
                <p>external_url: {userProfile?.graphql?.user?.external_url}</p>
                <p>edge_owner_to_timeline_media: {userProfile?.graphql?.user?.edge_owner_to_timeline_media.count}</p>
                <p>edge_followed_by: {userProfile?.graphql?.user?.edge_followed_by.count}</p>
                <p>edge_follow: {userProfile?.graphql?.user?.edge_follow.count}</p>
                <p>edge_mutual_followed_by: {userProfile?.graphql?.user?.edge_mutual_followed_by.count}</p>
                <p>business_category_name: {userProfile?.graphql?.user?.business_category_name}</p>
                <p>is_private: {userProfile?.graphql?.user?.is_private}</p>
                <p>is_verified: {userProfile?.graphql?.user?.is_verified}</p>
                <p>id: {userProfile?.graphql?.user?.id}</p>

              <div>
                <a href="teste"> </a>
              </div> */}
</>;
