import React, { Component } from 'react'
import {Modal,Button} from 'react-bootstrap'

export default class MyModal extends Component {
    constructor(props){
        super(props)
        this.state={
            modal:false
            

        }
        
    }
    toggle=()=>{
            this.setState({modal:!this.state.modal})
           
            
    }
    
    
    render() {
        console.log(this.props)
        return (
            <div>
                <Button variant="primary" onClick={this.toggle}>Moreinfo</Button>
                <Modal show={this.state.modal} >
                    <Modal.Header>
                    <Button variant="primary" onClick={this.toggle}>close</Button>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={this.props.book.details} alt="Book-cover" height="415px" width="440px"/>
                    </Modal.Body>
                </Modal>






            </div>
        )
    }
}
