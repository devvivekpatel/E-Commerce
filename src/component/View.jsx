import { Component } from "react";
import Hoc from "./Hoc";

class View extends Component{
    constructor(props){
        super(props)
        this.state=({viewArr:[]})
    }

    componentDidMount(){


        console.log(this.state.viewArr)
        // console.log(this.props.router.params,"555");
        
    
            const { id } = this.props.router.params;
            console.log("id", id)
            // console.log("which one you want",id)
            this.callingApi(id)


     

    }
 
    callingApi=(id)=>{
        console.log("callingApi",id)

        fetch(`https://dummyjson.com/products/${id}`)
        .then((res)=>res.json())
        .then((json)=>this.setState({viewArr:json},()=>{
            console.log(json)
            console.log(this.state.viewArrviewArr)
        }))
        .catch((er)=>console.log("Got an error",er))
    }

    render(){
        const {viewArr} = this.state;
        return(
            <>

                
                    <div className="h-screen w-full  flex justify-center items-center gap-4 " >

                        <div className=" w-1/4 h-1/2 ">

                        <div className=" h-full w-full flex justify-center items-center">
                            <img src={viewArr.images} alt=""  className=""/>

                        </div>
                        <div className="w-full h-16  flex gap-5 mt-11">
                            <button className="w-1/2 h-full flex justify-center items-center bg-orange-600">Add to Cart</button>
                            <button className="w-1/2 h-full flex justify-center items-center bg-blue-600">Buy Now</button>
                        </div>

                        </div>


                        <div className="w-1/2 h-full  pl-5 flex flex-col gap-5 mt-80">

                        <div className="w-full flex flex-col gap-2">

                        <h1 className="text-3xl font-medium  text-red-700 ">{viewArr.title}</h1>
                        <span className="text-green-800 text-sm font-semibold">Special price</span>
                        <h1 className="text-2xl font-semibold  ">${viewArr.price}</h1>
                        <h1 className="text-xl font-semibold">Available Offers</h1>
                        <p>Special PriceGet extra 28% off (price inclusive of cashback/coupon)T&C</p>
                        <p>Bank OfferGet ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C</p>
                        <p>Bank Offer <span className="text-green-800 font-medium"> 5% </span>Cashback on Flipkart Axis Bank CardT&C</p>
                        <p>Bank Offer10% off up to ₹1250 on HDFC Bank Credit Card EMI Txns, Tenure: 6 months, Min Txn Value:<span className="text-green-800 font-medium"> ₹7500 </span>T&C</p>
                        </div>


                        <div className=" flex flex-col gap-3">

                            <h1 className="text-2xl font-semibold">Product Details</h1>
                            <p className="text-green-700 text-xl font-medium">{viewArr.brand}</p>
                            <p>{viewArr.description}</p>
                            <p>{viewArr.category}</p>
                            <p>{viewArr.availabilityStatus}</p>
                            <p>{viewArr.sku}</p>
                            <p>{viewArr.returnPolicy}</p>
                            <p>{viewArr.minimumOrderQuantity}</p>
                            <p>{viewArr.tags}</p>
                            {/* <p>{viewArr.dimensions[0].width}</p> */}
                            
                          
                        </div>
                        </div>

                        
                      
                    </div>
            
            </>
        )
    }
}

export default Hoc(View)