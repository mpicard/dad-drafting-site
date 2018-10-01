import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

import './index.css';

const IndexPage = () => (
  <Layout>
    {/* First Sample */}
    <div className="first-sample m-auto block max-w-full bg-contain bg-center bg-no-repeat" />

    <h2 className="p-8">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam harum cum
      rem ut facilis voluptatum porro minus ipsum? Enim repellat itaque fugiat
      doloribus at cum nesciunt ut labore aliquid mollitia.
    </h2>

    {/* Second Sample */}
    <div className="flex">
      <div className="w-1/2 m-8">
        <div className="second-sample block h-32 max-w-full bg-center bg-cover bg-no-repeat" />
      </div>
      <div className="w-1/2 m-8">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, amet
          optio, natus corrupti id accusantium modi hic reprehenderit esse
          repudiandae error fugiat nostrum exercitationem quia. Omnis
          perferendis nemo itaque. Totam!
        </p>
      </div>
    </div>

    {/* Third Sample */}
    <div className="flex">
      <div className="w-1/2 m-8">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          laborum nisi obcaecati, quidem ex beatae placeat maxime unde provident
          veniam eveniet cumque at consequuntur vel ea inventore id praesentium
          quam.
        </p>
      </div>
      <div className="w-1/2 m-8">
        <div className="third-sample block h-32 max-w-full bg-center bg-cover bg-no-repeat" />
      </div>
    </div>

    {/* Action */}
    <div className="flex justify-center m-8">
      <Link to="/contact" className="btn text-xl py-10 px-20">
        Request a Quote
      </Link>
    </div>
  </Layout>
);

export default IndexPage;
