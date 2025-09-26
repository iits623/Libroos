import React from 'react';
// import './SectionSelling.css'; // فرض می‌کنیم استایل سفارشی داری
import { Container, Row, Col } from 'react-bootstrap';

function SectionSelling() {
    return (
        <Container className="">
            <h2 className="overflow-visible my-5">پرفروش‌ترین پوشش‌ها و هشدارهای توییچ</h2>
            <Row className="row-gap-4">
                <BoxHeader text="وایب – داک رویداد" image="/image/section/img-selling1.avif" />
                <BoxHeader text="جریان – چت باکس" image="/image/section/img-selling2.avif" />
                <BoxHeader text="ساخت و ساز – بسته جریان" image="/image/section/img-selling3.avif" />
                <BoxHeader
                    text="بسته‌ی استریم - STREAMOS بسته‌ی استریم رنگین‌کمانی"
                    image="/image/section/img-selling4.avif"
                />
                <BoxHeader text="رنگین کمانی – بسته جریانی" image="/image/section/img-selling5.avif" />
                <BoxHeader text="بسته‌ی پخش جریانی سینث‌ویو" image="/image/section/img-selling6.webp" />
            </Row>
            <a href="#/" className="btn px-5 py-4 rounded-4 my-5 font20 btn-dark">
                مشاهده همه پوشش‌ها و هشدارهای پخش زنده
            </a>
        </Container>
    );
}

function BoxHeader({ image, text }) {
    return (
        <Col xs={6} md={4}>
            <img src={image} className="w-100 rounded-4" alt={text} /> {/* alt رو به متن تغییر دادم */}
            <p className="mt-3">{text}</p>
        </Col>

    );
}

export default SectionSelling;