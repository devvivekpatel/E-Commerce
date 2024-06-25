import { Component } from "react";

import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default class products extends Component{
    constructor(props){
        super(props)

        this.state = ({apiData:[],favArr:[]})
    }

    componentDidMount(){
        fetch('https://dummyjson.com/products')
        .then((res)=>res.json())
        .then((json)=>{this.setState({apiData:json.products})})
        .catch((res)=>{console.log("Got error on api",res)})
    }

    handleFav=(index)=>{


        this.setState((prevState) => {

            const updatedApiData = prevState.apiData.map((item, i) => {
                if (i === index) {
                    if(item.favBg===false){
                    return { ...item, favBg: true }; 
                    }
                    else{
                        return { ...item, favBg: false }; 
                    }
                }
                return item;
            });
    
            return { apiData: updatedApiData };
        });



    }

    render(){
        return(
            <>
            <div>
            <section className='grid grid-cols-4 gap-10 place-items-center'>

{
     this.state.apiData.map((item,index)=>{     
        return <div key={index} className='w-80 h-auto p-2 shadow-xl bg-white  rounded-lg flex flex-col  items-center' >
            <div >
  
            <button className="relative top-0 left-0 h-auto w-auto" onClick={()=>this.handleFav(index)}>

               {

               item.favBg ? <FavoriteIcon className="text-red-500"/> : <FavoriteIcon className=""/>
               }
            </button>
            <RemoveRedEyeIcon onClick={()=>console.log("hello world")}/>
             
            <img src={item.images[0]} alt="" className="w-48 h-48 transition duration-500 hover:scale-125" />
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

            </div>
            </>
        )
    }
}