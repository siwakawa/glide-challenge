import Account from '../models/Account';
import { API_URL } from '../utils/constants';
import RequestUtils from '../utils/RequestUtils';

export default class AccountController {
    public static get(onSuccess: (data) => void, onError: (res) => void) {
        RequestUtils.get(API_URL.ACCOUNTS, [], onSuccess, onError);
    }
    public static create(email:string, onSuccess: (data) => void, onError: (res) => void) {
        RequestUtils.post(API_URL.ACCOUNTS, {email: email}, onSuccess, onError);
    }
    public static remove(id:number, onSuccess: (data) => void, onError: (res) => void) {
        RequestUtils.delete(API_URL.ACCOUNTS+id, onSuccess, onError);
    }
    public static update(id:number, email:string, onSuccess: (data) => void, onError: (res) => void) {
        RequestUtils.put(API_URL.ACCOUNTS+id+'/', {email: email}, onSuccess, onError);
    }
}