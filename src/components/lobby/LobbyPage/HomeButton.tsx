import React from "react";

interface Homeprops {
    handleGoHome: () => void;
}

const HomeButton = (props: Homeprops) => {
    const { handleGoHome } = props;
    return (
        <div>
        <button
            onClick={() => {
            handleGoHome();
            }}
        >
            Home
        </button>
        </div>
    );
};

export default HomeButton;
