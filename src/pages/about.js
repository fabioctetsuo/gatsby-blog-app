import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
// import { Container } from './styles';

const AboutPage = () => (
  <Layout>
    <SEO title="About"/>
    <h1>About Page!</h1>
    <ul>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about" activeStyle={{ color: 'red' }}>About (gatsby)</Link>
      </li>
    </ul>
  </Layout>
);

export default AboutPage;
