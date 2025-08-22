import React from 'react';
import Contato from '../components/Contato';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Algo deu errado.</h1>;
    }

    return this.props.children;
  }
}

const ContactPage = () => {
  return (
    <ErrorBoundary>
      <Contato />
    </ErrorBoundary>
  );
};

export default ContactPage;