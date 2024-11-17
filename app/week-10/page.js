"use client"
import {useUserAuth} from "./_utils/auth-context";
import { useState} from "react";
import Link from 'next/link'

export default function Page() {
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();
    const [signedIn, setSignedIn] = useState();


    const login = async () => {
        await gitHubSignIn();

        setSignedIn(true);
    };
    const logout = async () => {
        await firebaseSignOut();

        setSignedIn(false);
    }

    return (
        <main className="bg-amber-100 p-4 h-dvh">
            {user ? <p className='m-2 pb-5'>Signed in as {user.displayName} ({user.email})</p> : null}
            <button hidden={user} className={'bg-amber-300 p-3 border-black border'}
                    onClick={() => login()}>Github SignIn
            </button>
            <div className='mt-3, mb-3'>
                <Link hidden={!user} className={'bg-amber-300 p-3 border-black border'}
                      href={{pathname: 'week-10/shopping-list', }}>Navigate to shopping list
                </Link>
            </div>
            <div className='mt-3, mb-3'>
                <button hidden={!user} className={'bg-amber-300 p-3 border-black border'}
                        onClick={() => logout()}>Sign Out
                </button>
            </div>
        </main>
    );
}
