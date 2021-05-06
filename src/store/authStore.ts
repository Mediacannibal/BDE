import { Store, useStore } from "./Store";

// export const authStore = new Store<null | string>(typeof localStorage === "undefined" ? null : localStorage['jwt']);

export const authStore = new Store<null | string>(typeof localStorage === "undefined" ? null : localStorage.getItem('AuthToken') ? JSON.parse(String(localStorage.getItem('AuthToken'))) : null);


export const useAuth = () => {
    const [auth, setAuth] = useStore(authStore);

    return {
        auth, setAuth,
        login(AuthToken: string) {
            setAuth(AuthToken);
        },
        logout() {
            setAuth(null);
        },
    }
};