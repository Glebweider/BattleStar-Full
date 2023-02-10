import Head from 'next/head';
import { IHeaderMeta } from './Interface/Meta.interface';
import { FC } from 'react'

const HeaderMeta: FC<IHeaderMeta> = ({title_description, description}) => {
    if(title_description) {
        title_description = `| ${title_description}`
    } else {
        title_description = ''
    }
    if (description) {
        description = ''
    } else {
        description = 'BattleStar cross platform, CSGO'
    }
    return (
        <Head>
            <title>{`BattleStar ${title_description}`}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.png" />
        </Head>
    )
}

export default HeaderMeta
