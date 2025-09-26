import './Header.css';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar';
import ParticlesBg from '../ParticlesBg/ParticlesBg'
function Header() {
    return (
        <div>
            <Container>
                <Navbar />
            </Container>
            <div className='position-relative bg-black text-light'> {/* ارتفاع حداقل برای محتوا */}
                <ParticlesBg
                    id="tsparticles"
                    className="position-absolute top-0 start-0 w-100 h-100 z-0"

                />
                <Container>
                    <div className="py-100 text-light position-relative">
                        <h1 className="font46 fw-bold my-3 overflow-x-visible">خدمات استریم</h1>
                        <p className="font18">
                            به راحتی می‌توانید لایه استریم خود را ارتقا دهید. در عرض چند دقیقه می‌توانید آن را در OBS Studio، Streamlabs و StreamElements برای پلتفرم‌های محبوبی مانند Twitch، Kick و YouTube تنظیم کنید. این کار سریع و آسان است!
                        </p>
                        <Row className="g-3 my-4">
                            <BoxHeader image="/image/header/box1.jpg" />
                            <BoxHeader image="/image/header/box2.jpg" />
                            <BoxHeader image="/image/header/box3.jpg" />
                            <BoxHeader image="/image/header/box4.jpg" />
                        </Row>
                        <Row className="justify-content-center mt-5">
                            <Col xs={8}>
                                <div className="bg-glass py-4 px-5 d-flex flex-wrap gap-3 align-items-center justify-content-center">
                                    <span className="font18">طراحی شده برای کار با</span>
                                    <img width={50} src="/image/icon/ico_twitch.svg" alt="Twitch" />
                                    <img width={50} src="/image/icon/ico_kick.svg" alt="Kick" />
                                    <img width={50} src="/image/icon/ico_youtube.svg" alt="YouTube" />
                                    <img width={50} src="/image/icon/ico_obs-studio.svg" alt="OBS Studio" />
                                    <img width={50} src="/image/icon/StreamElements-Icon-Only-01.svg" alt="StreamElements" />
                                    <img width={50} src="/image/icon/ico_streamlabs-1-color.svg" alt="Streamlabs" />
                                    <img width={50} src="/image/icon/Meld-Logo.webp" alt="Meld" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    );
}
function BoxHeader({ image }) {
    return (
        <Col xs={12} sm={6} lg={3}>
            <img src={image} className="w-100 rounded-4" alt={image} />
        </Col>

    );
}

export default Header;