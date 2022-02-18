import './Dashboard.scss';
import ClueImage from '../../../assets/images/clue.png';
import DiscordImage from '../../../assets/images/discord.png';
import InstagramImage from '../../../assets/images/instagram.png';
import TwitterImage from '../../../assets/images/twitter.png';
import FacebookImage from '../../../assets/images/facebook.png';
import Shark3Image from '../../../assets/images/shark3.png';
import LeafImage from '../../../assets/images/leaf.png';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard-container">
                <div className="dashboard-title-back">SURF</div>
                <div className="dashboard-content">
                    <div className="dashboard-content-top-leaf">
                        <img src={LeafImage} />
                    </div>
                    <div className="dashboard-mint-title">
                        Salutations,<br />
                        Surf <span className="dashboard-mint-highlight">Shark</span><br />
                        Society!<br />
                    </div>
                    <div className="dashboard-mint-clue">
                        <img src={ClueImage} />
                    </div>
                    <div className="dashboard-mint-control">
                        <div className="dashboard-mint-button">Minting Soon</div>
                        <div className="dashboard-mint-caption">9 Days 17Hrs 55Min</div>
                    </div>
                </div>
                <div className="dashboard-title-back-bottom">Shark</div>
                <div className="dashboard-socials">
                    <div className="dashboard-socials-link">
                        <img src={DiscordImage} />
                    </div>
                    <div className="dashboard-socials-link">
                        <img src={InstagramImage} />
                    </div>
                    <div className="dashboard-socials-link">
                        <img src={TwitterImage} />
                    </div>
                    <div className="dashboard-socials-link">
                        <img src={FacebookImage} />
                    </div>
                    <div className="dashboard-socials-leaf">
                        <img src={LeafImage} />
                    </div>
                </div>
                <div className="dashboard-shark">
                    <img src={Shark3Image} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;