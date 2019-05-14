import React from 'react'

export default class Div extends React.Component {
    state = {
        color: 'red'
    }

    listenScrollEvent = () => {
        if (window.scrollY > 400) {
            this.setState({ color: 'black' })
        } else {
            this.setState({ color: 'white' })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
            <div>
                <div id="header">
                    <h1 style={{ color: this.state.color }}>
                        This is the header
          </h1>
                </div>
                <div id="section_1" className="section">
                    This is section 1
       </div>

                <div id="section_2" className="section">
                    This is section 2
       </div>

                <div id="section_3" className="section">
                    This is section 3
       </div>

                <div id="section_4" className="section">
                    This is section 4
       </div>

                <div id="section_5" className="section">
                    This is section 5
       </div>

            </div>
        )
    }
}