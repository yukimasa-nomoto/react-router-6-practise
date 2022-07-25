import {useNavigate} from 'react-router-dom'

export default function About(){

    const navigate = useNavigate()

    return (
        <>
            <h2>About</h2>
            <button onClick={() => navigate('/contact')}>Contact</button>
        </>
    )
}