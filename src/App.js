import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/cjs/Button";
import logo from "./logo web.png"

function App() {
    const [employees, setEmployees] = useState(0)
    const [newEmployees, setNewEmployees] = useState(0)
    const [RRHH, setRRHH] = useState(0)
    const [salary, setSalary] = useState(0)
    const [salaryRRHH, setSalaryRRHH] = useState(0)
    const [onBoard, setOnBoard] = useState()
    const [RRHHProd, setRRHHProd] = useState()
    const [turnOver, setTurnOver] = useState()
    const [roi, setRoi] = useState(0)
    const formatter = new Intl.NumberFormat('en-GB')
    const handleNewEmployees = e => {
        e.preventDefault()
        setNewEmployees(
            parseInt(e.target.value)
        )
    }
    const handleRRHH = e => {
        e.preventDefault()
        setRRHH(
            parseInt(e.target.value)
        )

    }
    const handleEmployees = e => {
        e.preventDefault()
        setEmployees(
            parseInt(e.target.value)
        )
    }

    const handleSalary = e => {
        e.preventDefault()
        setSalary(
            parseInt(e.target.value)
        )

    }
    const handleSalaryRRHH = e => {
        e.preventDefault()
        setSalaryRRHH(
            parseInt(e.target.value)
        )

    }
    const onBoardSavings = () => {
        let salaryDaily = salaryRRHH / 20;
        let newEmployeesYearly = newEmployees * 12;
        let onBoardingTotal = newEmployeesYearly * 2 * salaryDaily;
        let savings = onBoardingTotal * .5
        let div = formatter.format(savings)
        setOnBoard(savings)
    }
    //salario x dia de rh  = salaryRRHH /20
    //tiempo dedicado a la incorporacion : 2 dias standard
    //empelados nuevos x año = NewEmployees * 12
    //costo total de la incorporacion = empleados nuevos al año * tiempodedicado a la incorp * salario diario
    //ahorros en incorporacion = costoTotal de incorporacion * 50%


    const RRHHProductivity = () => {
        let totalRRHH = salaryRRHH * RRHH;
        let productivityMonth = totalRRHH * .40;
        let productivityYear = productivityMonth * 12;
        let div = formatter.format(productivityYear)
        setRRHHProd(productivityYear)
    }

    //incremento en Productividad = 40%
    //totalRRHH = RRHH * salaryRRHH
    //aumento de productividad por mes = totalRRH * 40%
    // aumento de productividad por año = aumento de productividad por mes * 12


    const DecreseTurnOverSavings = () => {
        let turnOverEmployeed = (salary * 100) / 100
        console.log(turnOverEmployeed)
        let turnOverYear = turnOverEmployeed * (newEmployees * 12)
        console.log(turnOverYear)
        let turOverSavings = turnOverYear * .5
        let div = formatter.format(turOverSavings)
        setTurnOver(turOverSavings)
    }
    //Salary
    //costo de rotacion = 400%
    //costo total de rotacion por empleado = salary * costo de rotacion (%400)
    //costo rotacion anual = costo total de rotacion por empleado * rotacionAnual(NewEmployees * 12)
    //reduccion de rotacion = costo rotacion anual * 50%


    const totalRoi = () => {

        let workyYear = 99 * 12 * employees
        let savingTotals = onBoard + RRHHProd + turnOver
        let ROI = savingTotals / workyYear
        setRoi(ROI.toFixed(0))
    }
    //costo worky por mes = 99
    //numero de meses = 12
    //costo anual = employees * 12 * 99
    //total beneficio = reduccion de rotacion + aumento de productividad por año + ahorros en incorporacion
    //ROI = total beneficio / costo anual


    const onClick = async () => {
        await onBoardSavings()
        await RRHHProductivity()
        await DecreseTurnOverSavings()
    }
    useEffect(() => {
        totalRoi()
    }, [turnOver])

    return (
        <div className="container">
            <div>
                <div>
                    <img style={{
                        paddingLeft: '30px',
                        marginTop: '30px',
                        maxHeight: '150px',
                        maxWidth: '200px',
                        height: '100%',
                        width: '150px'
                    }}
                         src={logo}/>
                </div>
                <div className="container" style={{display: 'flex', paddingTop: '40px'}}>
                    <div className="container">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>¿Cuantos empleados tiene tu empresa?</Form.Label>
                                <Form.Control onChange={handleEmployees} type="number"/>
                                <Form.Text className="text-muted">
                                    Usa las flechas o introduce manualemnte tu respuesta
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>¿Cuantos nuevos empleados por mes en promedio?</Form.Label>
                                <Form.Control onChange={handleNewEmployees} type="number"/>
                                <Form.Text className="text-muted">
                                    Usa las flechas o introduce manualemnte tu respuesta
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>¿Cuantas personas en tu departamento de RRHH?</Form.Label>
                                <Form.Control onChange={handleRRHH} type="number"/>
                                <Form.Text className="text-muted">
                                    Usa las flechas o introduce manualemnte tu respuesta
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label> ¿Salario mensual integral de colaboradores en promedio?</Form.Label>
                                <Form.Control onChange={handleSalary} type="number"/>
                                <Form.Text className="text-muted">
                                    Usa las flechas o introduce manualemnte tu respuesta
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label> ¿Salario promedio integral del área de RRHH mensual?</Form.Label>
                                <Form.Control onChange={handleSalaryRRHH} type="number"/>
                                <Form.Text className="text-muted">
                                    Usa las flechas o introduce manualemnte tu respuesta
                                </Form.Text>
                            </Form.Group>
                            <Button onClick={onClick} variant="primary">
                                Calculate
                            </Button>
                        </Form>
                    </div>
                    <div className="container" style={{textAlign: 'center', margin: '20px',}}>
                        <h2>Estimado de Valor Annual
                            al automatizar tus procesos de nomina
                            :</h2>
                        <h1 style={{paddingTop: '20px',}}> ROI: {roi > 0 ? roi + " a 1" : null} </h1>
                        <h3 style={{paddingTop: '20px',}}>Ahorro en Incorporación: </h3>
                        <h4>$ { onBoard > 0 ? formatter.format(onBoard): null }</h4>
                        <h3 style={{paddingTop: '20px',}}>Productividad de su área de RRHH:</h3>
                        <h4>$ {RRHHProd  > 0 ?  formatter.format(RRHHProd) : null  }</h4>
                        <h3 style={{paddingTop: '20px',}}>Reduccion de rotación:</h3>
                        <h4>$ {turnOver > 0 ? formatter.format(turnOver) : null   }</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
