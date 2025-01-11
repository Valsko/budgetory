/* eslint-disable @next/next/no-img-element */
import './side-panel.css';

export const SidePanel = () => {
    return (
        <div className="side-panel">
            <div className="side-panel__logo">
                <img src='/images/logo.png' alt="Logo" width="80%" height="80%" />
            </div>
            <div className="side-panel__nav">
                <p>Nav</p>
            </div>
            <div className="side-panel__footer">
                <div className="side-panel__footer-profile">
                    <div className="profile-icon">
                        <img src="/user-icon.png" alt="User Icon" />
                    </div>
                    <div className="profile-name">
                        <p>Valentin Melusson</p> {/* Placeholder */}
                    </div>
                    <div className="profile-options" >
                        &#x22EE; {/* Unicode for vertical ellipsis */}
                    </div>
                </div>
            </div>
        </div>
    );
};
