import { useParams } from "react-router-dom";
import { useFetch } from "../data-layer/useFetch";
import { Navbar } from "../components/navbar";
import Artistinfo from "../components/artist-info";
import { ArtistResponse } from "../data-layer/artist-types";

export const Artist = () => {
  const { id } = useParams();
  const { data, isError, error, isLoading } = useFetch<ArtistResponse>(
    `https://mocky.viberate.com/api/v1/${id}`
  );

  if (isLoading) {
    return (
      <div className="container">
        <Navbar />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "calc(100vh - 64px)",
            color: "#6b7280",
          }}
        >
          Loading...
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container">
        <Navbar />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "calc(100vh - 64px)",
            color: "#ff0000",
          }}
        >
          Error: {error?.message}
        </div>
      </div>
    );
  }

  if (!data) return null;
  return (
    <div className="container">
      <Navbar />
      <Artistinfo artist={data.data} />
    </div>
  );
};
