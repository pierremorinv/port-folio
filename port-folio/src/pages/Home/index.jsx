import React from "react";
import "./style.scss";
import pierreImg from "../../assets/pierre-photo.jpg";

const Home = () => {
  return (
    <main className="main-home">
      <h1> Page d'acceuil</h1>
      <div className="container-img">
        <img className="pierre-img" src={pierreImg} alt="pierre" />
      </div>
    </main>
  );
};

export default Home;
