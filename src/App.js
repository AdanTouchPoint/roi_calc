import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/cjs/Button";

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
        setRRHHProd(productivityYear)

    }

    //incremento en Productividad = 40%
    //totalRRHH = RRHH * salaryRRHH
    //aumento de productividad por mes = totalRRH * 40%
    // aumento de productividad por año = aumento de productividad por mes * 12


    const DecreseTurnOverSavings = () => {
        let turnOverEmployeed = salary * 4
        let turnOverYear = turnOverEmployeed * newEmployees * 12
        let turOverSavings = turnOverYear * .5
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
        <div className="container" style={{display: 'flex', paddingTop: '20px'}}>
            <div className="container">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>¿Cuantos empleados tiene tu empresa?</Form.Label>
                        <Form.Control onChange={handleEmployees} type="number"/>
                        <Form.Text className="text-muted">
                            Enter Benefits Monthly
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>¿Cuantos nuevos empleados por mes en promedio?</Form.Label>
                        <Form.Control onChange={handleNewEmployees} type="number"/>
                        <Form.Text className="text-muted">
                            Enter Number of Total Investement Monthly
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>¿Cuantas personas en tu departamento de RRHH?</Form.Label>
                        <Form.Control onChange={handleRRHH} type="number"/>
                        <Form.Text className="text-muted">
                            Enter Number of Total Employees
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> ¿Salario mensual integral de colaboradores en promedio?</Form.Label>
                        <Form.Control onChange={handleSalary} type="number"/>
                        <Form.Text className="text-muted">
                            Enter Number of Total Salaries Employees Monthly
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> ¿Salario promedio integral del área de RRHH mensual?</Form.Label>
                        <Form.Control onChange={handleSalaryRRHH} type="number"/>
                        <Form.Text className="text-muted">
                            Enter Number of Total Salaries Employees Monthly
                        </Form.Text>
                    </Form.Group>

                    <Button onClick={onClick} variant="primary">
                        Calculate
                    </Button>
                </Form>
            </div>
            <div className="container">
                <h1> ROI: $ { roi > 0 ?  roi : null} </h1>
                <h3>Ahorro en Incorporación:$ {onBoard} </h3>
                <h3>Productividad de su área de RRHH:$ {RRHHProd}</h3>
                <h3>Reduccion de rotación:$ {turnOver}</h3>
            </div>
        </div>
    );
}

export default App;
