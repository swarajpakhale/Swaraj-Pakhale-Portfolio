import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="w-full flex items-center justify-center p-4 text-center" style={{ minHeight: this.props.minHeight || 'auto' }}>
          <div className="text-secondary text-sm">
            {this.props.fallbackMessage || "Content failed to render"}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
