import React from 'react';

import Layout from '../components/layout';
import Input from '../components/input';
import './contact.css';

const ContactPage = () => (
  <Layout>
    <h1>Contact Us</h1>

    <ul className="list-reset p-4">
      <li>
        <a href="mailto:mpicard100@gmail.com">via Email</a>
      </li>
      <li>
        <a href="tel:+17054949906">via Telephone (+1 705 494 9906)</a>
      </li>
    </ul>

    <form
      className="w-full my-8"
      name="contact"
      method="post"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />

      <h2 className="mb-6">Contact Form</h2>

      <Input name="name" />
      <Input name="email" type="email" />
      <Input name="phone" />
      <Input name="message">
        <textarea name="message" rows="6" />
      </Input>

      <button type="submit" className="btn ml-4">
        Send
      </button>
    </form>
  </Layout>
);

export default ContactPage;
