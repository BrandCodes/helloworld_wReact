import React from 'react';
import {Button} from 'reactstrap';

class MButton extends React.Component{
    render(){
        return(
            <div>
                <Button outline color="primary" >
                    Click
                </Button>
            </div>
        );
    }
}

export default MButton;