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
                                    <br />
                                    <FaLink className="icon"/>
                                    <div className="postpage-post-content-injected">{parse(post.content)} 
                                        <p>Apple hat heute die Gewinner:innen der App Store Awards 2021 bekannt gegeben und würdigt die 15 besten Apps und Spiele, die den Nutzer:innen geholfen haben, persönliche Leidenschaften zu entdecken, sich kreativ zu betätigen, Kontakte zu neuen Menschen zu knüpfen, neue Erfahrungen zu sammeln und einfach Spaß zu haben. Zu den diesjährigen Gewinner:innen gehören Entwickler:innen aus der ganzen Welt, deren Apps und Spiele von Apples globalem App Store-Redaktionsteam für außergewöhnliche Qualität, innovative Technologie, kreatives Design und positiven kulturellen Einfluss ausgewählt worden ist.</p>
                                        <br />
                                        <p className="quote">„Die Entwickler:innen, die die App Store Awards 2021 gewonnen haben, haben ihren eigenen Antrieb und ihre eigene Vision genutzt, um die besten Apps und Spiele des Jahres zu entwickeln – und so die Kreativität und Leidenschaft von Millionen von Nutzer:innen auf der ganzen Welt zu wecken“, sagt Tim Cook, CEO von Apple. „Von autodidaktischen Indie-Programmierer:innen bis hin zu inspirierenden Führungskräften, die globale Unternehmen aufbauen, haben diese herausragenden Entwickler:innen mit Unterstützung von Apple-Technologie Innovationen geschaffen. Viele von ihnen haben dazu beigetragen, ein Gefühl der Zusammengehörigkeit zu fördern, das wir in diesem Jahr benötigt haben.“</p>
                                        <br />
                                        <img src={window.location.origin + '/img/example.jpg'} alt="Test" />
                                        <br />
                                        <a href="https://github.com/KlautNet/recursion-website">TestLink</a>
                                        <br />
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/GFNVKs4xnaY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                   
                                   
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
