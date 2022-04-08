import { createContext, useState } from "react";
import { obtenerDiferenciaYear, calcularMarca, calculaPlan, formatearDinero } from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

	const [datos, setDatos] = useState({
		marca: "",
		year: "",
		plan: ""
	})

	const [error, setError] = useState("");
	const [resultado, setResultado] = useState(0);
	const [cargando, setCargando] = useState(false);
	
	const handleChangeDatos = (e) => {
		setDatos({
			...datos,
			[e.target.name] : e.target.value
		})
	}	

	const cotizarSeguro = () => {
		//* Base para el calculo
		let resultado = 2000;

		//* Obtener diferencia de años
		const diferencia = obtenerDiferenciaYear(datos.year);

		//* Pos cada año anterior hay que restar el 3%
		resultado -= ((diferencia * 3) * resultado) / 100;
		//* console.log(resultado);

		//* Europeo incrementa costo 30%
		//* Americano incrementa costo 15%
		//* Asiatico incrementa costo 5%
		resultado *= calcularMarca(datos.marca)
		//* console.log(resultado);	


		//* Si el plan es basico aumenta 20%
		//* Si el plan es completo aumenta 50%
		resultado *= calculaPlan(datos.plan)
		//* console.log(resultado);

		//* Mostrar el resultado en Formato de Moneda cons dos decimales
		resultado = formatearDinero(resultado);
		//* console.log(resultado);

		setCargando(true);

		setTimeout(() => {
			setResultado(resultado);
			setCargando(false);
		}, 3000)

	}

	return (
		<CotizadorContext.Provider
			value={{
				datos,
				handleChangeDatos,
				error,
				setError,
				cotizarSeguro,
				resultado,
				cargando,
			}}
		>{children}</CotizadorContext.Provider>
	);
};

export {CotizadorProvider};

export default CotizadorContext;
