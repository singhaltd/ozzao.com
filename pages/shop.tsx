import Head from 'next/head'
import Image from "next/image";
import HomeCarousel from '../components/carousel/HomeCarousel'
import PupoverUser from '../components/navbar/pupoverUser'
import { useRive } from '@rive-app/react-canvas';
import SearchDialog from '../components/search/DialogSearch';
import OZFooter from '../components/footer/ozfooter';

export default function shops({ data }) {
    const { rive, RiveComponent } = useRive({
        src: 'https://cdn.rive.app/animations/vehicles.riv',
        autoplay: false,
    });
    return (
        <>
            <Head>
                <title>OZZAO</title>
                <meta property="og:url" content="https://www.ozzao.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="ຊື້ເຄື່ອງອອນລາຍ ໂອຊາວ ລາຄາຖືກຈັດສົ່ງວ່ອງໄວ ແລະ ໃສ່ໃຈການບໍລິການ" />
                <meta property="og:description" content="ຊື້ເຄື່ອງອອນລາຍ ແລະ ສ້າງລາຍໄດ້" />
                <meta property="og:image" content="//laz-img-cdn.alicdn.com/tfs/TB1PApewFT7gK0jSZFpXXaTkpXa-200-200.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            </Head>
            <nav>
                <div className='oz-contianer mx-auto'>
                    <div className='flex max-h-[50px]'>
                        <div className='relative flex gap-2 py-1'>
                            <img src='./android-chrome-512x512.png' className='h-full' />
                            <div className='font-semibold'>
                                <div>OZZAO</div>
                                <p className='text-xs'>ຊື້ງ່າຍ ໃສ່ໃຈບໍລິການ</p>
                            </div>
                        </div>
                        <div className='py-2'>
                            <div className='flex bg-slate-200 h-full w-full px-5 rounded-xl'>
                                <div className=''>ກະເປົາທ່ານຍິງ</div>
                            </div>
                        </div>
                        <div>
                            <div className=''>
                                <PupoverUser />
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
            <section>
                <span className='sr-only'>carousel</span>
                <div className='oz-contianer'>
                    <HomeCarousel />
                </div>
            </section>
            <section>
                <span className='sr-only'>category</span>
                <div className='oz-contianer'>
                    <div>
                        <div>

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <span className='sr-only'>product</span>
                <div className='oz-contianer'>
                    <div className='grid grid-cols-5 gap-2'>
                        {data && data.products.map((t, i) => {
                            return (
                                <div key={i} className="hover:border border">
                                    {/* <img src={t.thumbnail} alt={t.title} /> */}
                                    <div className="w-full h-[171px] object-center overflow-hidden">
                                        <Image
                                            src={t.thumbnail}
                                            alt={t.title}
                                            width={171}
                                            height={171}
                                            layout="responsive"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* {JSON.stringify(t)} */}
                                    <div><p>{t.title}</p></div>
                                    <div>
                                        <h1>{t.price}</h1>
                                        <p>{t.price}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </section>
            <SearchDialog />
            <OZFooter />
        </>
    )
}


export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://dummyjson.com/products?limit=100&skip=10`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}