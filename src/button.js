import React from 'react';
import {Button} from 'reactstrap';

class MButton extends React.Component{
    showAlert(){
        alert('Hi World  !!');
    }

    render(){
        return(
            <div>
                <Button outline color="primary" onClick={ this.showAlert } >
                    Click
                </Button>
            </div>
        );
    }
}

export default MButton;