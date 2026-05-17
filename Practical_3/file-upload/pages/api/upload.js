import { IncomingForm } from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  const form = new IncomingForm();

  const uploadDir = path.join(process.cwd(), "uploads");

  // Ensure uploads folder exists
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Upload error" });
    }

    const file = files.file;
    const uploadedFile = Array.isArray(file) ? file[0] : file;

    if (!uploadedFile) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const oldPath = uploadedFile.filepath;

    // Prevent overwriting files
    const uniqueName = Date.now() + "-" + uploadedFile.originalFilename;
    const newPath = path.join(uploadDir, uniqueName);

    fs.copyFile(oldPath, newPath, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "File saving error" });
      }

      return res.status(200).json({
        message: "File uploaded successfully",
        fileName: uniqueName,
      });
    });
  });
}