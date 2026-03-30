//Image grid
import one from'../assets/images/chennai1.jpg';
import two from'../assets/images/chennai2.jpg';
import three from'../assets/images/chennai3.jpg';
import four from'../assets/images/chennai11.jpg';
import five from'../assets/images/chennai8.jpg';
import six from'../assets/images/chennai5.jpeg';
import seven from'../assets/images/chennai12.jpg';
import eight from'../assets/images/chennai13.jpg';

function Image(){
  
  return (
    <>
      <section className="product-section">
        <div className="product-grid">
          <div className="card">
            <img src={one} alt="chennai" />
          </div>
          <div className="card">
            <img src={two} alt="chennai" />
          </div>
          <div className="card">
            <img src={three} alt="chennai" />
          </div>
          <div className="card">
            <img src={four} alt="chennai" />
          </div>
        </div>
      </section>

      <section className="product-section">
        <div className="product-grid">
          <div className="card">
            <img src={five} alt="chennai" />
          </div>
          <div className="card">
            <img src={six} alt="whiskas" />
          </div>
          <div className="card">
            <img src={seven} alt="Royal cannin" />
          </div>
          <div className="card">
            <img src={eight} alt="Felix" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Image;