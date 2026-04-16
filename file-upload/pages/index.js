import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const { register, handleSubmit } = useForm();
  const [progress, setProgress] = useState(0);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);

    try {
      await axios.post("/api/upload", formData, {
        onUploadProgress: (progressEvent) => {
          const percent = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percent);
        },
      });
      alert("File uploaded successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>File Upload</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="file"
          {...register("file", {
            required: true,
            validate: {
              lessThan5MB: (files) =>
                files[0]?.size < 5000000 || "Max 5MB",
            },
          })}
        />
        <br /><br />
        <button type="submit">Upload</button>
      </form>

      <p>Upload Progress: {progress}%</p>
    </div>
  );
}