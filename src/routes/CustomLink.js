import { useResolvedPath , useMatch, Link } from "react-router-dom";


export default function CustomLink({children,to,...props}){
    let resolved = useResolvedPath(to)
    let match = useMatch({
        path:resolved.pathname,
        end:true
    })
    return(
        <div>
            <Link style={{color: match?'blue':'none'}} to={to} {...props}>
                {children}
            </Link>
        </div>
    )

}