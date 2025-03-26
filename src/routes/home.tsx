import { Navbar } from "../components/navbar";

export function Home() {
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
        Please select an artist from the navigation above
      </div>
    </div>
  );
}
