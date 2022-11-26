import type { ReactElement } from 'react'
import Layout from '../components/layouts/'
import type { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      hello
    </Layout>
  )
}

export default Page