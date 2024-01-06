import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation-container">
            <ul>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/data-management">Data Managemnet</a>
                </li>
                <li>
                    <a href="/model-management">Model Managemnet</a>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
