import configs from "../configs/Configs";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(configs.appwriteUrl)
            .setProject(configs.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );

            // ✅ CHANGE: ensure login is awaited properly
            if (userAccount) {
                return await this.login({ email, password });
            }

            return userAccount;

        } catch (error) {
            console.log("createAccount error:", error);
            return null;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(
                email,
                password
            );
        } catch (error) {
            console.log("login error:", error);
            return null;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            // ✅ CHANGE: better logging
            console.log("getCurrentUser error:", error);
            return null;
        }
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("logout error:", error);
            return null;
        }
    }
}

const authService = new AuthService();
export default authService;