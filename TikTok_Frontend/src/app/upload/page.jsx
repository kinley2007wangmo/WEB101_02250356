"use client";
import { useState } from "react";
import API from "../../lib/api-config";

export default function Upload() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("video", file);

    await API.post("/videos/upload", formData);
    alert("Uploaded!");
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}