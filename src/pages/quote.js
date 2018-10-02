import React from 'react';

import Layout from '../components/layout';
import Input from '../components/input';

const QuotePage = () => (
  <Layout>
    <h1>Request a Quote</h1>

    <form
      className="w-full my-8"
      name="quote"
      method="post"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="quote" />
      <input type="hidden" name="bot-field" />

      <Input name="name" />
      <Input name="email" type="email" />
      <Input name="phone" />
      <Input name="message">
        <textarea name="message" rows="6" />
      </Input>

      <button type="submit" className="btn">
        Send
      </button>
    </form>
  </Layout>
);

export default QuotePage;
