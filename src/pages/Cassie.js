import React from 'react';

import Layout from '../components/Layout';
import cassietech from '../assets/images/cassie-tech.jpg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>Cassie</h1>
        <div className="flex-container">
          <div className="image-container">
            <span className="image main">
              <img src={cassietech} alt="" />
            </span>
          </div>
          <div className="socials-container">
            <h2>Click the icons to follow Cassie's work</h2>
            <div className="social-icons">
              <i class="fa fa-codepen"></i>
              <i class="fa fa-twitter"></i>
              <i class="fa fa-github"></i>
            </div>
          </div>
        </div>
        <p>
          Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis
          sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit
          amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat.
          Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna
          ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien
          risus, commodo eget turpis at, elementum convallis elit. Pellentesque
          enim turpis, hendrerit tristique.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus
          rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh
          porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc
          ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit
          sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris,
          fringilla in aliquam at, euismod in lectus. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. In non lorem sit amet elit placerat maximus. Pellentesque
          aliquam maximus risus, vel venenatis mauris vehicula hendrerit.
        </p>
        <p>
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent
          rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo
          mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget
          turpis at, elementum convallis elit. Pellentesque enim turpis,
          hendrerit tristique lorem ipsum dolor.
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
