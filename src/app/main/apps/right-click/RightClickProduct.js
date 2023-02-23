import React from "react";
import { Link } from "react-router-dom";

import "../../../../styles/right-click.scss"

export default class RightClickProduct extends React.Component {
    state = {
        visible: false,
        modalDelete : false,

    };


    
    componentDidMount() {
        document.addEventListener('contextmenu', this._handleContextMenu);
        document.addEventListener('click', this._handleClick);
        document.addEventListener('scroll', this._handleScroll);
    };

    componentWillUnmount() {
      document.removeEventListener('contextmenu', this._handleContextMenu);
      document.removeEventListener('click', this._handleClick);
      document.removeEventListener('scroll', this._handleScroll);
    }





    
    _handleContextMenu = (event) => {
        event.preventDefault();
        
        this.setState({ visible: true });
        
        const clickX = event.clientX;
        const clickY = event.clientY;
        const screenW = window.innerWidth;
        const screenH = window.innerHeight;
        const rootW = this.root.offsetWidth;
        const rootH = this.root.offsetHeight;
        
        const right = (screenW - clickX) > rootW;
        const left = !right;
        const top = (screenH - clickY) > rootH;
        const bottom = !top;
        
        if (right) {
            this.root.style.left = `${clickX + 5}px`;
        }
        
        if (left) {
            this.root.style.left = `${clickX - rootW - 5}px`;
        }
        
        if (top) {
            this.root.style.top = `${clickY + 5}px`;
        }
        
        if (bottom) {
            this.root.style.top = `${clickY - rootH - 5}px`;
        }
    };

    _handleClick = (event) => {
        const { visible } = this.state;
        const wasOutside = !(event.target.contains === this.root);
        
        if (wasOutside && visible) this.setState({ visible: false, });
    };

    _handleScroll = () => {
        const { visible } = this.state;
        
        if (visible) this.setState({ visible: false, });
    };

    deletePartyItem(e){
        this.setState({modalDelete : true});
        console.log(this.state.modalDelete)
        console.log("clicked on delete")
    }


    
    render() {
        

        const { visible } = this.state;
        
        return(visible || null) && 
            <div ref={ref => {this.root = ref}} className="contextMenu">
                <div className="contextMenu--option" 
                onClick={()=>  
                 window.open(`/apps/baseInformation/products/${ localStorage.getItem("productId")}/productDetaile`) 
                }
                 onKeyUp={ ()=> 
                 window.open(`/apps/baseInformation/products/${ localStorage.getItem("productId")}/productDetaile`) 
                 }
                 role="button" tabIndex={0} >ویرایش</div>


                <div className="contextMenu--option" onClick={()=> this.deletePartyItem()} onKeyUp={ ()=> this.deletePartyItem()} role="button" tabIndex={0}   > حذف </div>


                {/* <div className="contextMenu--option">Visit official site</div>
                <div className="contextMenu--option contextMenu--option__disabled">View full version</div>
                <div className="contextMenu--option">Settings</div>
                <div className="contextMenu--separator" />
                <div className="contextMenu--option">About this app</div> */}
            </div>
    };
}

