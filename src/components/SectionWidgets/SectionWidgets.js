import "./SectionWidgets.css"
function SectionWidgets() {
    return (
        <div className="container my-5">
            <h2 className="overflow-visible my-5 pt-5">اخرین پوشش ها و ابزار های استریم
            </h2>
            <div className="row g-5 my-4">
                <BoxHeader image="./image/section/box1.avif" />
                <BoxHeader image="./image/section/box2.avif" />
                <BoxHeader image="./image/section/box3.avif" />
                <BoxHeader image="./image/header/box1.jpg" />
            </div>
            <a href="#/" className="btn px-5 py-4 rounded-4 my-5 font20 btn-dark">مشاهده همه پوشش‌ها و هشدارهای پخش زنده</a>
        </div>
    )
}

function BoxHeader({ image }) {
    return <div div className="col-12 col-sm-6 col-lg-3" >
        <img src={image} className="w-100  rounded-4" alt={image} />
    </div>
}

export default SectionWidgets
