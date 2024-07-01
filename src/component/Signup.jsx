import { Component } from "react";

export default class Signup extends Component{
    constructor(props){
        super(props)

       this.state = ({arr:[],newArr:[],register:false,nameEmpty:false,emailEmpty:false,passEmpty:false,inpName:'',inpEmail:'',inpPass:''})

    }

    handleNameChange=(e)=>{
        this.setState({inpName:e.target.value})

        if(e.target.value === ''){
            this.setState({nameEmpty:true})
        }
        else{
            this.setState({nameEmpty:false})
        }

    }

    handleEmailChange=(e)=>{
        this.setState({inpEmail:e.target.value})


        if(e.target.value === ''){
            this.setState({emailEmpty:true})
        }
        else{
            this.setState({emailEmpty:false})
        }

    }
    handlePassChange=(e)=>{
        this.setState({inpPass:e.target.value})

        if(e.target.value === ''){
            this.setState({passEmpty:true})
        }
        else{
            this.setState({passEmpty:false})
        }

    }

    submitForm = (event)=>{
     
        event.preventDefault();

        const{inpName,inpEmail,inpPass,arr} = this.state;
        console.log(inpEmail,inpName,inpPass)

        if(inpEmail === ''){
            this.setState({emailEmpty:true})
        }
        if(inpName === ''){
            this.setState({nameEmpty:true})
        }
        if(inpPass === ''){
            this.setState({passEmpty:true})
        }

        if(inpPass !=='' && inpEmail !== '' && inpPass !== ''){

        this.setState({arr:[...this.state.arr,{name:inpName,email:inpEmail,password:inpPass}],inpEmail:'',inpName:'',inpPass:''},()=>{
            localStorage.setItem("users",JSON.stringify(this.state.arr))
            console.log(arr)
        })

        let a = JSON.parse(localStorage.getItem('users'))
        console.log(a);
        console.log(arr)
    }

    }
   

    render(){
        const {arr,register,nameEmpty,passEmpty,emailEmpty,inpEmail,inpPass,inpName} = this.state;
        return(<>
        
       <div className="flex justify-center items-center bg-pink-600 w-full h-screen">
{
 register ?
 <button className="p-2 rounded-lg w-40 h-12 text-pink-700 font-medium text-xl bg-white" onClick={()=>this.setState({register:false})}>Register</button>
:
        <form action="" onSubmit={this.submitForm} className="w-1/3 h-auto bg-gray-200 rounded-xl flex justify-start items-center  flex-col p-3">
            <h1 className="text-pink-600 text-2xl font-semibold text-center">Sign Up</h1>

            <div className=" w-full p-10 flex flex-col gap-3 mt-8 items-center">

               <input type="text" value={inpName} className="bg-white rounded-lg  w-full h-12 placeholder-black text-lg p-2 font-thin" placeholder="Name" onChange={(e)=>this.handleNameChange(e)}/>
               {nameEmpty ?<span className="text-pink-600 text-sm">*Name requiered</span> : <span></span>}
             
               <input type="email" value={inpEmail}  className="bg-white rounded-lg  w-full h-12 placeholder-black text-lg p-2 font-thin" placeholder="Email" onChange={(e)=>this.handleEmailChange(e)}/>
               {emailEmpty ?<span className="text-pink-600 text-sm">*Email requiered</span> : <span></span>}
               <input type="password" value={inpPass}  className="bg-white rounded-lg  w-full h-12 placeholder-black text-lg p-2 font-thin" placeholder="Password" onChange={(e)=>this.handlePassChange(e)}/>
               {passEmpty ?<span className="text-pink-600 text-sm">*Password requiered</span> : <span></span>}
               <button type="submit" className="p-2 rounded-lg w-40 h-12 text-white font-medium text-xl bg-pink-600" >Submit</button>

            </div>
            
        </form>
}
        

       </div>

        </>)
    }
}