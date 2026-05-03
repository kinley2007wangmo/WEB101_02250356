import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function Home() {
  const { register, handleSubmit, setValue } = useForm();
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState("");

  // drag & drop (ADDED ONLY)
  const onDrop = useCallback((acceptedFiles) => {
    setValue("file", acceptedFiles);
    setFileName(acceptedFiles[0]?.name || "");
  }, [setValue]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

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
      setProgress(0);
      setFileName("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>File Upload</h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* DROP ZONE ADDED HERE */}
          <div
            {...getRootProps()}
            style={{
              ...styles.dropzone,
              borderColor: isDragActive ? "#4f46e5" : "#ccc",
              background: isDragActive ? "#eef2ff" : "#fff",
            }}
          >
            <input
              {...getInputProps()}
              {...register("file", {
                required: true,
                validate: {
                  lessThan5MB: (files) =>
                    files[0]?.size < 5000000 || "Max 5MB",
                },
              })}
            />

            {isDragActive ? (
              <p>Drop file here...</p>
            ) : (
              <p>Drag & drop OR click to choose file</p>
            )}

            {fileName && <p>📄 {fileName}</p>}
          </div>

          {/* YOUR ORIGINAL FILE INPUT (KEPT) */}
          <input
            type="file"
            {...register("file")}
            style={{ marginTop: "10px" }}
          />

          <br /><br />

          <button type="submit" style={styles.button}>
            Upload
          </button>
        </form>

        {/* YOUR PROGRESS (KEPT) */}
        <p>Upload Progress: {progress}%</p>

        {/* SIMPLE PROGRESS BAR (just UI improvement) */}
        <div style={styles.bar}>
          <div style={{ ...styles.fill, width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    width: "400px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    background: "white",
  },
  dropzone: {
    border: "2px dashed #ccc",
    padding: "20px",
    borderRadius: "10px",
    cursor: "pointer",
    marginBottom: "10px",
    textAlign: "center",
  },
  button: {
    padding: "10px 15px",
    background: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  bar: {
    width: "100%",
    height: "8px",
    background: "#e5e7eb",
    marginTop: "10px",
    borderRadius: "5px",
  },
  fill: {
    height: "100%",
    background: "#4f46e5",
    transition: "0.3s",
  },
};