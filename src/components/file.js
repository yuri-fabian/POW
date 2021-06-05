import React, { useEffect, usestate } from "react";
import firebase from "firebase";

function FIle() {
  const [files, setFiles] = usestate([]);
  // const getSampleImage = async () => {
  //   const imageRefs = await firebase.storage().ref().child("images/").listAll();
  //   const urls = await Promise.all(
  //     imageRefs.items.map((ref) => {
  //       console.log(ref);
  //     })
  //   );
  //   setstate(urls);
  //   console.log(state);
  // };

  useEffect(() => {
    const fetchImages = async () => {
      let result = await firebase.storage().ref().child("images/").listAll();
      let urlPromises = result.items.map((imageRef) =>
        imageRef.getDownloadURL()
      );
      return Promise.all(urlPromises);
    };

    const loadImages = async () => {
      const urls = await fetchImages();
      console.log(urls);
      setFiles(urls);
    };
    loadImages();
  }, []);

  return (
    <div
      style={{
        flexDirection: "column",
      }}
    >
      {files.map((image, i) => (
        <img
          src={image}
          style={{
            width: 400,
            height: 400,
          }}
        />
      ))}
    </div>
  );
}

export default FIle;
