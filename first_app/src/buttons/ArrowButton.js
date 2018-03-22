import React, { Component } from 'react';
import "./ArrowButton.css"

export class ArrowButton extends React.Component {
    render() {
        return (
          <div>
              <img
                  style={{width: 50, height: 50}}
                  src={"../../res/arrow.png"}/>
              <img/>
          </div>
        )
    }
}
