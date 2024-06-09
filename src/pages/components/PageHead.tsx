import { TPageSeo } from '@/common/types'
import Head from 'next/head'
import React from 'react'

const PageHead: React.FC<TPageSeo> = (props: TPageSeo) => {
  return (
    <Head>
      <title>{props?.title}</title>
      <meta name="description" content={props?.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href={props?.favIconText ? props?.favIconText : props?.favIconImage} type="image/x-icon" rel="icon" />
      <meta name="thumbnail" content={props?.thumbnail} />
      <meta name="robots" content={props?.robots} />
      <link rel="canonical" href={props?.canonicalLink} />
      <meta name="og:url" property="og:url" content={props?.canonicalLink} />
      <meta name="og:title" content={props?.title} />
      <meta property="og:description" content={props?.description} />
      <meta property="og:image" content={props?.ogImage} />
    </Head>
  )
}

export default PageHead