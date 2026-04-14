import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';

function Galerie() {
  return (
    <div>
      <h3>Galerie d’images</h3>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        <img src={image1} alt="Image 1" width="150" />
        <img src={image2} alt="Image 2" width="150" />
        <img src={image3} alt="Image 3" width="150" />
      </div>
    </div>
  );
}

export default Galerie;