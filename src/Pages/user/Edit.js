import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
//import React, { Pages } from "react";

function Edit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState({ preview: '', data: '' })

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`).then((res) => {
      setName(res.data.name);
      setEmail(res.data.email);
      setPhone(res.data.phone);
      setPosition(res.data.position);
      setImage(res.data.image);
     
    });
  }, []);

  const navigate = useNavigate();

  const item = {
    name: name,
    email: email,
    phone: phone,
    position: position,
    image: image.data,

  };

  function Update(e) {
    e.preventDefault();
    axios.put(`http://localhost:3000/users/${id}`, item).then(navigate("/"));
  }

  const handleFileChange = (e) => {
    const img = {
        preview: URL.createObjectURL(e.target.files[0]),
        data: URL.createObjectURL(e.target.files[0]),
    }
    setImage(img)
}
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">User Details</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your name"
        />
        
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="email"
          placeholder="Enter your email"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="phone"
          placeholder="Enter your phone no."
        />
        <input
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="position"
          placeholder="Enter your position."
        />
        <input
          
          onChange={handleFileChange}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="file"
          placeholder="upload image."
        />
        
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={Update}
        >
          UPDATE USER
        </button>
      </form>
    </div>
  );
}

export default Edit;
