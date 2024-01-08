import styles from './Form.module.css'

export default function Form() {
    return(
        <>

             <div className={styles.formContainer}>
                <img src="/logo.png" className={styles.logo}></img>
                        <h2>Sign into Twitter</h2>
                        <button
                            id="googleAccount"
                            className={styles.googleAccount}
                            type="text"><img src="/google.png"></img>
                            Sign in with Google
                        </button>

                        <button
                            id="email"
                            className={styles.appleAccountInput}
                             type="email"><img src="/apple.png"></img>
                             Sign in with Apple
                        </button>
                                  
                        <span>Or</span>
                        <form>
                            <input type="text" placeholder='Phone, email or username'/>
                            <button id="phoneEmailUsername">Next</button>

                        </form>
                        <button id="forgotPassword">Forgot Password?</button>
                        <p>Don't have an account? <a href="#">Sign Up</a></p>
                    </div>

        </>
    )
}