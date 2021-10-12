import * as React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BGImageSlant from '../components/BGImageSlant';
import '../styles/pages/homepage.css'
import TwoButtons from '../components/buttons/TwoButtons';
import Spacer from '../components/spacer/Spacer';
import Speerpunten from '../components/speerpunten/Speerpunten';
import SectionTitle from '../components/titles/SectionTitle';
import FractieRij from '../components/fractie/FractieRij';

const HomePage = () => {
  return (
      <BaseLayout>
        <BGImageSlant>
          <div className="heroText">
            <h1 className="heroTitle">DAS Eindhoven</h1>
            <p>DAS focusses on the ambitious students like </p>
            <p>yourself that want to develop themselves </p>
            <p>alongside their studies.</p>
            <Spacer spacing={2}/>
            <TwoButtons text1="Standpunten" text2="Fractie" url1="/contact" url2="/party/fraction"></TwoButtons>
          </div>
        </BGImageSlant>

        <SectionTitle title="Vision"/>

        <Spacer spacing={2}/>

        <Speerpunten/>

        <Spacer spacing={6}/>

        <SectionTitle title="Our Fraction"/>

        <Spacer spacing={2}/>

        <FractieRij/>

        <Spacer spacing={4}/>

      </BaseLayout>
  )
}

export default HomePage;