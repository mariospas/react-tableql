import React, { Component } from 'react';
interface Props {
}
interface State {
    hasError: boolean;
    error: Error;
}
declare class ErrorBoundary extends Component<Props, State> {
    state: {
        hasError: boolean;
        error: Error;
    };
    componentDidCatch(error: Error, info: any): void;
    render(): React.ReactNode;
}
export default ErrorBoundary;
