import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
//import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Image from 'next/image';
import { promises as fs } from 'fs';
import path from 'path';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import styles from '../styles/Button.module.css';


export default function Home ({ products }) { 
  
   return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="m-0 md:m-10">
        <div className="items-center lg:flex lg:flex-row m-20 pb-20">
          <div className="lg:flex-col ">
            <div className="text-5xl font-extrabold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f6f6f6] to-black-900">
                Belive it or not...
              </span>
            </div>
            <div className="mt-10 text-5xl font-extrabold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-600">
                  New RTFKT sneakers in tha house
                </span>
            </div>
          </div>
          <div className="lg:flex-col">
              <Image
                priority
                src="/images/shoes/zapasinfondo.png"
                className=""
                height={600}
                width={800}
                alt=""
              />
          </div>
        </div>
      </section>
      <section className="bg-[#050505]">
        <div className="py-10 px-20 text-5xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-600">
              Latest releases
            </span>
        </div>
        <div className="flex flex-col md:flex-row my-10 mx-20 justify-between">
        {products.shoes.map((product) => (
            <div key={product.id} className="flex-row my-2 mb-20 bg-[#f7f7f7] rounded-md md:flex-col md:mx-2">
              <div className="group relative m-3">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-[#f6f6f6] group-hover:opacity-75 lg:aspect-none">
                  <Image
                      src={product.image}
                      className=""
                      height={600}
                      width={600}
                      alt=""
                    />
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="flex-col ml-2 lg:ml-5">
                    <h3 className="text-sm text-gray-800">
                        {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                  </div>
                  <div className="flex-col mr-2 lg:mr-5">
                    <p className="text-sm text-right font-medium text-gray-900 mb-3 mr-1 lg:mr-1">{"$" + product.price}</p>
                    <div className={styles.wrapper}>
                      <div className={styles.buttonp}> +
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        ))}  
        </div>
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
              {date}
              </small>
            </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  );
}

/* export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
} */

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'posts/products.json')
  const products = await fs.readFile(filePath, 'utf8')

  return {
    props: {
      products: JSON.parse(products),
    },
  }
}