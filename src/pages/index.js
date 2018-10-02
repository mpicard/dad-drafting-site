import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

import './index.css';

const IndexPage = () => (
  <Layout>
    {/* First Sample */}
    <div className="first-sample m-auto block w-full bg-contain bg-center bg-no-repeat" />

    <p className="text-2xl font-light tracking-wide p-8">
      Over 40 years experience in high quality commercial drafting. Competitive
      pricing on large or small projects with quick turn around. Our goal is to
      provide the highest level of quality and service.
    </p>

    {/* Second Sample */}
    <div className="flex items-center">
      <div className="w-1/2 m-8">
        <div className="second-sample block max-w-full bg-center bg-contain bg-no-repeat" />
      </div>
      <div className="w-1/2 m-8">
        <p>
          Professional drawings for kitchen cabinets and architectural millwork.
          With over 40 years experience in cabinetry, we provide floor plans,
          elevations, section details, finish and hardware schedules for all
          projects.
        </p>
      </div>
    </div>

    {/* Third Sample */}
    <div className="flex items-center">
      <div className="w-1/2 m-8">
        <p>
          Drawings or specifications can be sent over email or DropBox. We will
          provide a quotation and timeframe. Once approved and downpayment is
          received, we will draw and send a copy for review. Any corrections
          will be drawn and sent for review again. Once the final copy and
          payment is complete, all the CAD files will be supplied. Please
          include shop standards.
        </p>
      </div>
      <div className="w-1/2 m-8">
        {/* TODO: update third-sample picture */}
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
