import { Component } from "react";

export default class View extends Component{
    constructor(props){
        super(props)
        this.state=({viewArr:[]})
    }

    componentDidMount =()=>{

        fetch('https://dummyjson.com/products/2')
        .then((res)=>res.json())
        .then((json)=>this.setState({viewArr:json}))
        .catch((er)=>console.log("Got an error",er))

     

    }
    componentDidUpdate(){
        console.log(this.state.viewArr)
    }

    render(){
        const {viewArr} = this.state;
        return(
            <>

          

             
                
                    <div className="h-full w-full border-2 border-black flex" >

                        
                        <div className="h-full w-1/2 border-2 border-black" >
                        <img src={viewArr.images} alt="###"/>

                        <div className="border-2 border-black w-full flex gap-5 h-40">
                            <button className="w-1/2 h-16 text-white bg-blue-600">Add to Cart</button>
                            <button className="w-1/2 h-16 text-white bg-blue-600">Buy Now</button>
                        </div>

                        </div>
                        <div className="h-full w-1/2 border-2 border-black">
                        <h1 className="text-2xl text-center font-medium">{viewArr.title}</h1>
                        <h1 className="text-2xl text-center font-medium">Price :{viewArr.price} $</h1>
                        <h1 className=""></h1>

                          </div>

                    </div>
                
             

       
            
            </>
        )
    }
}