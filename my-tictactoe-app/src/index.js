import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


class Square extends React.Component {
    //give each square memory but leveraging state. Using this.state in a constructor is a way to keep the memories private to the react component it's define in

    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }
    //now, with every square rendered via the board component, there is an empty memory "bin"

	render() {
		return (
        <button 
            className='square' 
            onClick={() => 
            this.setState({value: 'X'})}>
        {this.state.value}
        </button>
        );
	}
}

class Board extends React.Component {
	renderSquare(i) {
		return <Square value={i}  />;
	}

	render() {
		const status = "Next player: X";

		return (
			<div>
				<div className='status'>{status}</div>
				<div className='board-row'>
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className='board-row'>
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className='board-row'>
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

class Game extends React.Component {
	render() {
		return (
			<div className='game'>
				<div className='game-board'>
					<Board />
				</div>
				<div className='game-info'>
					<div>{/* status */}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
