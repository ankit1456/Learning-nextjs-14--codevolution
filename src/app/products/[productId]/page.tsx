import { Metadata } from "next"

type Props={
  params:{
    productId:string
  }
}

export const generateMetadata = async ({params}:Props): Promise<Metadata> =>{
  const title = await new Promise(resolve=>{
    setTimeout(()=>{
      resolve(`iPhone ${params.productId}`)
    },100)
  })
  return {
    title:{
      absolute:`Product ${title}`
    },
  }
}


const ProductDetails = ({params}:Props) => {
  return (
    <div>ProductDetails  {params.productId}</div>
  )
}

export default ProductDetails