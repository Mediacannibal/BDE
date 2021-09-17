import { Store, useStore } from "./Store";
import getuser from '../utils/api/getuser'
import edituser from '../utils/api/edituser'

export class userDetailsItem {
    id: String
    image: String
    username: String
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
    is_active: Boolean
    company_name: String
    branch_name: String
    is_deleted: String
    updated_by: String
    owned_by: String
    user_identity: String
    created_at: String
    updated_at: String
    created_by: String
    deleted_at: String
    TextData: any

    constructor(o: {
        id: String
        image: String
        username: String
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
        is_active: Boolean
        company_name: String
        branch_name: String
        is_deleted: String
        updated_by: String
        owned_by: String
        user_identity: String
        created_at: String
        updated_at: String
        created_by: String
        deleted_at: String
        TextData: any
    }) {
        this.id = o.id
        this.image = o.image
        this.username = o.username
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
        this.is_active = o.is_active
        this.company_name = o.company_name
        this.branch_name = o.branch_name
        this.is_deleted = o.is_deleted
        this.updated_by = o.updated_by
        this.owned_by = o.owned_by
        this.user_identity = o.user_identity
        this.created_at = o.created_at
        this.updated_at = o.updated_at
        this.created_by = o.created_by
        this.deleted_at = o.deleted_at
        this.TextData = o.TextData
    }
}

export const userDetailsStore = new Store<userDetailsItem[] | false>(false);

export const SelfDetailsStore = new Store<userDetailsItem | false>(typeof localStorage === "undefined" ? null : localStorage.getItem('UserDetails') ? JSON.parse(String(localStorage.getItem('UserDetails'))) : null);



export const useuserDetails = () => {
    const [userDetail, setuserDetail] = useStore(userDetailsStore);
    const [self, setself] = useStore(SelfDetailsStore);

    return {
        userDetail, setuserDetail, self, setself,

        async loaduserDetail() {
            await getuser()
                .then(data => {
                    setuserDetail(data.data.results)
                    // console.log('selfuser selfuser selfuser :', data.data.results)
                })
                .catch(err => {
                    console.log(err)
                })
        },

        async edituserDetail(id: any, data: any) {
            await edituser(id, data)
                .then(res => {
                    // console.log("responce responce responce : >>>> :", res.data.result.user_details);
                    localStorage.setItem('UserDetails', JSON.stringify(res.data.result.user_details));
                    setuserDetail(oldarr => {
                        return (
                            oldarr &&
                            oldarr.map((obj: any) => {
                                const getobj = (o: any) => {
                                    let x = o
                                    x.username = data.username
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
                                    x.company_name = data.company_name
                                    x.branch_name = data.branch_name
                                    x.is_active = data.is_active
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