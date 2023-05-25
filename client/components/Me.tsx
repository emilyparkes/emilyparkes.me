import { Link } from 'react-router-dom'

function Me () {
  return (
    <>
    <nav>
      <Link to='/'>
        <div>Emily Parkes</div>
      </Link>
      <div>
      <ul>
        {/* <Link to='/projects'>Projects</Link> */}
        <Link to='/contact'>Contact</Link>
      </ul>
      </div>
    </nav>

    <div className="container">
      <div className='summary-container'>
      <h2>
        <span>Kia ora, I&apos;m Emily. </span>  I&apos;m a <span className="title"> Front End Developer </span>
        {' based in Pōneke (Wellington), NZ. '}
        <span className=""> I am passionate about what tech can do for people and an avid lover</span>
         {' of '}
        <span className="container-flip">
          <span className="flip flip-painting"> painting</span>
            <span className="flip flip-pottery"> collecting pottery</span>
            <span className="flip flip-brunch"> brunch</span>
            <span className="flip flip-crochet"> crochet</span>
            <span className="flip flip-beach"> the beach</span>
            <span className="flip flip-books"> reading</span>
            <span className="flip flip-dog"> petting dogs</span>
            <span className="flip flip-hobbies"> collecting hobbies</span>
        </span> 
      </h2>
      </div>

      <div className='name-container'>
        <h1 className='title-name'>
          EMILY PARKES
        </h1>
      </div>

    </div>
    </>
  )
}

export default Me
