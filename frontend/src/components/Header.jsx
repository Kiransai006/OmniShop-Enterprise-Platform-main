import React from 'react';

const Header = ({ title }) => {
    return (
        <header className="top-header">
            <div className="header-context">
                <span className="header-eyebrow">OmniShop / Control center</span>
                <h2 className="page-title">{title}</h2>
            </div>
            <div className="header-actions">
                <div className="workspace-status"><span aria-hidden="true" />All systems</div>
                <div className="user-profile">
                    <div className="avatar" aria-hidden="true">AD</div>
                    <span className="username">Admin User</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
