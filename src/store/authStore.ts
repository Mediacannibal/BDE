import axios, { AxiosResponse } from "axios";
import { Store, useStore } from "./Store";

// export const authStore = new Store<null | string>(typeof localStorage === "undefined" ? null : localStorage['jwt']);

export const authStore = new Store<null | string>(typeof localStorage === "undefined" ? null : localStorage.getItem('AuthToken') ? localStorage.getItem('AuthToken') : null);


export const useAuth = () => {
    const [auth, setAuth] = useStore(authStore);

    return {
        auth, setAuth,
        login(jwt: string) {
            setAuth(jwt);
        },
        logout() {
            setAuth(null);
        },
        async loginWithCreds(callback: (arg0: AxiosResponse<any>) => void, data: any) {
            const loginInstance = axios.create({
                baseURL: 'https://api.etherealmachines.com'
            });
            console.log("login2data", data);

            loginInstance.post(`/auth/token/login/`, data, {
                headers: {
                    "Content-Type": "application/json",
                }
            })
                .then((res) => {
                    callback(res)
                    console.log(res)
                    console.log('logged in')

                })
                .catch(err => callback(err))
        }
    }
};