import { Store, useStore } from "./Store";


export class userDetailsItem {

    address: String;
    auth_type: String;
    dial_code: String;
    dob: String;
    email: String;
    firstname: String;
    gender: String;
    image: String;
    is_active: boolean;
    lastname: String;
    phone: any;
    photo_url: String;
    profile_id: Number;
    referral_code: String;
    user: String;
    user_id: Number;
    user_type: String;

    constructor(o: {
        address: String;
        auth_type: String;
        dial_code: String;
        dob: String;
        email: String;
        firstname: String;
        gender: String;
        image: String;
        is_active: boolean;
        lastname: String;
        phone: any;
        photo_url: String;
        profile_id: Number;
        referral_code: String;
        user: String;
        user_id: Number;
        user_type: String;
    }) {
        this.address = o.address;
        this.auth_type = o.auth_type;
        this.dial_code = o.dial_code;
        this.dob = o.dob;
        this.email = o.email;
        this.firstname = o.firstname;
        this.gender = o.gender;
        this.image = o.image;
        this.is_active = o.is_active;
        this.lastname = o.lastname;
        this.phone = o.phone;
        this.photo_url = o.photo_url;
        this.profile_id = o.profile_id;
        this.referral_code = o.referral_code;
        this.user = o.user;
        this.user_id = o.user_id;
        this.user_type = o.user_type;
    }
}

export const userDetailsStore = new Store<userDetailsItem | false>(false);

export const useuserDetails = () => {
    const [userDetail, setuserDetail] = useStore(userDetailsStore);

    return {
        userDetail, setuserDetail,

        async loaduserDetail() {
            setuserDetail(JSON.parse(String(localStorage.getItem("UserDetails"))));
        },

    }

}