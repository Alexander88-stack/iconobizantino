import React, { Component } from "react";

interface NavBarProps {
    onMenuClicked: ( menuId: number ) => void
}

export class NavBar extends Component<NavBarProps> {
    menuCliked( menuId ) {
        this.props.onMenuClicked( menuId )
    }

    render() {
        return (
           <div>
                <button onClick={ ()=>this.menuCliked( 0 )}>
                    Homepage
                </button>

                <button onClick={ ()=>this.menuCliked( 1 )}>
                    Shop
                </button>

                <button onClick={ ()=>this.menuCliked( 2 )}>
                    Contact
                </button>

                <button onClick={ ()=>this.menuCliked( 3 )}>
                    Glosario
                </button>

                <button onClick={ ()=>this.menuCliked( 4 )}>
                    Chart
                </button>
            </div> 
        )
    }
}