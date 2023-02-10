import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/navbar';

const name = '999 Footwear';
export const siteTitle = '999 Footwear';

export default function Layout({ children, home }) {
  return (
    <div className="bg-gradient-to-b from-black">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className="">
        <Navbar open={true}/>
      </header>
      <main>{children}</main>
      {!home && (
        <div className="m-3">
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}