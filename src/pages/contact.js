import React from 'react';

import Layout from '../components/layout';
import TextInput from '../components/text-input';

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
