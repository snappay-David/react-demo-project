import React from 'react'
import "./main.css"
import {Input} from 'antd';

export class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            second_button_active: false,
            click_num: 0,
            picture: [],
            inputs: 'add your content'
        }
    }

    update(evt) {
         this.setState({inputs: evt.target.value});
    }

    jump(e) {
        const currentState = this.state.click_num
        this.setState({ click_num: currentState + 1})
        if (currentState === 1){window.location.href = '/sub'}
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=4')
        .then(results => {
            return results.json();
        }).then(data => {
            let pictures = data.results.map((pic) =>{
                return(
                    <div key={pic.results}>
                      <img src={pic.picture.large} alt="random"/>
                    </div>
                )
            })
            this.setState({pictures: pictures});
            console.log("state", this.state.pictures)
        })
    }

    changeColor() {
        this.setState({second_button_active: !this.state.second_button_active})
    }


    render() {
        let color = this.state.second_button_active ? "blue" : "orange"
        return (
            <body id='container1'>
            <div>
                <div className="container2">
                    {this.state.pictures}
                </div>
                <div className="container3">
                    <button className = "b1" onClick={this.jump.bind(this)}> <Input.TextArea autoSize={true} maxLength = {100} type="text" value={this.state.inputs} onChange={evt => this.update(evt)}/>
                        </button>
                </div>
                <div className="container3">
                    <button className = "b2" style={{backgroundColor:color}} onClick={this.changeColor.bind(this)}>Toggle
                        </button>
                </div>
            </div>
            </body>
        )
    }
}

export default Main
