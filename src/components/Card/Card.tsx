import "./Card.css"

function Card(){
    return (
        <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h1>Foto</h1>
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1> 
            <p>Architect & Engineer</p> 
            <p>We love that guy</p>
          </div>
        </div>
      </div>
      )
}
export default Card