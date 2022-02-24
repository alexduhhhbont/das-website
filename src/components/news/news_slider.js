import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby';
import Image from "gatsby-image"
import '../../styles/components/NewsSlider.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
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

export default function NewsSlider() {
    const data = useStaticQuery(getNews)

    return (
        <Swiper
        // install Swiper modules
        modules={[Pagination, A11y]}
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
        pagination={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
          {data.allContentfulNews.nodes.map((entry) => (
            <SwiperSlide>
                <Link className="newsLink" to={"/news/" + entry.slug}>
                    { entry.header == null ? 
                    (
                        <>
                        <Overlay style={{backgroundColor: entry.colorHeader}}>
                            <Title>{entry.title}</Title>
                            <ReadMore>Read more</ReadMore>
                        </Overlay>
                        </>
                    ) : 
                    (
                    <>
                        <Overlay style={{background: "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(" + entry.header.fixed.src + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                            <Title>{entry.title}</Title>
                            <ReadMore>Read more</ReadMore>
                        </Overlay>
                    </>
                    )}
                </Link>
            </SwiperSlide>
          ))}
            <SwiperSlide>                
                <Link className="newsLink" to={"/news"}>
                <SeeMore>
                    <Title>All the updates</Title>
                    <ReadMoreWhite>Open</ReadMoreWhite>
                </SeeMore>
                </Link>
                </SwiperSlide>
      </Swiper>
    )
}


const getNews = graphql`
  query getNewsMessages {
    allContentfulNews(sort: {order: DESC, fields: createdAt}, limit: 12) {
      nodes {
        title
        slug
        colorHeader
        header {
            fluid(maxWidth: 1920, maxHeight: 1080, quality: 80) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            fixed(quality: 100){
              src
            }
          }
      }
    }
  }
`