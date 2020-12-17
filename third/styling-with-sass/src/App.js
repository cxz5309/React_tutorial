import Button from './Component/Button';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button chidren="Button" size="large"></Button>
        <Button chidren="Button"></Button>
        <Button chidren="Button" size="small"></Button>
      </div>
      <div className="buttons">
        <Button chidren="Button" size="large" color="gray"></Button>
        <Button chidren="Button" color="gray"></Button>
        <Button chidren="Button" size="small" color="gray"></Button>
      </div>
      <div className="buttons">
        <Button chidren="Button" size="large" color="pink"></Button>
        <Button chidren="Button" color="pink"></Button>
        <Button chidren="Button" size="small" color="pink"></Button>
      </div>
      <div className="buttons">
        <Button chidren="Button" size="large" outline></Button>
        <Button chidren="Button" color="gray" outline></Button>
        <Button chidren="Button" size="small" color="pink" outline></Button>
      </div>
      <div className="buttons">
        <Button chidren="Button" size="large" fullWidth></Button>
        <Button chidren="Button" size="large" color="gray" fullWidth></Button>
        <Button chidren="Button" size="large" color="pink" fullWidth></Button>
      </div>
    </div>
  );
}

export default App;
