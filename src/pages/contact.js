import React from 'react';

import Layout from '../components/layout';

const Cap = str => str.charAt(0).toUpperCase() + str.slice(1);

const TextInput = ({ name, children }) => (
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/6">
      <label
        htmlFor={name}
        className="block text-grey-darker font-bold mb-1 md:mb-0 pr-4">
        {Cap(name)}
      </label>
    </div>
    <div className="md:w-2/3">
      {children ? (
        children
      ) : (
        <input type="text" className="w-full" name={name} />
      )}
    </div>
  </div>
);

const SecondPage = () => (
  <Layout>
    <h1>Request a Quote or Contact Us</h1>

    <form
      className="w-full my-8"
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      netlify>
      <input type="hidden" name="bot-field" />

      <TextInput name="name" />
      <TextInput name="email" />

      <TextInput name="message">
        <textarea name="message" rows="6" />
      </TextInput>

      <button type="submit" className="btn">
        Send
      </button>
    </form>
  </Layout>
);

export default SecondPage;
