import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

import './index.css';

const IndexPage = () => (
  <Layout>
    {/* First Sample */}
    <div className="first-sample m-auto block w-full bg-contain bg-center bg-no-repeat" />

    <p className="text-2xl font-light tracking-wide p-8">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam harum cum
      rem ut facilis voluptatum porro minus ipsum? Enim repellat itaque fugiat
      doloribus at cum nesciunt ut labore aliquid mollitia.
    </p>

    {/* Second Sample */}
    <div className="flex items-center">
      <div className="w-1/2 m-8">
        <div className="second-sample block max-w-full bg-center bg-contain bg-no-repeat" />
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
    <div className="flex items-center">
      <div className="w-1/2 m-8">
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          laborum nisi obcaecati, quidem ex beatae placeat maxime unde provident
          veniam eveniet cumque at consequuntur vel ea inventore id praesentium
          quam.
        </p>
      </div>
      <div className="w-1/2 m-8">
        <div className="third-sample block max-w-full bg-center bg-contain bg-no-repeat" />
      </div>
    </div>

    {/* Action */}
    <div className="mx-auto my-8">
      <Link to="/contact" className="btn text-xl py-10 px-20">
        Request a Quote
      </Link>
    </div>
  </Layout>
);

export default IndexPage;
