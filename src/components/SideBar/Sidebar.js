import React from "react";
import PropTypes from 'prop-types';
import ReactTooltip from 'simple-react-tooltip'
import logo from './assets/logo.png';
import "./App.css";

const Sidebar = (props) => {
    return (
        <div className="col-sm-3 col-xs-12 sidebar">
            <div className="media user-details">
                <div className="media-left">
             
                </div>
                <div className="media-body">
         
            
                </div>
                <div className="media-right">
                    <ReactTooltip/>
                    <img src={logo} alt="Truist Bank Logo" width="200"/>
                </div>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    showModal: PropTypes.func,
    value: PropTypes.string,
};

export default Sidebar;
