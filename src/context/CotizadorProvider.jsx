import { createContext, useState } from "react";
import { obtenerDiferenciaYear } from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

	const [datos, setDatos] = useState({
		marca: "",
		year: "",
		plan: ""
	})

	const [error, setError] = useState("");
	
	const handleChangeDatos = (e) => {
		setDatos({
			...datos,
			[e.target.name] : e.target.value
		})
	}	

	const cotizarSeguro = () => {
		// Base para el calculo
		let resultado = 2000;

		// Obtener diferencia de años
		const diferencia = obtenerDiferenciaYear(datos.year);

		// Pos cada año anterior hay que restar el 3%
		resultado -= ((diferencia * 3) * resultado) / 100;
		console.log(resultado);

		// Americano incrementa costo 15%
		// Europeo incrementa costo 30%
		// Asiatico incrementa costo 5%


		// Si el plan es basico aumenta 20%
		// Si el plan es completo aumenta 50%

	}

	return (
		<CotizadorContext.Provider
			value={{
				datos,
				handleChangeDatos,
				error,
				setError,
				cotizarSeguro,
			}}
		>{children}</CotizadorContext.Provider>
	);
};

export {CotizadorProvider};

export default CotizadorContext;
