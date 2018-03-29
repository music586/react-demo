import React from 'react'
import SwipeableViews from 'react-swipeable-views'

const styles = {
    slide: {
        padding: 15,
        minHeight: 100,
        color: '#fff'
    },
    slide1: {
        backgroundColor: '#fea900'
    },
    slide2: {
        backgroundColor: '#b3dc4a'
    },
    slide3: {
        backgroundColor: '#6acoff'
    }
}

const DemoSimple = () => {
    return (
        <SwipeableViews enableMouseEvents>
            <div style={Object.assign(), styles.slide, styles.slide1}>
                slide n1
            </div>
            <div style={Object.assign(), styles.slide, styles.slide2}>slide n2</div>
            <div style={Object.assign(), styles.slide, styles.slide3}>slide n3</div>
        </SwipeableViews>
    )
}

export default DemoSimple
