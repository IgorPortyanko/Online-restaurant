import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const contentStyle: React.CSSProperties = {
    height: '600px',
    width: '100%',
    margin: '0 auto'
  };

const CarouselComponent = ({ imgList }: { imgList: string[] }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };

    return (

        <Slider {...settings}>
            {imgList.map((item) => (
                <div key={item}>
                     <img src={`./img/promotion/${item}`} style={contentStyle}/>
                </div>
            ))}
        </Slider>
    )
}

export default CarouselComponent