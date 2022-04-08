import {createContext, useState} from "react";

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

		// Obtener diferencia de años


		// Pos cada año anterior hay que restar el 3%

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
