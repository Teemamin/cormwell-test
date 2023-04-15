import classes from '../styles/Loading.module.css'

const Loading = () => {
    return (
    <div className={classes.spinnerContainer}>
        <div className={classes.loadingSpinner}></div>
    </div>
    )
  }


export default Loading