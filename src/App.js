
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Story from './components/Story';

function App() {
  let img1 = "https://ih1.redbubble.net/image.964483224.4096/flat,1000x1000,075,f.u8.jpg"
  let username1 = 'randomperson1'
  let username2 = 'randomperson2'
  let img2 = 'https://ih1.redbubble.net/image.968776109.6525/flat,1000x1000,075,f.u8.jpg'
  let img3 = 'https://wallpaperaccess.com/full/2472569.jpg'
  let img4 = 'https://wallpaperaccess.com/full/2472433.jpg'
  return (
    <div className="App">
      <Navbar />
      <Story />
      <div className="cardcontainer">
        <Card img={img1} username={username1}/>
        <Card img={img2} username={username2}/>
        <Card img={img3} username="JustAnotherUser"/>
        <Card img={img4} username="NotSomeOneYouKnow"/>
      </div>
    </div>
  );
}

export default App;
