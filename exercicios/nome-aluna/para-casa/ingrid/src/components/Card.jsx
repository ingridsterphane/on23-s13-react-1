import Title from "./Title"
import Text from "./Text"
import Image from "./Image"
import Footer from "./Footer"

function Card(props) {
  return (
    <div className="card">
      <Title text={props.title}/>
      <Text text={props.description}/>
      <Image img={props.image} description={props.imageAlt}/>
      <Footer name="Ingrid"/>
      
    </div>
  )
}

export default Card