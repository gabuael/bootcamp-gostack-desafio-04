import React from "react";

function Comentario({ foto, nome, conteudo }) {
  return (
    <div className="comentario">
      <img src={foto} className="avatar" />
      <div className="balao">
        <p className="conteudo">
          <span className="nome">{nome} </span>
          {conteudo}
        </p>
      </div>
    </div>
  );
}

export default Comentario;
