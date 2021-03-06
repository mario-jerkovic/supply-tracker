import * as React from 'react'
import {
    ProgressBarAndroid,
    StyleSheet,
    View,
} from 'react-native'

type Props = {
    animating: boolean,
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    loading: {
        width: '33%',
    },
})

const IntroLoadingComponent: React.SFC<Props> = (props) => {
    const {
        animating,
    } = props

    return (
        <View style={styles.container} >
            {animating && (
                <ProgressBarAndroid
                    style={styles.loading}
                    styleAttr="Horizontal"
                />
            )}
        </View >
    )
}

export default IntroLoadingComponent
