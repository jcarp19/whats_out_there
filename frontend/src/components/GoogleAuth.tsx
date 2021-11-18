import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import googleLogin from "../images/googleLogin.png";
import googleLoginSmall from "../images/googleLoginSmall.png";
import darkpark1 from "../images/darkpark1.jpg";

// for logic: if there is a user render this, otherwise render that
export default function GoogleAuth() {
    const { user } = useContext(AuthContext);

    return (
        <div>



            {!user ? (
                <div>
                    <a
                        // src={googleLogin}
                        // srcSet={`${googleLoginSmall} 300w, ${googleLogin}, 1200w`}

                        className="googleLogin"
                        onClick={() => {
                            signInWithGoogle()
                        }}> Login </a>
                </div>
            ) : (
                <>
                <a
                    className="googleSignOut"
                    onClick={() => { signOut() }}>Sign Out</a>
                </>
            )}
            {/* <p>Welcome: {user?.displayName}</p> */}
            {/* <p>{JSON.stringify(user, null, 2)}</p>


                *trying to get the google buttons to work and failing!*
            {/* {!user ? (
                <div>
                    <picture>
                        {/* <source media="(min-width:768)" srcSet={googleLogin} />
                        <source media="(min-width:1200)" srcSet={darkpark1} /> */}
            {/* <img
                            src={googleLoginSmall}
                            alt="Google Login"
                            // style="width:auto;"
                            onClick={() => { signInWithGoogle() }} />
                    </picture>
                </div>
            ) : (
                <a
                    className="googleSignOut"
                    onClick={() => { signOut() }}>Sign Out</a>
            )} */}

        </div>
    )


}