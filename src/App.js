function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "40px" }}>
      {/* Top Navigation */}
      <header style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
        <button style={{ background: "black", color: "white", padding: "8px 16px", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Login
        </button>
        <button style={{ background: "black", color: "white", padding: "8px 16px", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Sign Up
        </button>
      </header>

      {/* Title Section */}
      <main style={{ textAlign: "center", marginTop: "60px" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>MedShare</h1>
        <p style={{ marginTop: "10px", fontSize: "18px" }}>
          Share your data securely with your healthcare provider
        </p>

        {/* Grey Boxes */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            marginTop: "80px",
          }}
        >
          <button
            style={{
              backgroundColor: "#d3d3d3",
              width: "200px",
              height: "60px",
              border: "none",
              cursor: "pointer",
              fontSize: "11px",
              textTransform: "uppercase",
            }}
          >
            Share Information <br /> Anonymously
          </button>
          <div
            style={{
              backgroundColor: "#d3d3d3",
              width: "200px",
              height: "60px",
            }}
          ></div>
          <div
            style={{
              backgroundColor: "#d3d3d3",
              width: "200px",
              height: "60px",
            }}
          ></div>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          position: "absolute",
          bottom: "20px",
          right: "40px",
          fontSize: "12px",
          color: "gray",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <div
          style={{
            width: "20px",
            height: "20px",
            border: "2px solid gray",
            borderRadius: "50%",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              border: "2px solid gray",
              borderRadius: "50%",
              position: "absolute",
              top: "4px",
              left: "4px",
            }}
          ></div>
        </div>
        Powered by CONCORDIUM
      </footer>
    </div>
  );
}

export default App;
