import { Container, Col, Row } from "react-bootstrap"

function SectionDiscraptions() {
    return (
        <Container>
            <Discraption1 />

            <Discraption2 />
            <Discraption3 />

        </Container>
    )
}
function Discraption1() {
    return (
        <Row className="g-5 align-items-center justify-content-center">
            <Col xs={12} md={6}>
                <img className="img-fluid w-75" src="/image/icon/Platforms-and-Software-uai-720x355.webp" alt="" />
            </Col>
            <Col xs={12} md={6} className="text-end">
                <h4 className="font34">از سازگاری بی‌نقص با تمام پلتفرم‌ها و نرم‌افزارهای استریم مورد علاقه‌تان لذت ببرید</h4>
                <p className="font16 py-5">تجربه پخش زنده خود را با پوشش‌های متنوع ما، سازگار با Twitch، Kick و YouTube و بهینه شده برای نرم‌افزارهای محبوبی مانند OBS Studio، StreamElements و Streamlabs، ارتقا دهید.</p>
                <p className="font16">با پشتیبانی اختصاصی مشتری و راهنماهای راه‌اندازی آسان ما، می‌توانید در کمترین زمان محتوا تولید و پخش کنید. از نصب سریع برای جذب و مجذوب کردن مخاطبان خود همین امروز لذت ببرید!</p>
            </Col>
        </Row>
    )
}
function Discraption2() {
    return (
        <Row className="g-5 align-items-center justify-content-center py-50">
            <Col xs={12} md={6} className="text-end ">
                <h4 className="font34">هشدارهای متحرک پویا و قابل تنظیم، پوشش‌های استریم و ویجت‌ها</h4>
                <p className="font16 py-5">پوشش‌ها، هشدارها، انتقال صحنه‌ها و ویجت‌های قابل تنظیم ما که برای پخش‌کنندگان زنده در Twitch، Kick و YouTube طراحی شده‌اند، به شما کمک می‌کنند تا یک برند متمایز بسازید.</p>
                <p className="font16">نصب بدون دردسر را با OBS Studio، StreamElements و Streamlabs تجربه کنید و به شما این امکان را می‌دهد که روی آنچه واقعاً مهم است تمرکز کنید: ایجاد محتوای استثنایی.
                </p>
                <a href="#/" className="btn px-5 py-4 rounded-4 my-5 font20 btn-dark">
                    طرح خود را پیدا کنید
                </a>
            </Col>
            <Col xs={12} md={6}>
                <img className="img-fluid w-75" src="/image/section/widgets-alerts-homepage-sml.avif" alt="" />
            </Col>
        </Row>
    )
}
function Discraption3() {
    return (
        <Row className="g-5 align-items-center justify-content-center py-50">
            <Col xs={12} md={6}>
                <img className="img-fluid w-75" src="/image/section/Tutorial_Image2-uai-945x532.webp" alt="" />
            </Col>
            <Col xs={12} md={6} className="text-end ">
                <h4 className="font34">آموزش‌ها و نکات پخش زنده برای مبتدیان</h4>
                <p className="font16 py-5">آیا در تنظیم پوشش‌ها و هشدارهای پخش خود مشکل دارید؟ به دنبال به حداکثر رساندن تجربه خود با Streamlabs و StreamElements هستید؟ ما شما را پوشش می‌دهیم.</p>
                <p className="font16">با آموزش‌های جامع ما که برای کمک به موفقیت شما طراحی شده‌اند، نکات و ترفندهای زیادی را برای OBS Studio، Streamlabs Desktop، StreamElements و موارد دیگر کشف کنید.
                </p>
                <a href="#/" className="btn px-5 py-4 rounded-4 my-5 font20 btn-dark">
                    مشاهده اموزش ها
                </a>
            </Col>

        </Row>
    )
}
export default SectionDiscraptions
