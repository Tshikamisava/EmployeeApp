 
import React from 'react'
import { Link } from 'react-router-dom'

function Sucess() {
  return (
    <>

        <h1> Employee deleted Sucessful!!!!</h1><br></br>
         <Link
          to={`/`}
          className="hover:bg-teal-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-4"
        >
          Back To Home
        </Link>
    </>
  )
}

export default Sucess;