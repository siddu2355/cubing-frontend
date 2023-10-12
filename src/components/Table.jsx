import React, { Component } from 'react';
import { getParticipants } from '../services/participantService';

class Table extends Component {
    state = { 
        participants: []
    } 

    async componentDidMount() {
        const response = await getParticipants(this.props.sa);
        this.setState({ participants: response.data });
    }

    timeConversion = (time) =>{
        let minutes = Math.floor(time / 60);
        let seconds = (time % 60).toFixed(3);
        return minutes === 0 ? seconds: `${minutes}:${seconds}`;
    }
    

    render() { 
        const {sa} = this.props;
        return (
            <>
            {this.state.participants.length === 0 && <p className='table-value'>No participants present!</p>}
            {this.state.participants.length !== 0 && <table style={{ borderCollapse: 'collapse', width: '80%', border: '1px solid #ddd', marginTop:"20px" }}>
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th className='table-value'>#</th>
                        <th className='table-value'>Name</th>
                        <th className='table-value'>Result</th>
                        <th className="table-value">Competetion</th>
                        {sa === 0 && <th className='table-value' colSpan="5">Solves</th>}
                    </tr>
                </thead>
                <tbody>
                    {this.state.participants.map((participant, i) => 
                        <tr key={participant.student_id} style={{ borderBottom: '1px solid #ddd' }}>
                            <td className='table-value'>{i+1}</td>
                            <td className='table-value'>{participant.name}</td>
                            {sa === 1 && <td className='table-value'>{this.timeConversion(participant.solve_best)}</td>}
                            {sa === 0 && <td className='table-value'>{this.timeConversion(participant.solve_avg)}</td>}
                            <td className='table-value'>{participant.competetion}</td>
                            {sa === 0 &&<> <td className='table-value'>
                               {this.timeConversion(participant.solve1)}
                            </td>
                            <td className='table-value'>{this.timeConversion(participant.solve2)}</td>
                            <td className='table-value'>{this.timeConversion(participant.solve3)}</td>
                            <td className='table-value'>{this.timeConversion(participant.solve4)}</td>
                            <td className='table-value'>{this.timeConversion(participant.solve5)}</td>
                            </>}
                        </tr>
                    )}
                </tbody>
            </table>}
            </>
        );
    }
}

export default Table;
