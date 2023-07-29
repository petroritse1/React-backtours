import Title from "./Title";
import {tours} from "../data.js"
function Tours(){
    return (
        <section className="section" id="tours">
       


        <Title title="featured" subTitle="tours" />
  
        <div className="section-center featured-center">
          { tours.map( (item)=>{
            const {image, title,location,info,duration,cost,date} =  item
            console.log(item);
            return(
              
          <article className="tour-card" key={item.id}>
            <div className="tour-img-container">
              <img src={image}className="tour-img" alt="" />
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{title}</h4>
              </div>
              <p>
               {info}
              </p>
              <div className="tour-footer">
                <p>
                  <span><i className="fas fa-map"></i></span> {location}
                </p>
                <p>{duration}</p>
                <p>from {cost}</p>
              </div>
            </div>
          </article>
            )

          })}
        </div>
      </section>
  
    )
}



export default Tours;