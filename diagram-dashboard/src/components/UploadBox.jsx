import { useDropzone } from "react-dropzone";

const UploadBox = ({ setImage }) => {

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setImage({
        file,
        preview: URL.createObjectURL(file)
      });
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": []
    },
    onDrop
  });

  return (
    <div
      {...getRootProps()}
      style={{
        border: "2px dashed #aaa",
        padding: "20px",
        textAlign: "center",
        cursor: "pointer",
        marginBottom: "20px"
      }}
    >
      <input {...getInputProps()} />
      <p>Drag & drop diagram or click to upload</p>
    </div>
  );
};

export default UploadBox;