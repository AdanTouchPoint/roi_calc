import {React, useEffect, useState} from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/cjs/Button";

function App() {
    const [benefits, setBenefits] = useState(0)
    const [invest, setInvest] = useState(0)
    const [employees, setEmployees] = useState(0)
    const [salary, setSalary] = useState(0)
    const [roi, setRoi] = useState(0)
    const [totalInv, setTotalInv]= useState(0)

    const investment = () => {
       let  data = invest + (salary * employees)
        return setTotalInv(data)
    }
    const handleBenefits = e => {
        e.preventDefault()
        setBenefits(
            parseInt(e.target.value)
        )

    }
    const handleInvest = e => {
        e.preventDefault()
        setInvest(
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
    const onClick = () => {
        console.log(benefits)
        console.log(totalInv)
        const totalRoi = (benefits - totalInv) / totalInv*100
        return  setRoi(totalRoi)
    }
    useEffect(() => {
        investment()
        console.log(totalInv)
    }, [employees])

    useEffect(() => {
        investment()
        console.log(totalInv)
    }, [invest])
    useEffect(() => {
        setBenefits(benefits)

        },[benefits])
    useEffect(() => {
        investment()
        console.log(totalInv)
    }, [salary])
    useEffect(() => {
     onClick()
    }, [totalInv])
    useEffect(() => {
        console.log(roi)
    }, [roi])
    return (
        <div className="container" style={{display: 'flex', paddingTop:'20px'}}>
            <div className="container">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Benefits Per Month</Form.Label>
                        <Form.Control onChange={handleBenefits} type="number"/>
                        <Form.Text className="text-muted">
                            Enter Benefits Monthly
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Direct Investement Monthly</Form.Label>
                        <Form.Control onChange={handleInvest} type="number"/>
                        <Form.Text className="text-muted">
                            Enter Number of Total Investement Monthly
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Total Employees</Form.Label>
                        <Form.Control onChange={handleEmployees} type="number"/>
                        <Form.Text className="text-muted">
                            Enter Number of Total Employees
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Employees Salary Monthly</Form.Label>
                        <Form.Control onChange={handleSalary} type="number"/>
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
                <h1> ROI :</h1>
                <p>total: {parseInt(roi)} %</p>
                <h2> benefits </h2>
                <p>year:$ {benefits *12}</p>
                <p>month:$ {benefits}</p>
                <p>day:$ {(benefits /30).toFixed(2)}</p>
                <h2> employees cost:</h2>
                <p>year: $ {salary * employees * 12}</p>
                <p>month: $ {salary * employees}</p>
                <p>day:$ {(salary * employees / 30).toFixed(2)}</p>
                <h2> Invest </h2>
                <p>year:$ {invest *12}</p>
                <p>month:$ {invest }</p>
                <p>day:$ {(invest /30).toFixed(2)}</p>
                <h2>Total Invest</h2>
                <p>year:$ {totalInv *12}</p>
                <p>month: {totalInv} </p>
                <p>day:$ {(totalInv /30).toFixed(2)}</p>
            </div>
        </div>
    );
}

export default App;
