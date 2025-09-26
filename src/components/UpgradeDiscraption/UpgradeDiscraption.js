import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function UpgradeDiscraption() {
    return (
        <Container className="text-end">
            <Row className='py-100'>
                <Col md={6} xs={12}>
                    <h3 className="my-5 overflow-visible">ارتقاء بعدی جریان خود را پیدا کنید</h3>
                    <p className="font18 line-height-35">
                        پوشش‌ها و ویجت‌های متناسب با هر استریمر Twitch، YouTube یا Kick را کشف کنید - چه به Just Chatting، بازی، IRL یا فراتر از آن علاقه داشته باشید. مجموعه ما شامل طرح‌های پر جنب و جوش و پرانرژی برای جلسات بازی شدید، طرح‌بندی‌های شیک و مدرن برای چت‌های غیررسمی و تنظیمات متنوع برای موسیقی، ASMR یا استریم‌های خلاقانه است. این مجموعه برای ادغام یکپارچه با OBS Studio، Streamlabs یا StreamElements طراحی شده است و به شما امکان می‌دهد کانالی بسازید که منحصراً متعلق به شماست. محبوب‌ترین جستجوهای ما را در زیر بررسی کنید!
                    </p>
                    <SectionPopularSearches />
                </Col>
                <Col md={6} xs={12}>
                    <Row className='g-5'>
                        <BoxHeader image="/image/section/feature-chat-box-overlays-1.webp" text="پوشش چت باکس" />
                        <BoxHeader image="/image/section/feature-all-products-1.webp" text="همه محصولات" />
                        <BoxHeader image="/image/section/feature-stream-alerts-1.webp" text="هشدار استریم" />
                        <BoxHeader image="/image/section/feature-overlay-packs-1.webp" text="پوشش استریم" />

                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
function BoxHeader({ image, text }) {
    return (
        <Col className='' xs={6}>
            <div style={{ backgroundColor: "#f7f7f7" }} className=' p-5 rounded-5 d-flex flex-column gap-4 align-items-center'>
                <img src={image} className="w-100 rounded-4" alt={image} />
                <span className='font16 text-black fw-bold'>{text}</span>
            </div>
        </Col>

    );
}
function SectionPopularSearches() {
    return (
        <div className='py-100'>
            <h3 className='mb-5'>جست جو های معروف</h3>
            <div className="d-flex gap-4 flex-wrap ">
                <BoxSearch text="پوشش توییچ" />
                <BoxSearch text="هشدار توییچ    " />
                <BoxSearch text="پوشش چت باکس" />
                <BoxSearch text="پوشش چت باکس" />
                <BoxSearch text="پوشش چت باکس" />
                <BoxSearch text="هدف دونیت" />
            </div>
        </div>

    )
}
function BoxSearch({ text }) {
    return (
        <div className="border border-black border-3 px-5 py-4 rounded-4 font14">
            {text}
        </div>
    )
}
export default UpgradeDiscraption;