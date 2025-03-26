import { Link } from "react-router-dom";

import { useFetch } from "../data-layer/useFetch";
import { Artists } from "../data-layer/artists-types";
export function Navbar() {
  const { data, isError, error, isLoading } = useFetch<Artists>(
    "https://mocky.viberate.com/api/v1/navbar"
  );

  return (
    <header className="header">
      <div className="page">
        <a className="logo" href="/" data-discover="true">
          <img src="/logo-v.svg" alt="Viberate" />
          Viberate
        </a>
        <nav className="navigation-primary">
          <ul className="menu-sys">
            <li>
              <button className="btn btn-menu search">Search</button>
            </li>
            <li>
              <button className="btn btn-menu more">More</button>
            </li>
          </ul>
          <ul className="menu">
            {isLoading ? (
              <li>Loading...</li>
            ) : isError ? (
              <li>Error: {error?.message}</li>
            ) : (
              data?.map((artist) => (
                <li key={artist.artist_uuid}>
                  <Link to={`/${artist.artist_uuid}`}>
                    {artist.artist_name}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
