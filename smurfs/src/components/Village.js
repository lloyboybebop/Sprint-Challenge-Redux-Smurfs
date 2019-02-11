import React from 'react';
import {connect} from 'react-redux';
import {findSmurfs, deliverSmurf, changeSmurf, deleteSmurf} from '../actions';
import Smurf from './Smurf';
import DeliverSmurfForm from './DeliverSmurfForm';

class Village extends React.Component {
    state = {};

    componentDidMount() {
        this.props.findSmurfs()
    }

    inputHandler = e => {
        this.setState({[e.currentTarget.name]:e.currentTarget.value});
    }

    render() {
        return (
            <div className = 'village'>
                <DeliverSmurfForm deliverSmurf = {this.props.deliverSmurf} inputHandler = {this.inputHnadler} smurf = {this.state}/>

                {this.props.smurfs.map(
                    smurf => <Smurf key = {smurf.id} smurf = {smurf}/>)}
            </div>
        )
    }
}

const buildVillage = village => ({
    smurfs: village.smurfs,
});

export default connect(buildVillage, {findSmurfs, deliverSmurf, changeSmurf, deleteSmurf})(Village);