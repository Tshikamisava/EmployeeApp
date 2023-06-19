import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
//import React, { Pages } from "react";

function Users() {
  const { id } = useParams();

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`).then((res) => {
      setUser(res.data);
    });
  }, []);

  console.log(user);
  return (
    <>
      <div className="h-full w-full flex flex-col mt-32 justify-center items-center">
        <Link
          to={`/`}
          className="hover:bg-teal-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-4"
        >
          Back To Home
        </Link>
        {user && (
          <div className="w-[700px] h-[200] px-6 py-4 flex shadow-xl rounded-xl justify-center items-center bg-teal-600 mt-16 border-teal-800 border-2">
            <div className="w-5/12 flex flex-col space-y-4">
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Name and Surname
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Email
              </h2><br></br>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Phone
              </h2><br></br>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Position
              </h2><br></br>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Image
              </h2><br></br>
            </div>
            <div className="w-7/12 flex flex-col space-y-4  ">
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.name}
              </h2><br></br>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.surname}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.email}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.phone}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.position}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.image.data}
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Users;
