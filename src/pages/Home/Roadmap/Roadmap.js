import './Roadmap.scss';
import ClueImage from '../../../assets/images/clue.png';
const roadmap = [
    {
        title: 'Wave1',
        content: 'Whitelisted members of our discord server will be able to buy Surf Shark NFTs for a discounted price of 0.69 Solana.'
    },
    {
        title: 'Wave2',
        content: 'Full release of NFTs, non-whitelisted people on the server will now be able to purchase or mint these Sharks for 0.8 Solana'
    },
    {
        title: 'Wave3',
        content: 'Launch the Home for our very own Shark Holders which will grant them access to a exclusive cryptocurrency club (Shark Shack) where there will be giveaways, cryptocurrency calls, and more.'
    },
    {
        title: 'Wave4',
        content: 'Start partnerships with brands that will allow Surf Shark Society Holders to receive discounts and cash rebates.'
    },
    {
        title: 'Wave5',
        content: 'Develop and launch our very own cryptocurrency (Sharkoin) to be used as the reward system token for our blockchain game (Shark Society)'
    },
    {
        title: 'Wave6',
        content: 'Develop a Play to earn blockchain game (Shark Society) where sharks will fight against each other in different minigames in exchange for our future cryptocurrency (Sharkoin)'
    }
]

const Roadmap = () => {
    return (
        <div className="roadmap">
            <div className="roadmap-title-back">Nft</div>
            <div className="roadmap-title">Roadmap</div>
            <div className="roadmap-container">
                {roadmap.map( (ele, key) => 
                    <div className="roadmap-item" key={key}>
                        <div className="roadmap-item-title">{ele.title}</div>
                        <img src={ClueImage} />
                        <div className="roadmap-item-content">{ele.content}</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Roadmap;