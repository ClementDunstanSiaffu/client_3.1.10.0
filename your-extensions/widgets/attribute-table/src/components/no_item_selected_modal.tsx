
import {React,jsx} from 'jimu-core';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'jimu-ui';
import Widget from '../runtime/widget';


type PropsType = {
    parent:Widget
    isOpen:boolean,
    onclose:()=>void
}

export default class NoItemSelected extends React.PureComponent<PropsType,any>{

    constructor(props:PropsType){
        super(props)
    }

    nls = (id: string) => {
        const self = this.props.parent;
        return self.nls(id);
    }

    render(): React.ReactNode {
        const bodyText = this.nls("noRowSelected");
        const closeText = this.nls("close")
        return(
            <div>
                <Modal isOpen = {this.props.isOpen} onClosed = {this.props.onclose}>
                    <ModalBody>{bodyText}</ModalBody>
                    <ModalFooter><Button onClick={this.props.onclose}>{closeText}</Button></ModalFooter>
                </Modal>
            </div>
        )
    }
}