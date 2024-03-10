import {  vehcilesData,  } from "./components/data"
import Product from "./components/product"

const ModelS = () => {
  return (
    <div>
        { vehcilesData .map((data)=> <Product button1={data.button1} button2={data.button2} desc={data.desc} img={data.img} fedral={data.fedral} model={data.model} key={1} price={data.price}/> ) }
    </div>
  )
}

export default ModelS