import React from "react";
import "./team.css";
import Card from "react-bootstrap/Card";
import photo_alexandre from "./images/photo_alexandre.png";
import photo_flavia from "./images/photo_flavia.png";
import photo_geiras from "./images/photo_geiras.png";
import photo_goncalo from "./images/photo_goncalo.png";
import photo_helena from "./images/photo_helena.png";
import photo_maria from "./images/photo_maria.png";
import photo_marina from "./images/photo_marina.png";
import photo_martinho from "./images/photo_martinho.png";

export default function Team() {
  return (
    <div className="team">
      <div className="container">
        {" "}
        <p className="team-p">EQUIPA</p>
        <h2>A tua equipa</h2>
        <div className="row">
          <div className="col-lg-4">
            <Card>
              <img
                src={photo_alexandre}
                className="photo-team"
                alt="Alexandre Mendes"
              ></img>
              <p className="person-title">Alexandre Mendes</p>
              <p className="profile-description">
                Movido pela curiosidade por projetos de empreendedorismo e
                transformação digital, podemos sempre contar com o seu
                comentário pertinente sobre programas de formação profissional
                para a Economia Digital e programas de re-skilling, de forma a
                trazer a magia necessária para o projeto.
              </p>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card>
              <img
                src={photo_flavia}
                className="photo-team"
                alt="Flávia Costa"
              ></img>
              <p className="person-title">Flávia Costa</p>
              <p className="profile-description">
                Com a boa disposição e prontidão em ajudar no que é preciso,
                construiu uma carreira através de diferentes profissões para
                garantir que se adaptava às necessidades. Contamos com ela para
                dar feedback construtivo e de forma cuidadosa dentro da equipa
                de mentoria.
              </p>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card>
              <img src={photo_geiras} className="photo-team" alt="Geiras"></img>
              <p className="person-title">Geiras</p>
              <p className="profile-description">
                Dar-lhe algo esteticamente inacabado, é como dar-lhe um
                brinquedo novo para brincar: torna-se o seu desafio mais
                apetitoso de resolver. Ajuda-nos a tornar qualquer experiência
                mais amigável, bonita e fácil.
              </p>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <Card>
              <img
                src={photo_goncalo}
                className="photo-team"
                alt="Gonçalo Sequeira"
              ></img>
              <p className="person-title">Gonçalo Sequeira</p>
              <p className="profile-description">
                Com uma boa dose de destreza, carisma e vontade em ajudar,
                conquistou-nos pela iniciativa de fazer a diferença com a
                experiência profissional que tem. A sua ajuda nas dinâmicas de
                partilha de conhecimento e experiência de projeto será
                fundamental para as sessões serem de pessoas para pessoas.
              </p>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card>
              <img
                src={photo_helena}
                className="photo-team"
                alt="Helena Muniz"
              ></img>
              <p className="person-title">Helena Muniz</p>
              <p className="profile-description">
                Inspirada pelas pessoas que a rodeiam, está sempre pronta para
                simplificar os desafios diários da equipa. Aprender através de
                uma ação de mudança, dá-lhe a motivação certa para questionar a
                sua realidade e o mundo e torná-los um lugar melhor para todos.
              </p>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card>
              <img
                src={photo_maria}
                className="photo-team"
                alt="Mariana João Ribeiro"
              ></img>
              <p className="person-title">Maria João Ribeiro</p>
              <p className="profile-description">
                Apaixonada por pessoas e pela área de psicologia, ela
                garante-nos a melhor disponibilidade para ajudar a mudar o
                Mundo. Com a sua vasta experiência em recrutamento, espera
                sempre contribuir positivamente para o desenvolvimento de
                carreira das pessoas ao seu redor.
              </p>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <Card>
              <img
                src={photo_marina}
                className="photo-team"
                alt="Marina Costa"
              ></img>
              <p className="person-title">Marina Costa</p>
              <p className="profile-description">
                O estudo sobre psicologia continua a ser a motivação na sua
                rotina diária, mas é a área de recrutamento que a mantém atenta
                ao mercado tecnológico e digital. A nossa equipa de recrutadores
                conta com a sua ajuda para dinamizar o programa de mentoria.
              </p>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card>
              <img
                src={photo_martinho}
                className="photo-team"
                alt="Martinho Aragão"
              ></img>
              <p className="person-title">Martinho Aragão</p>
              <p className="profile-description">
                Como qualquer bom gestor de produto, a proatividade é a
                competência mais inerente ao seu papel na equipa. Com um toque
                de profissionalismo e brincadeira, garante o alinhamento de
                todos às necessidades do projeto.
              </p>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card>
              <img
                src={photo_alexandre}
                className="photo-team"
                alt="Alexandre Mendes"
              ></img>
              <p className="person-title">Alexandre Mendes</p>
              <p className="profile-description">
                Movido pela curiosidade por projetos de empreendedorismo e
                transformação digital, podemos sempre contar com o seu
                comentário pertinente sobre programas de formação profissional
                para a Economia Digital e programas de re-skilling, de forma a
                trazer a magia necessária para o projeto.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
