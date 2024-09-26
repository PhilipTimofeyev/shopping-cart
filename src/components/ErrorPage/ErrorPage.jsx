import { Link } from "react-router-dom";
import styles from './ErrorPage.module.css'

const ErrorPage = () => {
    return (
        <div className={styles.error}>
            <h1>Fiddlesticks! This page doesn't exist.</h1>
            <Link to="/">
                Go back to the homepage
            </Link>
        </div>
    );
};

export default ErrorPage;
