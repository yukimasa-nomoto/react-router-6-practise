import { useLocation , useSearchParams } from "react-router-dom"

const products = [
    {
        id: 1,
        product_name: 'iPhone',
        price: 1000,
    },
    {
        id: 2,
        product_name: 'iPad',
        price: 500,
    },
    {
        id: 3,
        product_name: 'iPod',
        price: 40,
    },
    {
        id: 4,
        product_name: 'MacBook',
        price: 2000,
      
    },
]

export default function Contact(props){

    const[searchParams,setSearchParams] = useSearchParams()
    const paramsValue = searchParams.get('product_name') || ''

    const location = useLocation()
    //console.log(location)

    console.log(paramsValue)
    //console.log(props)


    const handleChange = (e) =>{
        const productName = e.target.value
        if(productName){
            setSearchParams({product_name:productName})
        }else{
            setSearchParams({})
        }
    }

    const searchProducts = () => {
        return products.filter((p) => {
            return p.product_name.includes(
                paramsValue
            )
        })
    }


    return (
        <div>
            <h1>Contact</h1>
            <h2>{props.message}</h2>
            <input type="text" onChange={handleChange} value={paramsValue}/>
            <ul>
                {
                    products.map((p) => (
                        <li key={p.id}>
                            {p.product_name}/{p.price}
                        </li>
                    ))
                }
            </ul>

            <ul>
                {
                    searchProducts().map((s) => {
                        return(
                            <li key={s.id}>
                                {s.product_name}/{s.price}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}