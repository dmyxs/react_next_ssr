import App from 'next/app'
import 'antd/dist/antd.min.css'
import { Provider } from 'react-redux'
import store from '../store/store'

import withRedux from './../lib/withRedux'

class MyApp extends App {
    static async getInitialProps(ctx) {
        console.log('client render')
        const { Component } = ctx
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return {
            pageProps,
        }
    }

    render() {
        //Component是渲染的组件，pageProps是组件的props值
        //reduxStore由withRedux处理传递：next集合redux
        const { Component, pageProps, reduxStore } = this.props
        return (
            <Provider store={reduxStore}>
                <Component {...pageProps} />
            </Provider>
        )
    }
}

export default withRedux(MyApp)
