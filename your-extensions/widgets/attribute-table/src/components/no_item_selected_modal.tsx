
import {React,jsx} from 'jimu-core';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'jimu-ui';

type PropsType = {
    isOpen:boolean,
    onclose:()=>void
}

export default class NoItemSelected extends React.PureComponent<PropsType,any>{

    constructor(props:PropsType){
        super(props)
    }

    render(): React.ReactNode {
        return(
            <div>
                <Modal isOpen = {this.props.isOpen} onClosed = {this.props.onclose}>
                    <ModalHeader toggle={this.props.onclose}>Modal title</ModalHeader>
                    <ModalBody>Select row from the attribute table</ModalBody>
                    <ModalFooter>
                    <Button onClick={this.props.onclose}>Close</Button>                   
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}