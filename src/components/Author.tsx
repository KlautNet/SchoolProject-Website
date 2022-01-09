import { NavLink, useParams } from "react-router-dom"
import IPost from "../interfaces/IPost"

export interface Props {
    posts: IPost[];
    isLoading: boolean,
    fetchError: string,
}

export const Author : React.FC<Props> = ({fetchError, isLoading, posts}: Props) => {
    
    const {author} = useParams();
    const author_posts = posts.filter((post:IPost) => post.author === author);
    console.log(author_posts);

    return (
        <div className="posts-wrapper">
            <div className="columns">
                <div className="column"></div>
                <div className="column">
                    <h1 className="posts-heading">{author} - Posts [{author_posts.length}]</h1>
                        {isLoading && <div className="notification is-primary"><p>Loading Posts... </p></div>}
                        {fetchError && <div className="notification is-danger"><p>{`Error: ${fetchError}`}</p></div>}
                    {
                        author_posts.map((post: IPost) => (
                            <div className="post" key={post.id}>
                                <div className="post-header">
                                    <div className="label-wrapper">
                                        <div className="posts-label">{post.category}</div>
                                        <p className="post-date">{post.created_at}</p>
                                    </div>    
                                </div>
                                <div className="post-content-wrapper">
                                    <NavLink className="post-content-link" to={`/post/${post.id}`}> 
                                        <div className="post-content">
                                            <h1>{post.title}</h1>
                                            {/**
                                             * <p>{post.content.split(' ').slice(0, 20).join(' ')}...</p>
                                             */}
                                        </div>
                                    </NavLink>
                                </div>  
                               
                                <div className="post-footer">
                                    
                                    <NavLink className="author-link" to={`/post/${post.id}`}>Read full post</NavLink>
                                </div>
                            </div>
                        ))}
                   
                </div>
                <div className="column"></div>
            </div>
        </div>  
    )
}

