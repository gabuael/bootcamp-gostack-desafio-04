import React from "react";
import Comentario from "./Comentario";

function FeedItem({ nome, data, post, comentarios, foto }) {
  return (
    <div className="feeditem">
      <div className="post">
        <div className="userinfo">
          <img src={foto} className="avatar" />
          <div className="info">
            <span className="nome">{nome}</span>
            <p className="data">{data}</p>
          </div>
        </div>
        <p className="postText">{post}</p>
      </div>
      {comentarios.map(comentario => (
        <Comentario {...comentario} key={comentario.id} />
      ))}
    </div>
  );
}

export default FeedItem;
