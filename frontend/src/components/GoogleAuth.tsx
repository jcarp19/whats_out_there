import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import googleLogin from "../images/googleLogin.png";
import googleLoginSmall from "../images/googleLoginSmall.png";

// for logic: if there is a user render this, otherwise render that
export default function GoogleAuth() {
    const { user } = useContext(AuthContext);

    return (
        <div className="googleAuth">
            {!user ? (


                <picture>
                    {/* <img src={googleLogin} */}
                    <source media="(min-width: 1200px)"
                        srcSet={googleLogin}
                        className="googleLogin"
                        onClick={() => {
                            signInWithGoogle()
                        }} />

                    <source media="(max-width: 760px)"
                        srcSet={googleLoginSmall}
                        className="googleLoginSmall"
                        onClick={() => {
                            signInWithGoogle()
                        }} />
                </picture>



            ) : (
                <button onClick={() => { signOut() }}>Sign Out</button>
            )}
            {/* <p>Welcome: {user?.displayName}</p> */}
            {/* <p>{JSON.stringify(user, null, 2)}</p> */}

        </div>
    )


}

{/* <picture>
    <source
        media="(min-width: 650px)"
        srcset="images/img1.png">
        <source
            media="(min-width: 465px)"
            srcset="images/img2.png">
            <img src="images/img-default.png"
                alt="a cute kitten">
            </picture> */}