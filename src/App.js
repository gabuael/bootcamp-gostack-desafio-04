import React, { Component } from "react";
import Header from "./components/Header";
import Feed from "./components/Feed";
import "./App.css";
import foto1 from "./assets/perfil2.png";
import foto2 from "./assets/perfil3.png";

class App extends Component {
  state = {
    feed: [
      {
        id: "1",
        foto: foto1,
        nome: "Júlio Alcantara",
        data: "04 Jun 2019",
        post: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comentarios: [
          {
            id: "1",
            nome: "Diego Fernandes",
            foto: foto2,
            conteudo:
              "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: "2",
        foto: foto2,
        nome: "José Pedro",
        data: "05 Jun 2019",
        post: "Fala galera, vocês estão bem ?",
        comentarios: [
          {
            id: "1",
            nome: "Diego Fernandes",
            foto: foto1,
            conteudo: "To bom de mais moço"
          },
          {
            id: "2",
            nome: "Gabriel Lisboa",
            foto: foto1,
            conteudo: "Eu não to bem não"
          }
        ]
      },
      {
        id: "2",
        foto: foto2,
        nome: "José Pedro",
        data: "05 Jun 2019",
        post: "Fala galera, vocês estão bem ?",
        comentarios: [
          {
            id: "1",
            nome: "Diego Fernandes",
            foto: foto1,
            conteudo: "To bom de mais moço"
          },
          {
            id: "2",
            nome: "Gabriel Lisboa",
            foto: foto1,
            conteudo: "Eu não to bem não"
          }
        ]
      }
    ]
  };
  render() {
    return (
      <>
        <Header />
        <Feed feeditems={this.state.feed} />
      </>
    );
  }
}

export default App;
