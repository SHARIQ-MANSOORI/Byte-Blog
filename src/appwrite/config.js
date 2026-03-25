import configs from "../configs/Configs.js";

// ❌ OLD: TablesDB
// ✅ CHANGE: use Databases
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Config {
    client = new Client();
    databases; // ✅ CHANGE: renamed
    bucket;

    constructor() {
        this.client
            .setEndpoint(configs.appwriteUrl)
            .setProject(configs.appwriteProjectId);

        // ❌ OLD: TablesDB
        // ✅ CHANGE:
        this.databases = new Databases(this.client);

        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            // ❌ OLD: createRow
            // ✅ CHANGE: createDocument
            return await this.databases.createDocument(
                configs.appwriteDataBaseId,
                configs.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
        } catch (error) {
            console.log("Appwrite error :: createPost :: error", error);
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            // ❌ OLD: updateRow
            // ✅ CHANGE: updateDocument
            return await this.databases.updateDocument(
                configs.appwriteDataBaseId,
                configs.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
        } catch (error) {
            console.log("Appwrite error :: updatePost :: error", error);
        }
    }

    async deletePost(slug) {
        try {
            // ❌ OLD: deleteRow
            // ✅ CHANGE: deleteDocument
            await this.databases.deleteDocument(
                configs.appwriteDataBaseId,
                configs.appwriteCollectionId,
                slug
            );

            return true;
        } catch (error) {
            console.log("Appwrite error :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            // ❌ OLD: getRow
            // ✅ CHANGE: getDocument
            return await this.databases.getDocument(
                configs.appwriteDataBaseId,
                configs.appwriteCollectionId,
                slug
            );
        } catch (error) {
            // ❌ OLD BUG: console,log
            // ✅ CHANGE:
            console.log("Appwrite error :: getPost :: error:", error);
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            // ❌ OLD: listRows
            // ✅ CHANGE: listDocuments
            return await this.databases.listDocuments(
                configs.appwriteDataBaseId,
                configs.appwriteCollectionId,
                queries
            );
        } catch (error) {
            console.log("Appwrite error :: getPosts :: error:", error);
        }
    }

    // ---------------- FILE UPLOAD ----------------

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                configs.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Appwrite error :: uploadFile :: error:", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                configs.appwriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.log("Appwrite error :: deleteFile :: error:", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        try {
            const url = this.bucket.getFilePreview(
                configs.appwriteBucketId,
                fileId
            );
            return url.href || url.toString() || url;
        } catch (error) {
            console.log("Appwrite service :: getFilePreview :: error", error);
            return null;
        }
    }

    getFileDownload(fileId) {
        try {
            const url = this.bucket.getFileDownload(
                configs.appwriteBucketId,
                fileId
            );
            return url.href || url.toString() || url;
        } catch (error) {
            console.log("Appwrite service :: getFileDownload :: error", error);
            return null;
        }
    }
}

const config = new Config();
export default config;