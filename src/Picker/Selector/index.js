import React from 'react'

class SelectorComponent extends React.Component {
    render() {
        return (
            <div className={'SelectorComponent ' + (this.props.passClass ? this.props.passClass : '') }>
                <div className='title'>{this.props.title}</div>
                <div className='wrapper'>
                    {this.props.options.map((option, i) => <div
                        className={this.props.active === option ? 'active' : ''} key={i}
                        onClick={this.props.click.bind(this, option)}>
                        {option}
                    </div> )}
                </div>
            </div>
        )
    }
}

export default SelectorComponent
