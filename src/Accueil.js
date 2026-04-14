import Logo from './Logo';
import LecteurAudio from './LecteurAudio';
import ListeTaches from './ListeTaches';
import Notifications from './Notifications';
import ListeCourses from './ListeCourses';
import Galerie from './Galerie';

function Accueil() {
  const courses = ['Pain', 'Lait', 'Pommes', 'Fromage'];

  return (
    <div className="accueil-card">
      <h2>Page d’accueil</h2>
      <p className="intro">
        Bienvenue sur mon application React.
      </p>

      <Logo />
      <br />
      <LecteurAudio />
      <ListeTaches />

      <hr />

      <Notifications />

      <hr />

      <ListeCourses articles={courses} />

      <hr />

      <Galerie />
    </div>
  );
}

export default Accueil;