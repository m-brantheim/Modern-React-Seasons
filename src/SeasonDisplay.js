import React from 'react'

const SeasonDisplay = props => {
    if (props.isNorthernHemisphere) {
        return <div>North</div>
    }
    return <div>South</div>
}

export default SeasonDisplay