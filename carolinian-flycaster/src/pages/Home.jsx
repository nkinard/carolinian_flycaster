import './css/Home.css';
import Tree from '../components/Tree';
function App() {
  return (
    <>
      <section className="columns">
        <Tree 
          name="Live Oak"
          description="Doesn't lose it's leaves"
          image="images/live-oak.jpg"/>
        <Tree 
          name="Dogwood"
          description="Flowers in spring"
          image="images/dogwood.jpg" />
      </section>
    </>
  );
}

export default App;