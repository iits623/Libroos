import React, { useState } from 'react';
import {
    Navbar as BsNavbar,
    Nav,
    Offcanvas,
    Button,
    Container,
} from 'react-bootstrap';

function Navbar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <BsNavbar
                expand="md"
                className="navbar navbar-expand-md z-2 py-2 shadow-lg overflow-x-hidden"
                fixed="top"
                bg='light'
            >
                <Container className="d-flex justify-content-between">
                    <Button
                        className="navbar-toggler"
                        type="button"
                        onClick={handleShow}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </Button>
                    <div className="navbar-header d-flex align-items-center justify-content-between">
                        <div className="header-logo font30 fw-bolder d-none d-md-block">
                            <img src="/image/header/logo-lib.png" width={200} alt="" />
                        </div>
                        <BsNavbar.Collapse className="collapse navbar-collapse flex-grow-0">
                            <Nav className="navbar-nav p-2 d-flex align-items-center gap-4 font18">
                                <Nav.Link className="nav-link text-nowrap" href="#/">
                                    پوشش های توییچ
                                </Nav.Link>
                                <Nav.Link className="nav-link text-nowrap" href="#/">
                                    هشدار ها
                                </Nav.Link>
                                <Nav.Link className="nav-link" href="#/">
                                    فروشگاه
                                </Nav.Link>
                                <Nav.Link className="nav-link" href="#/">
                                    آموزش
                                </Nav.Link>
                                <Nav.Link className="nav-link" href="#/">
                                    ساخت
                                </Nav.Link>
                                <Nav.Link className="nav-link" href="#/">
                                    پشتیبانی
                                </Nav.Link>
                            </Nav>
                        </BsNavbar.Collapse>
                        <div className="">
                            <ul className="list-unstyled d-flex align-items-center gap-4 m-0 p-0">
                                <li className="nav-item d-none d-md-block">
                                    <a className="nav-link link-header" href="#/">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="22"
                                            fill="currentColor"
                                            className="bi bi-twitter-x"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="nav-item d-none d-md-block">
                                    <a className="nav-link link-header" href="#/">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="22"
                                            fill="currentColor"
                                            className="bi bi-youtube"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link-header" href="#/">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="22"
                                            fill="currentColor"
                                            className="bi bi-search"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link-header" href="#/">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="26"
                                            height="26"
                                            fill="currentColor"
                                            className="bi bi-person"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link-header" href="#/">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="22"
                                            fill="currentColor"
                                            className="bi bi-bag"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </BsNavbar>

            <Offcanvas
                show={show}
                onHide={handleClose}
                className="bg-black text-light offcanvas offcanvas-end text-end w-75"
                id="mobileMenu"
                aria-modal="true"
                role="dialog"
            >
                <Offcanvas.Body className="px-4 py-3">
                    <Button
                        type="button"
                        className="btn-close btn-close-white"
                        onClick={handleClose}
                    ></Button>

                    <Nav className="navbar-nav font18 p-0 ">
                        <Nav.Link className="nav-link text-offcanvas" href="#/">
                            پوشش های توییچ
                        </Nav.Link>
                        <Nav.Link className="nav-link text-offcanvas" href="#/">
                            هشدار ها
                        </Nav.Link>
                        <Nav.Link className="nav-link text-offcanvas" href="#/">
                            فروشگاه
                        </Nav.Link>
                        <Nav.Link className="nav-link text-offcanvas" href="#/">
                            آموزش
                        </Nav.Link>
                        <Nav.Link className="nav-link text-offcanvas" href="#/">
                            ساخت
                        </Nav.Link>
                        <Nav.Link className="nav-link text-offcanvas " href="#/">
                            پشتیبانی
                        </Nav.Link>
                        <Nav.Item>
                            <div className="d-flex gap-4">
                                <Nav.Link className="nav-link link-header text-offcanvas" href="#/">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        fill="currentColor"
                                        className="bi bi-twitter-x"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                    </svg>
                                </Nav.Link>
                                <Nav.Link className="nav-link link-header text-offcanvas" href="#/">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        fill="currentColor"
                                        className="bi bi-youtube"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                                    </svg>
                                </Nav.Link>
                            </div>
                        </Nav.Item>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default Navbar;