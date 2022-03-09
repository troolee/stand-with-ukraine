import * as React from "react";
import { Helmet } from "react-helmet"

import '../styles/main.scss';
import standWithUkraine from '../images/stand-with-ukraine.webp';
import ogImage from '../images/og-image.webp';

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <html lang="ru" />
        <meta charSet="utf-8" />
        <title>#StandWithUkraine</title>

        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="#StandWithUkraine" />
        <meta property="og:description" content="Россия начала полномасштабное вторжение в Украину. Применяет авиацию, наносит ракетные удары по жилым массивам Киева, Харькова, Мариуполя, Волновахи, Сум и других городов." />
        <meta property="og:url" content="https://StandWithUkraine.page" />
      </Helmet>

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
                  ПУТИН &mdash; врет! Российское телевидение &mdash; врет!
                </p>
                <p>
                  Россия НЕ проводит специальную операцию по спасению народа Украины. Российская Федерация начала полномасштабное вторжение в Украину.
                  Россия применяет авиацию, наносит ракетные удары по жилым массивам Киева, Харькова, Мариуполя, Волновахи, Сум и других городов.
                  Россия обстреливала Запорожскую атомную электростанцию.
                </p>
                <p>
                  Армия Российской Федерации убивает мирное население!
                </p>
                <p>
                  <iframe width="100%" height="500" src="https://www.youtube.com/embed/NZbggSYTLR4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </p>
                <p>
                  Русские убивают мирное население! Русские дети сейчас умирают на чужой земле! Попадают в плен!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">

          <div className="columns is-centered">
            <div className="column is-two-fifths">
              <div className="content">
                <h2 className="has-text-danger">
                  Горячая телефонная линия для родственников русских солдат и офицеров
                </h2>
                <p>
                  Если ваши близкие в последние месяцы отправились на учения и с ними нет связи, скорее всего они учавствуют в нападении на Украину.
                </p>
                <p>
                  С начала вторжения 24 февраля 2022 года украинскими войсками убито и ранено более 12,000 российских солдат и офицеров. Более 1,000 захвачено в плен.
                </p>
              </div>
            </div>
            <div className="column is-two-fifths">
              <div className="content">
                <p>
                  Минобороны Украины открыл горячую телефонную линию для матерей, родителей, жен, бабушек и дедушек русских солдат и офицеров,
                  которые пришли в Украину с оружием, но были взяты в плен или убиты.
                </p>
                <p>
                На горячей линии, которая называется “Вернись живым с Украины!” родственники русских военнослужащих смогут узнать о том,
                живы ли еще их родные, взяты ли в плен, есть ли ранения или решить вопрос о том, когда и как можно забрать тело погибшего родственника с территории Украины.
                </p>
              </div>
            </div>
          </div>

          <div className="columns is-centered pb-6">
            <div className="column is-four-fifths">
              <div className="content has-text-centered">
                <h1>
                  <span className="has-text-danger">&#xab;</span>
                  Вернись живым из Украины!
                  <span className="has-text-danger">&#xbb;</span>
                </h1>
                <div className="columns is-centered">
                  <div className="column has-text-centered is-narrow">
                    <span className="px-1" style={{whiteSpace: 'nowrap'}}>+380-89-420-1860</span>
                  </div>
                  <div className="column has-text-centered is-narrow">
                    <span className="px-1" style={{whiteSpace: 'nowrap'}}>+380-89-420-1861</span>
                  </div>
                  <div className="column has-text-centered is-narrow">
                    <span className="px-1" style={{whiteSpace: 'nowrap'}}>+380-89-420-1862</span>
                  </div>
                </div>

                <p>
                  “Если ваш родной человек у нас в плену, вы можете оставить для вашего мужа, сына краткую весть. Украина предоставит возможность забрать ваших родственников из плена на територии Украины”,
                  – Антон Геращенко, советник министра внутренних дел Украины.
                </p>
              </div>
            </div>
          </div>

          <div className="columns is-centered pb-6">
            <div className="column is-three-fifths has-text-centered">
              <div className="notification is-danger is-light px-6 pb-6 pt-5">
                <div className="content">
                  <h1 className="has-text-danger">Важно!</h1>
                  <p>
                    Военное руководство РФ отдало приказ скрывать потери живой силы, а также захоронять тела в братских могилах или уничтожать на месте
                    (<a href="https://russoldat.info/voennoe-rukovodstvo-rf-otdalo-prikaz/" target="_blank">документ</a>)
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
};

export default IndexPage;
