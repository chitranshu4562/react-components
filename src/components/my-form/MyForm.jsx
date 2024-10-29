import classes from "./MyForm.module.css";
import InputField from "../input-field/InputField.jsx";
import {useState} from "react";
import Button from "../button/Button.jsx";

export default function MyForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        address: '',
        company: ''
    })

    const handleInputChange = (event) => {
        setFormData(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        handleReset();
    }

    const handleReset = () => {
        setFormData({
            name: '',
            email: '',
            mobile: '',
            address: '',
            company: ''
        })
    }

    return (
        <>
            <div>
                <h4>Name: {formData.name}</h4>
                <h4>Email: {formData.email}</h4>
                <h4>Mobile No.: {formData.mobile}</h4>
                <h4>Address: {formData.address}</h4>
                <h4>Company: {formData.company}</h4>
            </div>
            <form onSubmit={handleSubmit}>
                <InputField
                    name="name"
                    value={formData.name}
                    placeholder="Enter name"
                    type="text"
                    classNames="form-control my-2"
                    onChange={handleInputChange}
                />
                <InputField
                    name="email"
                    value={formData.email}
                    placeholder="Enter email"
                    type="email"
                    classNames="form-control my-2"
                    onChange={handleInputChange}
                />
                <InputField
                    name="mobile"
                    value={formData.mobile}
                    placeholder="Enter mobile no"
                    type="text"
                    classNames="form-control my-2"
                    onChange={handleInputChange}
                />
                <InputField
                    name="address"
                    value={formData.address}
                    placeholder="Enter address"
                    type="text"
                    classNames="form-control my-2"
                    onChange={handleInputChange}
                />
                <InputField
                    name="company"
                    value={formData.company}
                    placeholder="Enter company name"
                    type="text"
                    classNames="form-control my-2"
                    onChange={handleInputChange}
                />
                <div className="d-flex justify-content-center">
                    <Button
                        type="submit"
                    >Submit</Button>
                </div>
            </form>
        </>
    )
}
