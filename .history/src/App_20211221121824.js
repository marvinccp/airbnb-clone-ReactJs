import Hero from './hero';
import NavBar from './navbar';
import cardsData from "./cardsData";
import Card from './card'
import './styles.css';



function App() {
  const renderCards = cardsData.map(card => {
    return (
      <Card
        key={card.id}
        card={card}
        // aquí podria usar un spreed Operator {..card} y entonces
        //en el componente usar porpos.title sin card en medio, todos
        //los atributos quedan intactos
      />
    );
  });

  return (
    <>
      <NavBar />
      <Hero />
      <div className="cards--container">
        {renderCards}
      </div>
    </>
  ); 
}


export default App;
