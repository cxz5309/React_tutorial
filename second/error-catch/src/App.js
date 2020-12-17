import User from './User';
import ErrorBoundary from './ErrorBoundary';

function App() {
  
  return (
    <ErrorBoundary>
      <User />
    </ErrorBoundary>
  );
}

export default App;
