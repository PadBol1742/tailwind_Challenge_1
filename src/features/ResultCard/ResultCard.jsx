
const ResultCard = () => {
    return (
        <section className='card'>
            <div className="blue-box-container">
                <h2 className="blue-box-title">Your Result</h2>
                <div className="score-area">
                    <p className="score-result">76</p>
                    <p className="score-total">of 100</p>
                </div>
                <div className="response-score-area">
                    <p className="response-score-grade">Great</p>
                    <p className="response-score-text">You scored higher than 65% of the people who have taken these tests.</p>
                </div>
            </div>
            <div className='white-box-container'>
                <h2 className="white-box-title">Summary</h2>
                <ul className="white-box-ul">
                    <li className="white-box-li red">
                        <p>
                            <img className="icon" src="src/assets/images/icon-reaction.svg" alt="un petit éclair" />
                            <span>Reaction</span>
                        </p>
                        <p className="black">80 <span className="gray">/ 100</span></p>
                    </li>
                    <li className="white-box-li yellow">
                        <p>
                            <img className="icon" src="src/assets/images/icon-memory.svg" />
                            <span>Memory</span>
                        </p>
                        <p className="black">92 <span className="gray">/ 100</span></p>
                    </li>
                    <li className="white-box-li green">
                        <p>
                            <img className="icon" src="src/assets/images/icon-verbal.svg" />
                            <span>Verbal</span>
                        </p>
                        <p className="black">61 <span className="gray">/ 100</span></p>
                    </li>
                    <li className="white-box-li blue">
                        <p>
                            <img className="icon" src="src/assets/images/icon-visual.svg" />
                            <span>Visual</span>
                        </p>
                        <p className="black">73 <span className="gray">/ 100</span></p>
                    </li>
                </ul>
                <button className="btn">Continue</button>
            </div>
        </section>
    );
};

export default ResultCard;