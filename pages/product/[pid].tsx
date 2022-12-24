import { useRouter } from 'next/router'
import Image from 'next/image';
import Head from 'next/head'
import Link from 'next/link'
import Rive from '@rive-app/react-canvas';
export default function ProductDetail({ data, data1, comments }) {
    const IndexImage = 0;


    const hoverViewImage = (index) => {
        console.log(index)
    }

    return (
        <>
            <Head>
                <title>OZZAO- {data.title}</title>
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
            <section>
                {/* {JSON.stringify(data)} */}
                <div className='oz-contianer'>
                    <div className='flex'>
                        <div >
                            <Image
                                className='w-[450px] h-[540px]'
                                src={data.thumbnail}
                                alt={data.images[IndexImage]}
                                width={171}
                                height={171}
                                layout="responsive"
                                loading="lazy"
                            />
                            <div className='flex gap-2 mt-3'>
                                {
                                    data.images.map((t, i) => {
                                        return (
                                            <figure className='hover:border-red-500 object-container w-20 h-20 p-2 border rounded-xl'>
                                                <Image
                                                    src={t}

                                                    alt={data.title}
                                                    width={84}
                                                    height={84}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />

                                            </figure>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='px-5'>
                            <h1 className='text-xl text-semibold'>{data.title}</h1>
                            <p className='py-2'>{data.description}</p>
                            <div className='py-5'>
                                <img src="https://lzd-img-global.slatic.net/g/gcp/lazada/4d0fc344-2a63-4ca9-98ff-c108aae10699_ALL-480-72.jpg_720x720q80.jpg_.webp" alt="" />
                            </div>
                            <div className='py-4'>
                                <h1 className='text-[15pt]'>ລາຄາ</h1>
                                <div>
                                    <h1 className='text-[20pt] text-red-600'>{Number(1200000).toLocaleString('en-US')}</h1>
                                    <div>{Number(1200000).toLocaleString('en-US')} <span>-40%</span></div>
                                </div>
                            </div>
                            <label className='py-3'>Colors: </label>
                            <div>
                                <span className='sr-only'>product colr</span>
                                <div className='flex gap-2'>
                                    {
                                        data1.products.map((t, i) => {
                                            return (
                                                <div className='oz-item-choose itm-active '>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className='text-slate-100 rounded-xl p-[2px] w-4 h-4 absolute right-0 bg-green-500' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                    </svg>

                                                    <img src={t.thumbnail} className="object-contain" />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className='py-5'>
                                <p>Quality</p>
                                <div className='border p-1 max-w-[250px]'>
                                    <div className='flex w-full'>
                                        <button className='bg-red-600 px-5 py-2 text-white'>-</button>
                                        <input type="text" value={1} className="text-center w-full" />
                                        <button className='bg-red-600 px-5 py-2 text-white'>+</button>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-5 flex gap-2'>
                                <button className='flex-1 border px-5 py-2'>Add to Cart</button>
                                <button className='flex-1 border px-5 py-2 bg-red-500 text-white'>Buy</button>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-5 mt-5'>
                        <div className='flex-1'>
                            <div className='bg-slate-100'>
                                <ul className='flex'>
                                    <li className='cursor-pointer py-5 px-4 text-gray-500 border-b-8'>Description</li>
                                    <li className='cursor-pointer py-5 px-4 text-gray-500 border-b-8'>Review</li>
                                    <li className='cursor-pointer py-5 px-4 text-gray-500 border-b-8'>Description</li>
                                </ul>
                            </div>
                            <div className='py-2 px-5'>
                                {data.title}
                            </div>
                            <div className='px-5'>
                                <img src="https://lzd-img-global.slatic.net/g/p/9565a93f51d26cd0812b4df46e4372b2.jpg_2200x2200q80.jpg_.webp" alt="" />
                                <Rive src="https://cdn.rive.app/animations/vehicles.riv" className='w-full h-[500px]' />
                            </div>
                            <div>
                                <div className="rounded-lg px-4">
                                    <div className="mb-1 tracking-wide px-4 py-4" >
                                        <h2 className="text-gray-800 font-semibold mt-1">67 Users reviews</h2>
                                        <div className="border-b -mx-8 px-8 pb-3">
                                            <div className="flex items-center mt-1">
                                                <div className=" w-1/5 text-indigo-500 tracking-tighter">
                                                    <span>5 star</span>
                                                </div>
                                                <div className="w-3/5">
                                                    <div className="bg-gray-300 w-full rounded-lg h-2">
                                                        <div className=" w-7/12 bg-indigo-600 rounded-lg h-2"></div>
                                                    </div>
                                                </div>
                                                <div className="w-1/5 text-gray-700 pl-3">
                                                    <span className="text-sm">51%</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center mt-1">
                                                <div className="w-1/5 text-indigo-500 tracking-tighter">
                                                    <span>4 star</span>
                                                </div>
                                                <div className="w-3/5">
                                                    <div className="bg-gray-300 w-full rounded-lg h-2">
                                                        <div className="w-1/5 bg-indigo-600 rounded-lg h-2"></div>
                                                    </div>
                                                </div>
                                                <div className="w-1/5 text-gray-700 pl-3">
                                                    <span className="text-sm">17%</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center mt-1">
                                                <div className="w-1/5 text-indigo-500 tracking-tighter">
                                                    <span>3 star</span>
                                                </div>
                                                <div className="w-3/5">
                                                    <div className="bg-gray-300 w-full rounded-lg h-2">
                                                        <div className=" w-3/12 bg-indigo-600 rounded-lg h-2"></div>
                                                    </div>
                                                </div>
                                                <div className="w-1/5 text-gray-700 pl-3">
                                                    <span className="text-sm">19%</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center mt-1">
                                                <div className=" w-1/5 text-indigo-500 tracking-tighter">
                                                    <span>2 star</span>
                                                </div>
                                                <div className="w-3/5">
                                                    <div className="bg-gray-300 w-full rounded-lg h-2">
                                                        <div className=" w-1/5 bg-indigo-600 rounded-lg h-2"></div>
                                                    </div>
                                                </div>
                                                <div className="w-1/5 text-gray-700 pl-3">
                                                    <span className="text-sm">8%</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center mt-1">
                                                <div className="w-1/5 text-indigo-500 tracking-tighter">
                                                    <span>1 star</span>
                                                </div>
                                                <div className="w-3/5">
                                                    <div className="bg-gray-300 w-full rounded-lg h-2">
                                                        <div className=" w-2/12 bg-indigo-600 rounded-lg h-2"></div>
                                                    </div>
                                                </div>
                                                <div className="w-1/5 text-gray-700 pl-3">
                                                    <span className="text-sm">5%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {
                                    comments.comments.map((t, i) => {
                                        return (
                                            <div className='px-5 border py-5'>
                                                <div className='flex py-2'>
                                                    <div>
                                                        <img src="../android-chrome-192x192.png" className='w-10' alt="" />
                                                    </div>
                                                    <div className="pl-2">
                                                        <p>Full name</p>
                                                        <p>5 Star</p>
                                                    </div>
                                                </div>
                                                <div className='px-5 bg-slate-50 py-2 rounded-xl'>
                                                    {t.body}
                                                </div>
                                            </div>

                                        )
                                    })
                                }

                            </div>
                        </div>
                        <div className='flex-none w-64'>
                            <div>
                                {
                                    data1.products.map((t, i) => {
                                        return (
                                            <Link href={`/product/${t.id}`} className="hover:border border shadow-md">

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

                                                <div className='p-2'>
                                                    <div><p>{t.title}</p></div>
                                                    <div>
                                                        <h1 className='text-xl text-red-500'>{t.price}</h1>
                                                        <p className='text-slate-400'>{t.price}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        )

                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export async function getServerSideProps(context) {

    const productId = context.params.pid
    // Fetch data from external API
    const res = await fetch(`https://dummyjson.com/products/${productId}`)
    const data = await res.json()

    const res1 = await fetch(`https://dummyjson.com/products?limit=6&skip=6`)
    const data1 = await res1.json()
    const res2 = await fetch(`https://dummyjson.com/comments?limit=10&skip=10`)
    const comments = await res2.json()


    // Pass data to the page via props
    return { props: { data, data1, comments } }
}




