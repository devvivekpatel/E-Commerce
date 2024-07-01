import {Component} from 'react';
import { Link } from 'react-router-dom';
// import Products from './Products';


export default class Navbar extends Component{
    constructor(props){
        super(props)
        this.state = ({imgArr:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6bCxXRSxD0usKk9hHoPsEVbt9xJaUokLnlA&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_RNGWESbfCM_cm9x2DB2KKlVGzbmg8HqPSA&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUa_BdUr3BZZmYwm8P5JafPAqcyKE3BN74Vg&s'
        ],imgIdx:'',apiData:[],productData:false})

    }

    componentDidMount(){
        let a =0;
        // this.dataApi()

    //    let c = document.getElementById('img') it is working but they said you should not use that type of js ...why ?

        setInterval(()=>{
           this.setState({value:a})
            a++;
            if(a>2){
                a=0;
            }

        },1500)
    }

    render(){
        return(
            <>
            <ul className='w-full h-28 flex justify-between pl-20 pr-20 items-center  bg-blue-400 '>
                <li>Logo</li>
                <div className='flex gap-9'>
            <li class="nav-item">
        <Link to="/login" className='nav-link active'>LogIn</Link>
        </li>
        <li class="nav-item">
        <Link to="/cart" className='nav-link active'>Cart</Link>
        </li>
        <li class="nav-item">
        <Link to="/favourite" className='nav-link active'>Favourite</Link>
        </li>
        <li class="nav-item">
        <Link to="/signup" className='nav-link active'>Sign Up</Link>
        </li>
        <li class="nav-item">
        <Link to="/view" className='nav-link active'>View</Link>
        </li>
        <li class='nav-item'>
            <Link to='/products' className='nav-link active'>Products</Link>
        </li>
        </div>
                
            </ul>

            <div className='slider w-full h-[500px]  p-20'>

          <img  alt="###" id='img'src={this.state.imgArr[this.state.value]} className='h-full w-full'/>

            </div>
{/* 
{
   this.state.productData ?  <Products/> :<button className='p-2 bg-blue-800 text-white w-60 m-auto' onClick={()=>this.setState({productData:true})}>Products</button>

} */}
           
            </>
        )
    }
}