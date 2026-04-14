import son from './audio.mp3';

function LecteurAudio() {
  return (
    <div className="audio-box">
      <p>🎵 Écouter l’audio :</p>
      <audio controls>
        <source src={son} type="audio/mpeg" />
        Votre navigateur ne supporte pas l’audio.
      </audio>
    </div>
  );
}

export default LecteurAudio;