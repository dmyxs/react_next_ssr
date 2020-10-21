import { withRouter } from 'next/router'

const A = (props) => {
    const { router } = props
    return (
        <div>
            <p>{router.query.id}</p>
            <span>this is A pages</span>
            <style jsx>
                {`
                    span {
                        color: red;
                    }
                `}
            </style>
        </div>
    )
}

export default withRouter(A)
