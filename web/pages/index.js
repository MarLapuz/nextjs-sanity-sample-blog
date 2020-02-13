import Link from 'next/link'
import groq from 'groq'

import client from '../client'

const Index = (props) => {
    const { posts = [] } = props

    return (
      <div>
        <h1>Welcome to a blog!</h1>
        {console.log(props)}
        {posts.map((post, i) => {
            return (
                <li key={i}>
                    <Link href="/post/[slug]" as={`/post/${post.slug.current}`}>
                        <a>{post.title}</a>
                    </Link>
                    <p>{new Date(post._updatedAt).toDateString()}</p>
                </li>
            )
        }
        )}
      </div>
    )
}

Index.getInitialProps = async () => ({
    posts: await client.fetch(groq`
        *[_type == "post" && _createdAt < now()]|order(_createdAt desc)
    `)
})

export default Index