import { getPost } from "../models/posts.server"

export async function loader ({params}){
    const { postUrl } = params
    const post = await getPost(postUrl)
    if(post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'No post found'
        })
    }

    return post
}

function Post() {
  return (
    <div>
      post url
    </div>
  )
}

export default Post
