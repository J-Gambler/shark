import './Team.scss';
import LeafImage from '../../../assets/images/leaf.png';

const images = require.context('../../../assets/images/team', true);
const imageCount = 6;
const team = [];
const names = [
    'Kenri Matthew Ang',
    'Pia Cassandra Bautista',
    'Jazer Oliver Sy',
    'Aniceto Jose Cajigal',
    'John Trecy Gonzales',
    'Mark Angelo Alvinez'
]

for (let i = 1; i <= imageCount; i ++) {
    const image = images(`./${i}.png`);
    team.push({
        image: image,
        name: names[i - 1],
    });
}

const Team = () => {
    return (
        <div className="team">
            <div className="team-container">
                <div className="team-header">
                    <div className="team-header-label">Our team</div>
                    <div className="team-header-title">Behind the 
                        <span className="team-header-highlight"> sharks</span>
                    </div>
                </div>
                <div className="team-leaf-top">
                    <img src={LeafImage} />
                </div>
                <div className="team-leaf-bottom">
                    <img src={LeafImage} />
                </div>
                <div className="team-cards">
                    {team.map( (ele, key) => 
                    <div className="team-card" key={key}>
                        <div className="team-card-avatar">
                            <img src={ele.image} />
                        </div>
                        <div className="team-card-title">
                            {ele.name}
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Team;