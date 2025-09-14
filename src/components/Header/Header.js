import "./Header.css"
import Navbar from "./Navbar"
function Header() {
    return (
        <div className="">
            <div className="container">
                <Navbar />
            </div>
            <div className="bg-black">
                <div className="container">
                    <div className="py-100 text-light">
                        <h1 className="font46 fw-bold my-5 overflow-x-visible">خدمات استریم</h1>
                        <p className="font18">به راحتی می‌توانید لایه استریم خود را ارتقا دهید. در عرض چند دقیقه می‌توانید آن را در OBS Studio، Streamlabs و StreamElements برای پلتفرم‌های محبوبی مانند Twitch، Kick و YouTube تنظیم کنید. این کار سریع و آسان است!</p>
                        <div className="row g-5 my-4">
                            <BoxHeader image={"./image/header/box4.jpg"}></BoxHeader>
                            <BoxHeader image={"./image/header/box3.jpg"}></BoxHeader>
                            <BoxHeader image={"./image/header/box2.jpg"}></BoxHeader>
                            <BoxHeader image={"./image/header/box1.jpg"}></BoxHeader>
                        </div>
                        <a href="#/" className="btn px-5 py-4 rounded-4 my-5 font20 btn-outline-light">
                            فروشگاه
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

function BoxHeader({ image }) {
    console.log(image);
    return <div div className="col-12 col-sm-6 col-lg-3" >
        <img src={image} className="w-100  rounded-4" alt={image} />
    </div>
}
export default Header
