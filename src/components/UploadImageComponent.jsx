import React, { useState } from 'react';
import { uploadImage, downloadImage } from '../utils/eventService';

const UploadImageComponent = () => {
  const [file, setFile] = useState();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [imageId, setImageId] = useState(null);
  const [src, setSrc] = useState(null);

  const handleSubmit = async (event) => {
    console.log("handleSubmit", event)
    event.preventDefault();
    const { data } = await uploadImage(file);
    if (!data.success) {
      setError(data.message);
    } else {
      setImageId(data?.data?._id);
      setSuccess(true);
      setError(null);
    }
  };

  function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }

  const getImage = async () => {
    const { data } = await downloadImage(imageId);
    const img = await data.arrayBuffer().then((buffer) => {
      const base64Flag = 'data:image/jpeg;base64,';
      const imageStr = arrayBufferToBase64(buffer);
      return base64Flag + imageStr;
    });
    // const imgUrl = `${process.env.BASE_URL}/${data?.data?.imagePath}`;
    setSrc(img);
  };

  return (
    <>
      {src && <img alt="my" src={src} />}
      {success && (
        <p>
          Bilde opplastet med{' '}
          <button type="button" onClick={getImage}>
            {imageId}
          </button>
        </p>
      )}
      {error && <p>Noe gikk galt med opplastingen</p>}
      <form encType="multipart/form-data">
        <label htmlFor="image">Last opp bilde</label>
        <input
          type="file"
          id="image"
          name="image"
          accept=".jpg"
          onChange={(event) => {
            const imageFile = event.target.files[0];
            setFile(imageFile);
          }}
        />
        <button type="submit" onClick={handleSubmit}>Lagre</button>
      </form>
    </>
  );
};

export default UploadImageComponent;