import './Explore.css';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

export default class Home extends React.Component {
    state = {}

    render() {

        const setActive = this.props.setActive;

        return (
            <>
                <Sidebar active="Explore" setActive={setActive} />
            </>
        )
    }
}