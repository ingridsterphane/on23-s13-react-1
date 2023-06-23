import Title from "./Title"
import Text from "./Text"
import Image from "./Image"

import ingrid from "../assets/Ingrid.jpg"

function Bio () {
    return (
        <div className="card">
        <Title text="Ingrid Sterphane"/>
        <Text text="Futura desenvolvedora tec"/>
        <Image img={ingrid} description="Ingrid Sterphane"/>
        </div>
    )
  }
  
  export default Bio