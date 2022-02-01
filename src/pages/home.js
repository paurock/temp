import { Link } from "react-router-dom";

export default function Home() {
    return (
        <nav style={{marginLeft:"30px"}}>
            <h2><Link to="/signin">Signin</Link></h2>
            <h2><Link to="/bag">Bag</Link></h2>            
        </nav>
    )
}