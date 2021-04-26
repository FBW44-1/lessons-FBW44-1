import React from 'react';
import './styles.css';

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

class LuckyNumbers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nums: [],
            superNumber: null
        }

        this.getLuckyNumbers = this.getLuckyNumbers.bind(this);
        this.resetLuckyNumbers = this.resetLuckyNumbers.bind(this);
    }

    getLuckyNumbers() {
        let numsCount = 6;
        const nums = [];

        // Get unique numbers
        while(numsCount) {
            let newNumer = getRandomIntInclusive(1, 49);

            while (nums.indexOf(newNumer) !== -1) {
                newNumer = getRandomIntInclusive(1, 49);
            }

            nums.push(newNumer);
            numsCount--;
        }

        const superNumber = getRandomIntInclusive(1, 10);

        this.setState({
            nums,
            superNumber
        });
    }

    resetLuckyNumbers() {
        this.setState({
            nums: [],
            superNumber: null
        });
    }

    render() {
        return (
            <div>
                <h1>Lotto 6 / 49</h1>
                <p>Generating lucky numbers</p>

                <p>
                    { 
                        this.state.nums.length !== 0 &&
                        this.state.nums.map((num) => {
                            return (
                                <span className="lucky-number">
                                    {num}
                                </span>
                            )
                        })
                    }

                    {
                        this.state.superNumber &&
                        <span className="lucky-number lucky-number--bonus">
                            {
                                this.state.superNumber
                            }
                        </span>
                    }
                </p>


                <button
                    onClick={this.resetLuckyNumbers}
                    className="button button-reset">
                    Reset
                </button>
                <button
                    type="reset"
                    onClick={this.getLuckyNumbers}
                    className="button">
                    Show me lucky numbers
                </button>
                
                
            </div>
        )
    }
}

export default LuckyNumbers;