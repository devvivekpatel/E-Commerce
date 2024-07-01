import {Component} from 'react'

export default class Favourite extends Component{

    constructor(props){
        super(props)
       
    }

    componentDidMount(){
        // console.log(this.props.ar.id)
    }

    render(){
        return(
            <>
            <h1>This is Faavourite page</h1>
            {/* <h1>{this.props.ar}</h1> */}

            </>
        )
    }
}