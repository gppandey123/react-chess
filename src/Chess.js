import React, { Component } from 'react';
import './Chess.css';
import Cell from './Cell';

export default class Chess extends Component {
    state = {
        board:Array(8).fill(null),
        squareRows:Array(8).fill(null),
        row:["a","b","c","d","e","f","g","h"]
       
    }

    handleClick(i) {
         
        const board = this.state.board.slice();
        console.log(i+1, "colom");
          board[i] ="colom";  
     
          this.setState({
              board:board,
       });
     }
   
    sq =  this.state.board.map((item ,index1) => {
           return(
                  <Cell value={index1, this.state.row[index1]} key={index1}
                    click={() => this.handleClick(index1)}/>
           )}
    );
    square = this.state.squareRows.map((item ,index) => {
        return(
            <div className="chess" key={index}>
                  {this.sq}
            </div>
        )
    })
    
   

     
    
   
render(){
   
   
    return(
        <div className="div">
            {this.square}
        </div>
    );
}
    
}