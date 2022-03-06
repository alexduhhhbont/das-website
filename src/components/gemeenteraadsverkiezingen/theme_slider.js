import React from 'react'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby';
import Image from "gatsby-image"
import '../../styles/components/NewsSlider.css'

import duurzaamheidAfbeelding from '../../images/duurzaamheid.jpg'
import studentenhuisvestingAfbeelding from '../../images/studentenhuisvesting.jpg'
import studentenstadAfbeelding from '../../images/studentenstad.jpg'
import mobiliteitAfbeelding from '../../images/mobiliteit.jpg'
import participatieAfbeelding from '../../images/participatie.jpg'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import styled from "styled-components";

const Overlay = styled.div`
    position: relative;
    z-index: 99;
    height: 500px;
    width: 100%;
    background-color: rgba(0,0,0,0.2);
    border-radius: 15px;

    &:hover {
        p {
            transform: scale(1.05);
            transition: all .7s cubic-bezier(0.68, -0.55, 0.27, 1.55);
            color: #3075bc;
            background: white;
        }
    },
`;

const SeeMore = styled.div`
    position: absolute;
    z-index: 99;
    height: 500px;
    width: 100%;
    background-color: #3075bc;
    border-radius: 15px;

    &:hover {
        p {
            transform: scale(1.05);
            transition: all .7s cubic-bezier(0.68, -0.55, 0.27, 1.55);
            color: #3075bc;
            background: white;
        }
    },
`;

const Title = styled.h1`
    color: white;
    padding: 30px;
`;

const ReadMore = styled.p`
    padding: 8px 15px;
    border-radius: 15px;
    background: #3075bc;
    width: max-content;
    color: white;
    margin: 30px;
    position: absolute;
    bottom: 0px;
`;

const ReadMoreWhite = styled.p`
    padding: 8px 15px;
    border-radius: 15px;
    background: white;
    width: max-content;
    color: #3075bc;
    margin: 30px;
    position: absolute;
    bottom: 0px;
`;

export default function ThemaSlider() {

    return (
        <Swiper
        // install Swiper modules
        modules={[Pagination, A11y, Autoplay]}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 45,
            },
          }}
        autoplay
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
            <SwiperSlide>
                <Link className="newsLink" to={"/gemeenteraadsverkiezingen/themas/student-housing"}>
                        <Overlay style={{background: "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(" + studentenhuisvestingAfbeelding + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                            <Title>Studenten huisvesting</Title>
                            <ReadMore>Read more</ReadMore>
                        </Overlay>
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link className="newsLink" to={"/gemeenteraadsverkiezingen/themas/student-city"}>
                        <Overlay style={{background: "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(" + studentenstadAfbeelding + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                            <Title>Studenten stad</Title>
                            <ReadMore>Read more</ReadMore>
                        </Overlay>
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link className="newsLink" to={"/gemeenteraadsverkiezingen/themas/sustainability"}>
                        <Overlay style={{background: "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(" + duurzaamheidAfbeelding + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                            <Title>Duurzaamheid</Title>
                            <ReadMore>Read more</ReadMore>
                        </Overlay>
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link className="newsLink" to={"/gemeenteraadsverkiezingen/themas/participation"}>
                        <Overlay style={{background: "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(" + participatieAfbeelding + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                            <Title>Participatie</Title>
                            <ReadMore>Read more</ReadMore>
                        </Overlay>
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link className="newsLink" to={"/gemeenteraadsverkiezingen/themas/mobility"}>
                        <Overlay style={{background: "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(" + mobiliteitAfbeelding + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                            <Title>Mobiliteit</Title>
                            <ReadMore>Read more</ReadMore>
                        </Overlay>
                </Link>
            </SwiperSlide>
      </Swiper>
    )
}
