import { useEffect } from "react";
import { useParams } from "react-router-dom";
import IPost from "../interfaces/IPost"
import { NavLink } from "react-router-dom";
import parse from "html-react-parser";
import { FaLink } from "react-icons/fa";

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
    }, [isLoading, temp])

    return (
        <div className="postpage">
            { isLoading ? <div className="notification is-primary"><p>Lade Posts... </p></div> : (
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
                                    <br />
                                    <FaLink className="icon"/>
                                    <div className="postpage-post-content-injected">{parse(post.content)} 
                                       <h3>Algorithmen</h3>
                                       <p>Um rekursive und iterative Algorithmen zu vergleichen habe ich einen Binären Suchalgorithmus einmal iterativ (oben) und einmal rekursiv (unten) umgesetzt.</p>
                                       <br />
                                       <iframe width="100%" height="700px" src="https://replit.com/@KlautNet/Binary-Search-Iterative?lite=true"></iframe>
                                       <br />
                                       <br />
                                       <iframe width="100%" height="700px" src="https://replit.com/@KlautNet/Rekursion-Binary-Search?lite=true"></iframe>
                                    </div>                         
                                </div>
                                <div className="postpage-post-footer">
                                    <NavLink className="postpage-link" to={`/post/${post.id > 0 ? post.id-1 : post.id}`}>Vorheriger Eintrag</NavLink>
                                    <NavLink className="postpage-link" to={`/post/${post.id+1}`}>Nächster Eintrag</NavLink>
                                    <NavLink className="postpage-link" to={`/author/${post.author}`}>Verfasst von {post.author}</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="column"></div>
                    </div>
                ) 
            }
            {fetchError && <div className="notification is-danger"><p>{`Fehler: ${fetchError}`}</p></div>}
            
        </div>
    )
}
