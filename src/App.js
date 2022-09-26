import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='main'>
      <div className='header'>
        <img className='oikos_logo' src='https://scontent-lax3-2.xx.fbcdn.net/v/t1.15752-9/247182210_279639020730452_4557338326314916808_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Rrdj9qotXcIAX9PZN7-&tn=VCLm5_n8ZrGH3Fq9&_nc_ht=scontent-lax3-2.xx&oh=03_AVKfhZTm31B50hLovPIvAPnGaiPWP3OfcnNsqnY74wKbvw&oe=6355E192'/>
      </div>
      <div className='youtube-vid'>
      <iframe width="1000" height="600" src="https://www.youtube.com/embed/UH1j6egD-PY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
      </div>
    </div>
  );
}

export default App;
