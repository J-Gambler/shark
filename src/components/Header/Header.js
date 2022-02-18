import './Header.scss'
import LogoImage from '../../assets/images/logo.png';

const Header = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <img src={LogoImage}/>
                </div>
                <div className="links">
                    <div className="nav-link">Home</div>
                    <div className="nav-link">Perks</div>
                    <div className="nav-link">Roadmap</div>
                    <div className="nav-link">Partners</div>
                    <div className="nav-link">Team</div>
                </div>
            </div>
        </div>   
    );
}

export default Header;