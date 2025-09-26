import React from 'react';
import './SectionWidgets.css'; // استایل‌های سفارشی رو نگه می‌داریم
import { Container, Row, Col } from 'react-bootstrap';

function SectionWidgets() {
    return (
        <Container className="my-5">
            <h2 className="overflow-visible my-5 pt-5">اخرین پوشش ها و ابزار های استریم</h2>
            <Row className="g-5 my-4">
                <BoxHeader image="image/section/box1.avif" />
                <BoxHeader image="/image/section/box2.avif" />
                <BoxHeader image="./image/section/box3.avif" />
                <BoxHeader image="./image/header/box1.jpg" />
            </Row>
            <a href="#/" className="btn px-5 py-4 rounded-4 my-5 font20 btn-dark">
                مشاهده همه پوشش‌ها و هشدارهای پخش زنده
            </a>
        </Container>
    );
}

function BoxHeader({ image }) {
    return (
        <Col xs={12} sm={6} lg={3}>
            <img src={image} className="w-100 rounded-4" alt={image} />
        </Col>
    );
}

export default SectionWidgets;