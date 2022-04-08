import React from "react";
import {MARCAS, PLANES} from "../constants/index";
import useCotizador from "../hooks/useCotizador";

const Resultado = () => {
	const {resultado, datos} = useCotizador();
	const {marca, year, plan} = datos;

  const [nombreMarca] = MARCAS.filter((m) => m.id === Number(marca));
  
  const [nombrePlan] = PLANES.filter((p) => p.id === Number(plan));

	if (resultado === 0) return null;
	return (
		<div className=" bg-slate-100 text-center mt-5 p-5 shadow">
			<h2 className=" text-gray-600 text-3xl font-black">Resumen</h2>
			<p className=" my-2">
				<span className=" font-bold">Marca: </span>
				{nombreMarca.nombre}
      </p>
      <p className=" my-2">
				<span className=" font-bold">Plan: </span>
				{nombrePlan.nombre}
      </p>
      <p className=" my-2">
				<span className=" font-bold">Año del Auto: </span>
				{year}
      </p>
      <p className=" my-2 text-2xl">
				<span className=" font-bold">Total Cotizacion: </span>
				{resultado}
			</p>
		</div>
	);
};

export default Resultado;
