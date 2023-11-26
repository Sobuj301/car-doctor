import img_1 from "../../assets/images/banner/1.jpg"
import img_2 from "../../assets/images/banner/2.jpg"
import img_3 from "../../assets/images/banner/3.jpg"
import img_4 from "../../assets/images/banner/4.jpg"


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img_1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full ml-8 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className="text-white space-y-7 w-1/3 pl-8 ">
                   <h2 className="text-6xl font-bold">
                     Affordable Price For Car Servicing
                   </h2>
                   <p>
                     There are many variations of passages of  available, but the majority have suffered alteration in some form
                   </p>
                   <div>
                   <button className="btn btn-outline btn-secondary mr-6">Discover more</button>
                   <button className="btn btn-outline btn-secondary">Lasted projects</button>
                   </div>
                </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <img src={img_2} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full ml-8 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className="text-white space-y-7 w-1/3 pl-8 ">
                   <h2 className="text-6xl font-bold">
                     Affordable Price For Car Servicing
                   </h2>
                   <p>
                     There are many variations of passages of  available, but the majority have suffered alteration in some form
                   </p>
                   <div>
                   <button className="btn btn-outline btn-secondary mr-6">Discover more</button>
                   <button className="btn btn-outline btn-secondary">Lasted projects</button>
                   </div>
                </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <img src={img_3} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full ml-8 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className="text-white space-y-7 w-1/3 pl-8 ">
                   <h2 className="text-6xl font-bold">
                     Affordable Price For Car Servicing
                   </h2>
                   <p>
                     There are many variations of passages of  available, but the majority have suffered alteration in some form
                   </p>
                   <div>
                   <button className="btn btn-outline btn-secondary mr-6">Discover more</button>
                   <button className="btn btn-outline btn-secondary">Lasted projects</button>
                   </div>
                </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
            <img src={img_4} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full ml-8 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className="text-white space-y-7 w-1/3 pl-8 ">
                   <h2 className="text-6xl font-bold">
                     Affordable Price For Car Servicing
                   </h2>
                   <p>
                     There are many variations of passages of  available, but the majority have suffered alteration in some form
                   </p>
                   <div>
                   <button className="btn btn-outline btn-secondary mr-6">Discover more</button>
                   <button className="btn btn-outline btn-secondary">Lasted projects</button>
                   </div>
                </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;