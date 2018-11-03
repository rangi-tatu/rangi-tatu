import React from 'react'

//components
import Button from '../Button'

//assets
import hue10 from '../app/img/hue10.svg'
import hue15 from '../app/img/hue15.svg'
import hue20 from '../app/img/hue20.svg'

class HueInfoComponent extends React.Component {


    render() {
        return (
            <div className='HueInfoComponent'>

                <Button
                    title='Take me back'
                    click={this.props.closeHueInfo}
                />

                <div className='about'>

                    <div>What’s Hue Step?</div>

                    <p>Hue is also known as color or the position on a color wheel. Hue step is the degree of separation between different colors on the wheel. So the wider the hue step, the larger the variance of colors but lower the number of combinations.</p>

                    <p>Test it out below with our little tool to get a better idea.</p>

                    <div>
                        <div className='wrapper'>
                        </div>
                        <img src={hue10}/>
                    </div>
                </div>

            </div>
        )
    }

} // HueInfoComponent

export default HueInfoComponent