import { Component } from "react";
import Hoc from "./Hoc";

import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Favourite from "./Favourite";


class Products extends Component{
    constructor(props){
        super(props)
                
        this.state = ({apiData:[],favArr:[],cartArr:[]})

    }  

    componentDidMount(){
        fetch('https://dummyjson.com/products')
        .then((res)=>res.json())
        .then((json)=>{this.setState({apiData:json.products})})
        .catch((res)=>{console.log("Got error on api",res)})
    }


addToCart=(index)=>{

    this.setState((prevState) => {
        const updatedCartArr = [...prevState.cartArr, prevState.apiData[index]];

        return { cartArr: updatedCartArr };
    });

    console.log("I am cart",this.state.cartArr)

}

    handleFav=(index)=>{
        console.log("favarr",this.state.favArr)
        
      
        this.setState(() => {

            const updatedApiData = this.state.apiData.map((item, i) => {
                if (i === index) {
                    if(item.favBg===false){

                        this.setState((prevState) => {
                            const updatedFavArr = [...prevState.favArr, prevState.apiData[index]];
                    
                            return { favArr: updatedFavArr };
                        });

                    return { ...item, favBg: true }; 
                    }
                    else{

                        this.state.favArr.filter((ar,index)=> ar!==index)
                        console.log("fav",this.state.favArr)
                        return { ...item, favBg: false }; 
                    }
                }   
                return item;
            });
          
            return { apiData: updatedApiData };
        });

        // this.setState({favArr:[...this.state.favArr,this.state.apiData[index]]})

        // this.setState((prevState) => {
        //     const updatedFavArr = [...prevState.favArr, prevState.apiData[index]];
    
        //     return { favArr: updatedFavArr };
        // });
      
    }

    Viewpage = (itemId)=>{
        console.log(itemId,"itemId")
        const {navigate} = this.props.router;
        navigate(`/View/${itemId}`)
       
       }

   

    render(){
        return(
            <>
            <div>
            <section className='grid grid-cols-4 gap-10 place-items-center'>

{
     this.state.apiData && this.state.apiData.map((item,index)=>{     
        return <div  key={index} className='w-80 h-auto p-2 shadow-xl bg-white  rounded-lg flex flex-col  items-center' >
            <div >
           
  
            <button className="relative top-0 left-0 h-auto w-auto" onClick={()=>this.handleFav(index)}>

               {

               item.favBg ? <FavoriteIcon className="text-red-500"/> : <FavoriteIcon className=""/>
               }
            </button>
            <RemoveRedEyeIcon onClick={()=>console.log("hello world")}/>
             
            <img src={item.images[0]} alt="" className="w-48 h-48 transition duration-500 hover:scale-125"  onClick={()=>this.Viewpage(item.id)}/>
            </div>
            <div>

            <h1 className="text-black font-medium">{item.title}</h1>
            <h1><span className="font-medium">Price :</span>{item.price} $</h1>
     
            <button className="bg-blue-700 text-white h-10 w-28 " onClick={()=>this.addToCart(index)}>Add to Cart</button>
            </div>
      
        </div>
    })
}

</section>
<Favourite  ar= {this.state.favArr} />


            </div>
            </>
        )
    }
}

export default Hoc(Products)