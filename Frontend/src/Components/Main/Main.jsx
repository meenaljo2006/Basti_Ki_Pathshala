import './Main.css'
import arrow from "../../assets/arrowIcon.jpg"

const Main = () => {
  return (
    <div className='main container'>
        <div className="main-text">
            <h1>Basti Ki Pathshala Foundation</h1>
            <p>Join us in our mission to break the barriers of education in underserved communities. With your support, we can provide quality education to children living in slum areas, empowering them with the knowledge and skills they need to build a brighter future. Together, let’s make a difference.</p>
            <p>Take action today and be the part of change !</p>
            <button className='btn'>Explore More<img src={arrow}/></button>
        </div>

    </div>
  )
}

export default Main