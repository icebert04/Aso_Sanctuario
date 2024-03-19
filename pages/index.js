// pages/index.js

import Head from 'next/head';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Challenge from './components/challenges';
import FAQ from './components/FAQ';

import MeetTheTeam from './components/team';
import Solution from './components/solutions';
import Population from './components/population';

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
      <Population/>
      <Solution/>

      <FAQ/>  

      <MeetTheTeam/>

      <Footer />
    </div>
  );
}
