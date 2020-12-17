import { withSentryRouting } from '@sentry/react';
import * as Sentry from "@sentry/react";
import React, {
    Component
} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        };
    }

    componentDidCatch(error, errorInfo) {
        console.log('에러가 발생했습니다');
        console.log({
            error,
            errorInfo
        })
        this.setState({
            error: error,
            errorInfo: errorInfo
        });

        if(process.env.NODE_ENV === 'production'){
            Sentry.captureException(error, {extra:errorinfo});
        }
    }
    render() {
        if (this.state.error) {
            return ( 
                <div className = "ErrorBoundary" >
                    <h1> 에러 발생! </h1> 
                </div>
            );
        }
        return this.props.children;
    }
}
export default ErrorBoundary;
