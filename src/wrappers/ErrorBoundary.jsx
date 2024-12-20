import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ textAlign: 'center' }}>
                    <h1>Something went wrong.</h1>
                    <p style={{ margin: -10 }}>─────────────────────</p>
                    <p style={{ margin: -10 }}>───────────████████──</p>
                    <p style={{ margin: -10 }}>──────────███▄███████</p>
                    <p style={{ margin: -10 }}>──────────███████████</p>
                    <p style={{ margin: -10 }}>──────────███████████</p>
                    <p style={{ margin: -10 }}>──────────██████─────</p>
                    <p style={{ margin: -10 }}>──────────█████████──</p>
                    <p style={{ margin: -10 }}>█───────███████──────</p>
                    <p style={{ margin: -10 }}>██────████████████───</p>
                    <p style={{ margin: -10 }}>███──██████████──█───</p>
                    <p style={{ margin: -10 }}>███████████████──────</p>
                    <p style={{ margin: -10 }}>███████████████──────</p>
                    <p style={{ margin: -10 }}>─█████████████───────</p>
                    <p style={{ margin: -10 }}>──███████████────────</p>
                    <p style={{ margin: -10 }}>────████████─────────</p>
                    <p style={{ margin: -10 }}>─────███──██─────────</p>
                    <p style={{ margin: -10 }}>─────██────█─────────</p>
                    <p style={{ margin: -10 }}>─────█─────█─────────</p>
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
