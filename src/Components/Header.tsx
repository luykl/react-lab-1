import './Header.css';

interface Prop {
    user:string;
}

function Header ({user}:Prop) {
    const displayName:string = user
    
    return (
        <div className="header">
        <h1>Ice Cream Wars</h1>
        <p className="welcomeUser">Welcome {displayName}</p>

        </div>
    )

}

export default Header;