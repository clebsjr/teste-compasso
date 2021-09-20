import React from "react";
import './styles.scss';

export const CardRepository = ({ name, description, link, repoPublic }) => {
  return (
    <div className="card card-repos">
      <div className="card-body">
        <div className="card-repos-title">
          <a href={link}>
            <span>{name}</span>
          </a>
          <span>{repoPublic ? 'Privado' : 'Público'}</span>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};
