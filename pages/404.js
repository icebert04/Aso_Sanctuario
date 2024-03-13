
import Link from 'next/link';
import Navbar from './components/Navbar';

const Custom404 = () => {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-4">Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className="text-blue-500 hover:underline">Go back to home</Link>
    </div>
    </>
  );
};

export default Custom404;