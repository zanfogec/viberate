import "../styles/styles.css";
import { MostPopularGraph } from "./most-popular-graph";
import { ArtistData } from "../data-layer/artist-types";

export default function Artistinfo({ artist }: { artist: ArtistData }) {
  return (
    <>
      <main className="main">
        <section className="section section-artist-detail trending claimed">
          <div className="page">
            <div className="col visual">
              <figure
                style={{
                  backgroundImage: `url(${artist?.image})`,
                }}
              >
                <figcaption>
                  <button className="btn btn-claim-music-id">
                    Claim music_id
                  </button>
                </figcaption>
              </figure>
            </div>

            <div className="col-wrapper">
              <div className="col info">
                <div className="col-content">
                  <div className="info-wrapper">
                    <div className="title-wrapper">
                      <button
                        disabled={!artist?.booking_available}
                        className="btn btn-solid border btn-booking-request"
                      >
                        Booking Request
                      </button>
                      <h1 className="title">
                        {artist?.name}
                        <div className="tooltip-wrapper">
                          {artist?.claimed === true && (
                            <span className="profile-claimed">
                              Profile claimed
                            </span>
                          )}
                          <div className="tooltip">
                            <h3>Vote for subgenres</h3>
                            <p>
                              Don't agree with the subgenres? Add the ones you
                              think are missing or vote for existing to get
                              yours on top!
                            </p>
                            <div className="stats-sheet">
                              <div className="row">
                                <h5>Alternative rock</h5>
                                <div className="graph-line">
                                  <span
                                    className="line"
                                    style={{
                                      width: "47%",
                                    }}
                                  >
                                    47%
                                  </span>
                                </div>
                              </div>
                              <div className="row">
                                <h5>Alternative metal</h5>
                                <div className="graph-line">
                                  <span
                                    className="line"
                                    style={{
                                      width: "23%",
                                    }}
                                  >
                                    23%
                                  </span>
                                </div>
                              </div>
                              <div className="row">
                                <h5>Progressive rock</h5>
                                <div className="graph-line">
                                  <span
                                    className="line"
                                    style={{
                                      width: "15%",
                                    }}
                                  >
                                    15%
                                  </span>
                                </div>
                              </div>
                            </div>
                            <p>
                              <button className="btn btn-shadow">
                                Vote now
                              </button>
                            </p>
                          </div>
                        </div>
                        {artist?.trending === true && (
                          <span className="trending-icon">Trending</span>
                        )}
                      </h1>
                    </div>

                    <div className="row">
                      <button className="btn btn-save long">Follow</button>
                      <button className="btn btn-share">
                        Share
                        <span>Link copied to clipboard</span>
                      </button>
                    </div>

                    <div className="row">
                      <label>Origin</label>
                      <a className="btn btn-filter-tag">
                        {artist?.country.name}
                      </a>
                    </div>

                    <div className="row">
                      <label>Genre</label>
                      <span className="btn btn-filter-tag">
                        {artist?.genre.name}
                      </span>
                    </div>

                    <div className="row">
                      <label>Subgenres</label>
                      {artist?.subgenres.map((genre) => (
                        <span key={genre.id} className="btn btn-filter-tag">
                          {genre.name}
                        </span>
                      ))}
                      <div className="tooltip-wrapper">
                        <button className="btn btn-add">Add subgenre</button>
                        <div className="tooltip">
                          <h3>Vote for subgenres</h3>
                          <p>
                            Don't agree with the subgenres? Add the ones you
                            think are missing or vote for existing to get yours
                            on top!
                          </p>
                          <div className="stats-sheet">
                            <div className="row">
                              <h5>Alternative rock</h5>
                              <div className="graph-line">
                                <span
                                  className="line"
                                  style={{
                                    width: "47%",
                                  }}
                                >
                                  47%
                                </span>
                              </div>
                            </div>
                            <div className="row">
                              <h5>Alternative metal</h5>
                              <div className="graph-line">
                                <span
                                  className="line"
                                  style={{
                                    width: "23%",
                                  }}
                                >
                                  23%
                                </span>
                              </div>
                            </div>
                            <div className="row">
                              <h5>Progressive rock</h5>
                              <div className="graph-line">
                                <span
                                  className="line"
                                  style={{
                                    width: "15%",
                                  }}
                                >
                                  15%
                                </span>
                              </div>
                            </div>
                          </div>
                          <p>
                            <button className="btn btn-shadow">Vote now</button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="footer-detail">
                    <ul className="social-list">
                      {artist?.social_links.map((social) => (
                        <li key={social.link}>
                          <a
                            href={social.link}
                            className={`btn social-icon ${social.channel}`}
                          >
                            {social.channel}
                          </a>
                        </li>
                      ))}
                    </ul>

                    <div className="tooltip-wrapper">
                      <button className="btn btn-add">Add links</button>
                      <div className="tooltip">
                        <h3>Got more info?</h3>
                        <p>
                          Add Place's links so everyone can see their social
                          media highlights.
                        </p>
                        <p>
                          <button className="btn btn-shadow">Add links</button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col stats">
                <div className="col-content">
                  <div className="stats-sheet">
                    <label>Most popular in</label>
                  </div>
                </div>
                <MostPopularGraph data={artist?.most_popular_in} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
