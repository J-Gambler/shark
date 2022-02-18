import './Partnership.scss';
import ClueImage from '../../../assets/images/clue.png';
import Back4Image from '../../../assets/images/back4.png';
import CircleImage from '../../../assets/images/circle-back.png';
import LeafImage from '../../../assets/images/leaf.png';

const images = require.context('../../../assets/images/partnership', true);
const imageCount = 12;
const partnershipImages = [];

for (let i = 1; i <= imageCount; i ++) {
    const image = images(`./${i}.png`);
    partnershipImages.push(image);
}

const Partnership = () => {
    return (
        <div className="partnership">
            <div className="partnership-title-back">Community</div>
            <div className="partnership-header">
                <div className="partnership-header-title">Partnership</div>
                <div className="partnership-header-label">In partnership with the biggest names in the crypto space.</div>
            </div>
            <div className="partnership-back4">
                <img src={Back4Image} />
            </div>
            <div className="partnership-back-circle">
                <img src={CircleImage} />
            </div>
            <div className="partnership-leaf-top">
                <img src={LeafImage} />
            </div>
            <div className="partnership-leaf-bottom">
                <img src={LeafImage} />
            </div>
            <div className="partnership-container">
                {partnershipImages.map( (ele, key) => 
                <div className="partnership-item" key={key}>
                    <img src={ele} />
                </div>
                )}
            </div>
            <div className="partnership-image">
                <img src={ClueImage} />
            </div>
            <div className="partnership-title-back-bottom">Crypto</div>
        </div>
    );
}

export default Partnership;