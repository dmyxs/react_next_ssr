//next 集成 redux
import React from 'react'
import createStore from '../store/store'

const isServer = typeof window === 'undefined' //返回布尔值
const _NEXT_REDUX_STORE_ = '_NEXT_REDUX_STORE_'

function getOrCreateStore() {
    console.log(isServer)
    //如果是服务端
    if (isServer) {
        return createStore()
    }
    //如果是客户端
    if (!window[_NEXT_REDUX_STORE_]) {
        window[_NEXT_REDUX_STORE_] = createStore()
    }
    return window[_NEXT_REDUX_STORE_]
}

const newComp = (Comp) => {
    class withRedux extends React.PureComponent {
        constructor(props) {
            super(props)

            //因为下面创建的store已经被服务端序列化，所以在这里再创建一个
            this.reduxStore = getOrCreateStore(props.initialReduxState)
        }
        render() {
            const { Component, pageProps, ...rest } = this.props

            if (pageProps) {
                pageProps.test = 'test'
            }

            return (
                <Comp
                    Component={Component}
                    pageProps={pageProps}
                    {...rest}
                    reduxStore={this.reduxStore}
                />
            )
        }
    }

    //getInitialProps是传递过来的组件的静态方法
    //服务端初次渲染执行一次
    //客户端页面每次跳转执行
    //返回的对象会被序列化成一段字符串，在查看源代码中可见
    withRedux.getInitialProps = async (ctx) => {
        console.log('666')

        //创建ReduxStore
        const reduxStore = getOrCreateStore()

        ctx.reduxStore = reduxStore

        //获取Comp的props属性
        let appProps = {}
        if (typeof Comp.getInitialProps === 'function') {
            appProps = await Comp.getInitialProps(ctx)
        }

        return { ...appProps, initialReduxState: reduxStore.getState() }
    }

    return withRedux
}

export default newComp
