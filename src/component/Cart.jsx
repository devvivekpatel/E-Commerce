import {Component} from 'react'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddBoxIcon from '@mui/icons-material/AddBox';
export default class Cart extends Component{

    constructor(props){
        super(props)

        this.state = ({cartArr:[],count:1})
    }


    componentDidMount(){
        fetch('https://dummyjson.com/products/5')
        .then((res)=>res.json())
        .then((json)=>this.setState({cartArr:json},()=>{
            console.log(this.state.cartArr)
        }))

     
    }

    increase=()=>{
       

            this.setState({count:this.state.count+1})
        
    }
    decrease=()=>{
        if(this.state.count<=1){
            this.setState({count:1})
        }
        else{

            this.setState({count:this.state.count-1})
        }
    }
  
    render(){
        const {cartArr,count} = this.state;

        
        return(
        <>

        <div className='h-[350px] w-3/4 gap-5 shadow-2xl  flex'>

            <div className='w-1/2 h-full shadow-2xl '>
            <div className='w-full h-full shadow-2xl flex'>

            <div className='w-1/2 gap-2 p-3 h-full  flex flex-col justify-center items-center'>
            <div className=' '>

            <img src={cartArr.images} alt="#Missing"  className='h-full w-full '/>
            </div>
              <div className='w-full h-12  mb-10 flex gap-5 justify-center items-center'>

               <span className='text-3xl  ' onClick={this.decrease}><RemoveCircleIcon/></span>

                <h1 className='text-3xl  w-16 h-full p-1 flex justify-center'>{count}</h1>

                <span className='text-3xl' onClick={this.increase}><AddBoxIcon/></span>

                

            </div>

            </div>

            

            <div className='w-1/2 h-full  justify-between p-5 flex flex-col gap-2'>
            <div>

            <h1 className='text-2xl text-red-500 font-medium'>{cartArr.title}</h1>
            <h1 className='text-xl'>Price : {cartArr.price *count } $</h1>
            </div>

            <button className=' w-48 h-12 bg-blue-600  text-white font-medium text-xl'>Remove</button>

            </div>
            </div>
          


            </div>

            <div className=' w-96 h-full'>

                <h1 className='text-2xl text-gray-500 p-2'>PRICE DETAILS</h1>
                <hr />
                <span className='flex justify-between p-5 text-xl'><h1>Price {count} item</h1> <h1>${cartArr.price*count}</h1></span>
                <span className='flex justify-between p-5 text-xl'><h1>Delievery Charges:</h1> <h1 className='text-green-800'>Free</h1></span>
               <span className='flex justify-between p-5 text-xl'><h1>Total Amount :</h1><h1>${cartArr.price*count}</h1></span>

            </div>

         
        </div>

        
       
        </>
        )
        
    }
}