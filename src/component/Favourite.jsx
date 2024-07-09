import {Component} from 'react'

export default class Favourite extends Component{

    constructor(props){
        super(props)

        console.log("This is your props array",props.ar)
       
    }

    componentDidMount(){
        // console.log(this.props.ar.id)
        console.log(this.props.ar,"your ar")
    }

    render(){
        const { ar} = this.props; 
        return(
            <>
       <section className='grid grid-cols-4 gap-10 place-items-center'>
        <h1>This is favourite page</h1>

{
    ar && ar.map((item,index)=>{     
        return <div  key={index} className='w-80 h-auto p-2 shadow-xl bg-white  rounded-lg flex flex-col  items-center' >
            <div >
           
  
            {/* <button className="relative top-0 left-0 h-auto w-auto" onClick={()=>this.handleFav(index)}>

               {

               item.favBg ? <FavoriteIcon className="text-red-500"/> : <FavoriteIcon className=""/>
               }
            </button>
            <RemoveRedEyeIcon onClick={()=>console.log("hello world")}/> */}
             
            <img src={item.images[0]} alt="" className="w-48 h-48 transition duration-500 hover:scale-125"  />
            </div>
            <div>

            <h1 className="text-black font-medium">{item.title}</h1>
            <h1><span className="font-medium">Price :</span>{item.price} $</h1>
     
            <button className="bg-blue-700 text-white h-10 w-28 ">Add to Cart</button>
            </div>
      
        </div>
    })
}

</section> 
      
            </>
        )
    }
}