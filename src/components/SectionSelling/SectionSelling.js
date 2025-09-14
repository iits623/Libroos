function SectionSelling() {
    return (
        <div className="container ">
            <h2 className="overflow-visible my-5">پرفروش‌ترین پوشش‌ها و هشدارهای توییچ</h2>
            <div className="row row-gap-4">
                <BoxHeader text={"وایب – داک رویداد"} image={"./image/section/img-selling1.avif"}></BoxHeader>
                <BoxHeader text={"جریان – چت باکس"} image={"./image/section/img-selling2.avif"}></BoxHeader>
                <BoxHeader text={"ساخت و ساز – بسته جریان"} image={"./image/section/img-selling3.avif"}></BoxHeader>
                <BoxHeader text={"بسته‌ی استریم - STREAMOS بسته‌ی استریم رنگین‌کمانی"} image={"./image/section/img-selling4.avif"}></BoxHeader>
                <BoxHeader text={"رنگین کمانی – بسته جریانی"} image={"./image/section/img-selling5.avif"}></BoxHeader>
                <BoxHeader text={"بسته‌ی پخش جریانی سینث‌ویو"} image={"./image/section/img-selling6.webp"}></BoxHeader>
            </div>
            <a href="#/" className="btn px-5 py-4 rounded-4 my-5 font20 btn-dark">مشاهده همه پوشش‌ها و هشدارهای پخش زنده</a>
        </div>
    )
}

function BoxHeader({ image, text }) {
    return <div div className="col-6 col-md-4" >
        <img src={image} className="w-100  rounded-4" alt={image} />
        <p className="mt-3">{text}</p>
    </div>
}
export default SectionSelling
