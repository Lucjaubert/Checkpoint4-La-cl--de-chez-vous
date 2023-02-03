import React, { useState } from "react";
import { CreatePropertyForm } from "../../apis/propertyApi";

function CreateCard() {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [resume, setResume] = useState("");
  const [sellingPrice, setSellingPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [IdAgent, setIdAgent] = useState(1);
  const [photoUrl, setPhotoUrl] = useState("");
  const [confirmMessage, setConfirmMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProperty = {
      title_property: title,
      city,
      resume,
      selling_price_including_VAT: sellingPrice,
      description,
      postal_code: postalCode,
      real_estate_agent_id: IdAgent,
      photo_url: photoUrl,
    };

    try {
      const res = await CreatePropertyForm(newProperty);
      if (res.status === 200) {
        setConfirmMessage("Votre entreprise a bien été créée");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ville"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Résumé"
        value={resume}
        onChange={(e) => setResume(e.target.value)}
      />
      <input
        type="number"
        placeholder="Prix de vente"
        value={sellingPrice}
        onChange={(e) => setSellingPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Code postal"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
      />
      <input
        type="number"
        placeholder="Id Agent"
        value={IdAgent}
        onChange={(e) => setIdAgent(e.target.value)}
      />
      <input
        type="text"
        placeholder="photos du bien"
        value={photoUrl}
        onChange={(e) => setPhotoUrl(e.target.value)}
      />
      <div className="_footer">
        {confirmMessage && <p style={{ color: "red" }}>{confirmMessage}</p>}
        <button type="submit" className="button_save_firm">
          SAUVEGARDER{" "}
        </button>
      </div>
    </form>
  );
}

export default CreateCard;
