import * as React from "react";

import '../styles/main.scss';
import standWithUkraine from '../images/stand-with-ukraine.png';

// markup
const IndexPage = () => {
  return (
    <>
      <section className="hero is-halfheight main-hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="content">
              <div className="columns is-centered">
                <div className="column is-four-fifths">
                  <p className="title">
                    <img src={standWithUkraine} alt="#StandWithUkraine" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-medium negarive-offset">
        <div className="content">
          <div className="columns is-centered">
            <div className="column is-two-thirds">
              <div className="box p-6 is-size-4 is-family-monospace">
                <p>
                  ПУТИН нам врет! Наше телевидение нам врет!
                </p>
                <p>
                  Мы НЕ проводим специальную операцию по спасению народа Украины. Мы начали полномасштабное вторжение в Украину.
                  Мы применяем авиацию, наносим ракетные удары по жилым массивам Киева, Харькова, Мариуполя, Волновахи и других городов.
                  Мы обстреливали Запорожскую атомную электростанцию.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="content has-text-centered">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatum vitae officiis porro dolor ab recusandae dolorem, pariatur delectus molestiae unde nulla quae voluptatibus quas repellendus maxime, sunt temporibus vel?
        </div>
      </footer>
    </>
  )
};

export default IndexPage;
