import Link from 'next/link'
import Router from 'next/router'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { setAdd, changeName } from '../store/actions'

const App = (props) => {
    function goToUser() {
        //手动路由：路径
        //Router.push('/user/me/b')

        //手动路由：路径 + 参数
        Router.push({
            pathname: '/user/me',
            query: {
                id: 2,
                age: 32,
            },
        })
    }

    const { count, name, dispatch } = props
    return (
        <div>
            {/* 自动路由 和 路由隐射 */}
            <Link href="/a?id=1" as="/a/1">
                <Button>文章</Button>
            </Link>
            <Button onClick={goToUser}>我的</Button>
            <Button onClick={() => dispatch(setAdd())}>加分</Button>
            <Button onClick={() => dispatch(changeName('大神'))}>该名</Button>
            <p>{count}</p>
            <p>{name}</p>
        </div>
    )
}

export default connect(
    (state) => state,
    (dispatch) => ({ dispatch })
)(App)
