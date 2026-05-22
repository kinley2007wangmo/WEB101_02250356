export default function LiveSection() {
  return (
    <div style={{ padding: 20, borderBottom: "1px solid #333" }}>
      <h2>Live Now</h2>

      <video
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        autoPlay
        controls
        width="300"
      />

      <p>Streaming demo video</p>
    </div>
  );
}