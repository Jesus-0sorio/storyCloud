import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CommonInput } from "../Components";
import { register } from "../Store/Slices/Auth/thunks";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
  });

  const [terms, setTerms] = useState(false);

  const handleSubmit = async (e) => {
	e.preventDefault();

	if (!terms) return Swal.fire("Error", "Debes aceptar los terminos y condiciones si quieres crear una cuenta", "error");

    if (!user.email || !user.name || !user.username || !user.password)
      return Swal.fire("Error", "Todos los campos son obligatorios", "error");

    const res = await dispatch(register(user));

    if (res) {
      return Swal.fire("Error", res, "error");
    }

    navigate("/login");
	Swal.fire("Exito", "Usuario registrado correctamente", "success");

	console.log(terms);
	console.log(user);
  };
  return (
    <div className="h-screen w-screen">
      <div className="bg-signup flex justify-center h-full ">
        <div className="bg-white shadow-lg my-auto w-auto xl:w-auto p-10 sm:p-16 border rounded-lg">
          <form action="" className="grid justify-center gap-6 h-3/5">
            <h1 className="font-medium text-4xl text-center mb-4">
              StoryCloud
            </h1>
            <CommonInput onChange={(e) => setUser({...user, email:  e.target.value})} type="text" text="Correo electronico" />
            <CommonInput onChange={(e) => setUser({...user, name:  e.target.value})} type="text" text="Nombre completo" />
            <CommonInput onChange={(e) => setUser({...user, username:  e.target.value})} type="text" text="Nombre de usuario" />
            <CommonInput onChange={(e) => setUser({...user, password:  e.target.value})} type="password" text="Contraseña" />
            <div className="text-sm flex justify-center">
              <input onChange={(e) => setTerms(!terms)} type="checkbox" />{" "}
              <span className="ml-2">
                Aceptar{" "}
                <Link className="text-blue-500  underline hover:text-blue-800">
                  Terminos y Condiciones
                </Link>
              </span>
            </div>
            <button
              onClick={handleSubmit}
              className="h-12 w-64 md:h-14 md:w-72 bg-[#965100] text-white rounded-md hover:bg-[#7a460b]"
            >
              Registrarte
            </button>
          </form>
          <p className="text-center mt-5">
            ¿Tienes una cuenta?
            <Link
              className="underline text-blue-500 ml-1 hover:text-blue-800"
              to="/login"
            >
              Iniciar sesion
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
