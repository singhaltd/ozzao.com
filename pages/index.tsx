import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>OZZAO</title>
        <meta property="og:url" content="https://www.ozzao.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ຊື້ເຄື່ອງອອນລາຍ ໂອຊາວ ລາຄາຖືກຈັດສົ່ງວ່ອງໄວ ແລະ ໃສ່ໃຈການບໍລິການ" />
        <meta property="og:description" content="ຊື້ເຄື່ອງອອນລາຍ ແລະ ສ້າງລາຍໄດ້" />
        <meta property="og:image" content="//laz-img-cdn.alicdn.com/tfs/TB1PApewFT7gK0jSZFpXXaTkpXa-200-200.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ຂໍອະໄພ ຈະກັບມາໃຊ້ງານໃນ ໄວໆນີ້.
        </h1>

        <p className={styles.description}>
          ໃນລະຫ່ວາງພວກເຮົາກຳລັງພັດທະນາທ່ານສາມາດຕິດຕໍ່ຊື້ ຜ່ານ Page OHZAO ໄດ້ຕະຫຼອດເວລາ
        </p>

        <div className={styles.grid}>
          <a href="https://www.facebook.com/ohzaocm" className={styles.card}>
            <h2>Facebook Page &rarr;</h2>
            <p>ກວດເບິ່ງສິນຄ້າເຂົ້າໃໝ່ ແລະ ຊື້ໄດ້ຕະຫລອດເວລາ</p>
          </a>
        </div>
      </main>
    </div>
  )
}
