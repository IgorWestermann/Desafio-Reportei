/*
ja tenho as infos do insta, com essas infos -> montar um objeto que é o usuario = ao 
modelo que tenho no backend. 
quando der post em profiles 
(usando no lugar de titulo, conteudo- do video vai ser user no meu)
*/
import React, { useState, FormEvent } from 'react';
import api from '../../services/api';
import instagramApi from '../../services/InstagramApi';


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
    watchers_count: number //numeor de watchers
  }

const Dashboard: React.FC = () => {
  const [newUser, setNewUser] = useState('');
  const [userProfile, setUserProfile] = useState<Profile>({} as Profile);

  async function handleAddUserName(
    event: FormEvent<HTMLFormElement>
    ): Promise<void> {
    event.preventDefault();

    const response = await instagramApi.get<Profile>(`repos/${newUser}`);

    const userData = response.data;
    console.log(userData);
    
    setUserProfile(userData);

  }
  
  const getContent = async () => {
    try {
      const response = await fetch('http://localhost:3333/profile');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  } 
  
  const postContent = async () => {
    try {
      const response = await fetch('http://localhost:3333/profile', {
        method: 'POST',
          body: JSON.stringify(userProfile),
          headers: {'Content-Type': 'application/json'}
        });
            const responseEnv = await response.json();
            console.log(responseEnv)
          } catch (error) {
            console.log(error);
          }
        }
        console.log(getContent);
        
        return (
          <>
      <h1>Insira o nome do usuário</h1>
      <form onSubmit={handleAddUserName}>
        <input 
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Digite o perfil desejado..."
        />
        <button type="submit">Pesquisar</button>
      </form>

        <div>
          
          <button onClick={postContent}>Salvar</button>
          <div>
            <img width={128} src={userProfile.owner?.avatar_url} alt={userProfile.owner?.login} />
            <div>
              <p>Resultados obtidos de: {userProfile?.full_name}</p>
              <p>Nome do repositório: {userProfile?.name}</p>
              <p>Descrição: {userProfile?.description}</p>
              <p>Linguagem: {userProfile?.language}</p>
              <div>
                <p>Numero de estrelas: {userProfile?.stargazers_count}</p>
                <p>Numero de forks: {userProfile?.forks}</p>
                <p>Numero de watchers: {userProfile?.watchers_count}</p>
              </div>
              <p>Endereço do usurario: {userProfile?.owner?.html_url}</p>
              <p>Endereço do repositorio: {userProfile?.html_url}</p>
              <p>Link para clone: {userProfile?.clone_url}</p>
              <p>Data de criação: {userProfile?.created_at}</p>
            </div>
          </div>
        </div>

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
       
    </>
  );
};

export default Dashboard;