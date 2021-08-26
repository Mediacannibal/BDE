import { Store, useStore } from "./Store";
import getuser from '../utils/api/getuser'
import edituser from '../utils/api/edituser'

export class userDetailsItem {
    id: String
    image: String
    firstname: String
    lastname: String
    email: String
    address: String
    dob: String
    user_type: String
    gender: String
    auth_type: String
    photo_url: String
    dial_code: String
    phone: String
    is_deleted: String
    updated_by: String
    owned_by: String
    created_at: String
    updated_at: String
    created_by: String
    TextData: any

    constructor(o: {
        id: String
        image: String
        firstname: String
        lastname: String
        email: String
        address: String
        dob: String
        user_type: String
        gender: String
        auth_type: String
        photo_url: String
        dial_code: String
        phone: String
        is_deleted: String
        updated_by: String
        owned_by: String
        created_at: String
        updated_at: String
        created_by: String
        TextData: any
    }) {
        this.id = o.id
        this.image = o.image
        this.firstname = o.firstname
        this.lastname = o.lastname
        this.email = o.email
        this.address = o.address
        this.dob = o.dob
        this.user_type = o.user_type
        this.gender = o.gender
        this.auth_type = o.auth_type
        this.photo_url = o.photo_url
        this.dial_code = o.dial_code
        this.phone = o.phone
        this.is_deleted = o.is_deleted
        this.updated_by = o.updated_by
        this.owned_by = o.owned_by
        this.created_at = o.created_at
        this.updated_at = o.updated_at
        this.created_by = o.created_by
        this.TextData = o.TextData
    }
}

export const userDetailsStore = new Store<userDetailsItem[] | false>(false);

export const useuserDetails = () => {
    const [userDetail, setuserDetail] = useStore(userDetailsStore);

    return {
        userDetail, setuserDetail,

        async loaduserDetail() {
            await getuser()
                .then(data => {
                    setuserDetail(data.data.results)
                    console.log('selfuser selfuser selfuser :', data.data.results)
                })
                .catch(err => {
                    console.log(err)
                })
        },

        async edituserDetail(id: any, data: any) {
            await edituser(id, data)
                .then(res => {
                    setuserDetail(oldarr => {
                        return (
                            oldarr &&
                            oldarr.map((obj: any) => {
                                const getobj = (o: any) => {
                                    let x = o
                                    x.image = data.image
                                    x.firstname = data.firstname
                                    x.lastname = data.lastname
                                    x.email = data.email
                                    x.address = data.address
                                    x.dob = data.dob
                                    x.user_type = data.user_type
                                    x.gender = data.gender
                                    x.auth_type = data.auth_type
                                    x.photo_url = data.photo_url
                                    x.dial_code = data.dial_code
                                    x.phone = data.phone
                                    return x
                                }
                                return String(obj.id) === String(id) ? getobj(obj) : obj
                            })
                        )
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        },

    }

}