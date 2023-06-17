
import './App.css';
import Video from './pages/Video';

function App() {
  return (
    <div className="App">
     <div className='app__videos'>
        <Video likes={25} messages={200} shares={300} name="Joao Pedro" description="Brecker o goleiro" music="Musica Epica" url="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=b5399418-9276-4e53-a706-1e00290c2c74"/>
         <Video likes={65} messages={200} shares={300}  name="Paulo" description="Brecker o goleiro" music="Musica Epica" url="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/bird.mp4?alt=media&token=52abbeec-ff95-4acb-808e-5a4b977d1da"/>
         <Video likes={656} messages={200} shares={300}  name="Paulo" description="Brecker o goleiro" music="Musica Epica" url="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=b5399418-9276-4e53-a706-1e00290c2c74"/>
         <Video likes={12000} messages={200} shares={300}  name="Paulo" description="Brecker o goleiro" music="Musica Epica" url="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=b5399418-9276-4e53-a706-1e00290c2c74"/>

     </div>
    </div>
  );
}

export default App;
