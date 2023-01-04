import React, { useState } from 'react'


function Board() {
    const [turn, setTurn] = useState("x")
    const [cells, setCells] = useState(Array(9).fill(""))
    const [winner, setWinner] = useState("")
   
    const winningPostions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    let squares = [...cells]
    const checkForWinner = () => {
        winningPostions.map((position) => {
            let [a, b, c] = position
            if (cells[a] && cells[a] === cells[b] && cells[b] === cells[c]) {
                setWinner(`${cells[a]} qalibdir`)
              
            }
            let emptyCells=cells.filter((a)=>!a)
            if(!emptyCells.length && !winner){
                setWinner("hec hece")
            }
        })
    }
    const handleClick = (num) => {
       if(winner){
        return
       }
        if (turn === "x") {
            squares[num] = "x"
            setTurn("o")
        }
        else {
            squares[num] = "o"
            setTurn("x")
        }
        setCells(squares)
    }
    const Cell = ({ num }) => {
       
        checkForWinner()
        return (

            <td onClick={() => { handleClick(num) }}>{cells[num]}</td>
            
        )
        
    }

    return (
        <>
            <h1>turn-{turn}</h1>
            <table>

                <tbody>
                    <tr >
                        <Cell num={0} />
                        <Cell num={1} />
                        <Cell num={2} />
                    </tr>
                    <tr>
                        <Cell num={3} />
                        <Cell num={4} />
                        <Cell num={5} />
                    </tr>
                    <tr>
                        <Cell num={6} />
                        <Cell num={7} />
                        <Cell num={8} />
                    </tr>
                </tbody>
            </table>
            {winner && (
                <div>
                    <h1>  {winner}</h1>
                </div>
            )
           }
        </>
    )
}

export default Board