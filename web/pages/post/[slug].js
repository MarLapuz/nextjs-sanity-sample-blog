import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

import client from '../../client'

const query = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    "name": author->name,
    "categories": categories[]->title,
    body
}`

const urlFor = source => {
    return imageUrlBuilder(client).image(source)
}

const Post = (props) => {
    const {
        title = 'Missing title',
        name = 'Missing name',
        categories,
        authorImage,
        body = []
    } = props

    return (
        <div>
            <h1>{title}</h1>
            <span>By {name}</span>
            {categories && (
                <ul>
                    {categories.map(category => <li key={category}>{category}</li>)}
                </ul>
            )}
            {authorImage && (
                <div>
                <img
                    src={urlFor(authorImage)
                    .width(50)
                    .url()}
                />
                </div>
            )}
            <BlockContent
                blocks={body}
                imageOptions={{ w: 320, h: 240, fit: 'max' }}
                {...client.config()}
            />
        </div>
    )
}

Post.getInitialProps = async function(context) {
    const { slug = '' } = context.query
    return await client.fetch(query, {slug})
}

export default Post