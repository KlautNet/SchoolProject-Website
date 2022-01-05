export interface Props {
    posts: [];
}

export interface Post {
    id: number,
    content: Text,
    author_id: number,
    created_at: number,
    category: Text,
    title: Text
}

export const Posts: React.FC<Props> = ({posts}: Props) => {
    return (
        <div className="posts-wrapper">
            <div className="columns">
                <div className="column"></div>
                <div className="column">
                    <h1 className="posts-heading">Posts [{posts.length}]</h1>
                    {
                        posts.map((post: Post) => (
                            <div className="post">
                                <div className="post-header">
                                    <div className="label-wrapper">
                                        <div className="posts-label">{post.category}</div>
                                    </div>
                                    
                                    <p>{post.created_at}</p>
                                </div>
                                <h1>{post.title}</h1>
                                <p>{post.content}</p>
                                <div className="post-footer">
                                    <button>Read Full Post</button>
                                    <p>by AuthorID: {post.author_id}</p>
                                </div>
                            </div>
                        ))}
                   
                </div>
                <div className="column"></div>
            </div>
        </div>  
    )
}


