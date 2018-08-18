import React from 'react';

const styles = {
    margin: '3px',
}

const FooterOptions = () => {
    return (
        <div>
            Show:
            <button style={styles}>All</button>
            <button style={styles}>Active</button>
            <button style={styles}>Completed</button>
        </div>
    );
};

export default FooterOptions;