import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors, ACtions } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


function Contact(props) {

    // const [firstname, setFirstname] = useState('');
    // const [lastname, setLastname] = useState('');
    // const [telnum, setTelnum] = useState('');
    // const [email, setEmail] = useState('');
    // const [agree, setAgree] = useState(false);
    // const [contactType, setContactType] = useState('Tel.');
    // const [message, setMessage] = useState('');

    // const [state, setState] = useState({
    //     firstname: '', 
    //     lastname: '', 
    //     telnum: '', 
    //     email: '', 
    //     agree: false, 
    //     contactType: 'Tel.', 
    //     message: '', 
    //     touched: {
    //         firstname: false,
    //         lastname: false,
    //         telnum: false,
    //         email: false
    // }});

    // const handleInputChange = (event) =>{
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;
    //     setState(prevState => {
    //         return{ ...prevState, [name]: value}
    //     });
    // }

    const handleSubmit = (values) =>{
        console.log("current state: " + JSON.stringify(values));
        props.resetFeedbackForm();
    }

    // const handleBlur = (field) => (evt) =>{
    //     setState(prevState => {
    //         return{ ...prevState, touched: {...state.touched, [field]: true}}
    //     })
    // }

    // const validate = (firstname, lastname, telnum, email) =>{
    //     const errors = {
    //         firstname: '', 
    //         lastname: '', 
    //         telnum: '', 
    //         email: ''
    //     }

    //     if(state.touched.firstname && firstname.length < 3){
    //         errors.firstname = 'First Name should contain more than 3 characters';
    //     }
    //     else if(state.touched.firstname && firstname.length > 20){
    //         errors.firstname = 'First Name should contain less than 20 characters';
    //     }

    //     if(state.touched.lastname && lastname.length < 3){
    //         errors.lastname = 'Last Name should contain more than 3 characters';
    //     }
    //     else if(state.touched.lastname && lastname.length > 20){
    //         errors.lastname = 'Last Name should contain less than 20 characters';
    //     }

    //     if (state.touched.telnum && isNaN(telnum)){
    //         errors.telnum = 'Tel. Number should contain only numbers';
    //     }
    //     if(state.touched.email && email.split('').filter(x => x === '@').length !== 1){
    //         errors.email = 'Email should contain @';
    //     }
    //     return errors;
    // }

    // const errors = validate(state.firstname, state.lastname, state.telnum, state.email);

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">
                            Home
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Contact us
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact us</h3>
                    <hr/>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Send us your feedback</h3>
                </div>
                <div className="col-12 col-md-9">
                    <Form model="feedback" onSubmit={(values) => handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="firstname" md={2}>First Name</Label>
                            <Col md={6}>
                                <Control.text model=".firstname"
                                className="form-control"
                                id="firstname" 
                                name="firstname" 
                                placeholder="First Name"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                                />
                                <Errors className="text-danger"
                                model=".firstname"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="lastname" md={2}>Last Name</Label>
                            <Col md={6}>
                                <Control.text model=".lastname"
                                className="form-control"
                                id="lastname" 
                                name="lastname" 
                                placeholder="Last Name"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                                />
                                <Errors className="text-danger"
                                model=".lastname"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                            <Col md={6}>
                                <Control.text model=".telnum"
                                className="form-control"
                                id="telnum" 
                                name="telnum" 
                                placeholder="Tel. Number"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                }}/>
                                <Errors className="text-danger"
                                model=".telnum"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 numbers',
                                    maxLength: 'Must be 15 numbers or less',
                                    isNumber: 'Must be a number'
                                }}/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={6}>
                                <Control.text model=".email"
                                className="form-control"
                                id="email" 
                                name="email" 
                                placeholder="Email"
                                validators={{
                                    required, validEmail
                                }}/>
                                <Errors className="text-danger"
                                model=".email"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    validEmail: 'Invalid Email address'
                                }}/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size: 6, offset: 2}}>
                                <div className="form-check">
                                    <Label check>
                                        <Control.checkbox model=".agree" 
                                        className="form-check-input"
                                        name="agree"/> {' '}
                                        <strong>May we contact you?</strong>
                                    </Label>
                                </div>
                            </Col>
                            <Col md={{size: 3, offset: 5}}>
                                <Control.select model=".contactType"
                                className="form-control"
                                name="contactType"
                                >
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="message" md={2}>Your Feedback</Label>
                            <Col md={6}>
                                <Control.textarea model=".message"
                                className="form-control"
                                id="message" 
                                name="message" 
                                rows="12" 
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size: 10, offset: 2}}>
                                <Button type="submit" color="primary">Send Feedback</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Contact;