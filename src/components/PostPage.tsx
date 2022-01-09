import { useEffect } from "react";
import { useParams } from "react-router-dom";
import IPost from "../interfaces/IPost"
import { NavLink } from "react-router-dom";
import parse from "html-react-parser";

export interface Props {
    posts: IPost[],
    getPost: Function,
    isLoading: boolean,
    fetchError: string,
    post: IPost;
}

export const PostPage: React.FC<Props> = ({fetchError, isLoading, getPost, posts, post}: Props) => {
    
    const {id} = useParams();
    let temp = Number(id);
    
    useEffect(() => {
        getPost(temp);
        console.log(post.content)
    }, [isLoading, temp])

    return (
        <div>
            { isLoading ? <div className="notification is-primary"><p>Loading Post... </p></div> : (
                post.title === "" || post === undefined ? <div className="notification is-danger"><p>{`Error: There is no such post with ID: ${temp}`}</p></div> :
                    <div className="columns">
                        <div className="column"></div>
                        <div className="column is-two-thirds">
                            <div className="postpage-post">
                                <div className="postpage-post-header">
                                    <p className="postpage-post-category">{post.category}</p>
                                    <p className="postpage-post-date">{Date.parse(String(post.created_at)).toLocaleString()}</p>
                                </div>
                                <div className="postpage-post-content">
                                    <h1>{post.title}</h1>
                                    <div className="postpage-post-content-injected">{parse(post.content)}</div>
                                    
                                </div>
                                <div className="postpage-post-footer">
                                    <NavLink className="postpage-link" to={`/post/${post.id > 0 ? post.id-1 : post.id}`}>Previous</NavLink>
                                    <NavLink className="postpage-link" to={`/post/${post.id+1}`}>Next</NavLink>
                                    <NavLink className="postpage-link" to={`/author/${post.author}`}>Written by {post.author}</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="column"></div>
                    </div>
                ) 
            }
            {fetchError && <div className="notification is-danger"><p>{`Error: ${fetchError}`}</p></div>}
            
        </div>
    )
}
