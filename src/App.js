
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Story from './components/Story';
import { FaCheckCircle } from "react-icons/fa";

function App() {
  let img1 = "https://images.unsplash.com/photo-1443926818681-717d074a57af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGF1cm9yYSUyMGJvcmVhbHxlbnwwfHwwfHw%3D&w=1000&q=80"
  let username1 = 'randomperson1'
  let username2 = 'randomperson2'
  let img2 = 'https://images.unsplash.com/photo-1542242218065-c6495579e3fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXVyb3JhJTIwYXVzdHJhbGlzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
  let img3 = 'https://wallpaperaccess.com/full/2472569.jpg'
  let img4 = 'https://wallpaperaccess.com/full/2472433.jpg'
  return (
    <div className="App">
      <Navbar />
      <Story />
      <div className="cardcontainer">
        <Card img={img1} username={username1} />
        <Card img={img2} username={username2} />
        <Card img={img3} username="JustAnotherUser" />
        <Card img={img4} username="NotSomeOneYouKnow" />
        <hr />
        <FaCheckCircle id='check' />
        <h3>Youre all caught up!</h3>
        <p className='m-0'>You've seen all Posts in the last 3 days.</p>
      </div>
    </div>
  );
}

export default App;
