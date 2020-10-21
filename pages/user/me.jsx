import styles from '../../styles/Me.module.css'

const Mine = ({ name }) => {
    return (
        <div>
            <p>{name}</p>
            <span className={styles.title}>this is me pages</span>
        </div>
    )
}

Mine.getInitialProps = () => {
    return {
        name: 'tao',
    }
}

export default Mine
