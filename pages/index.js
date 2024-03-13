// pages/index.js

import Head from 'next/head';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Challenge from './components/challenges';
import FAQ from './components/FAQ';
import HowItWorks from './components/info';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dog Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Header />
      </main>

      <Challenge/>
    
      <HowItWorks/>

      <FAQ/>  

      <Footer />
    </div>
  );
}
