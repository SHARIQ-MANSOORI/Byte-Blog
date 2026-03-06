import configs from "../configs/Configs.js";
import { Client, ID, TablesDB , Storage , Query  } from "appwrite";

export class Config{
     client = new Client();
     tablesDB ;
     bucket;


    constructor(){
         this.client
         .setEndpoint(configs.appwriteUrl)
        .setProject(configs.appwriteProjectId);
        
        this.tablesDB = new TablesDB(this.client);
        this.bucket = new Storage(this.client);
       
    }

    async createPost({title , slug , content , featuredImage , status , userId}){
        try {
            return await this.tablesDB.createRow(
                configs.appwriteDataBaseId,
                configs.appwriteCollectionId,
                slug,
                {
                    title ,
                    content,
                    featuredImage,
                    status,
                    userId

                }


            )
            
        } catch (error) {
            console.log("Appwrite error :: createPost :: error",error)
        }

    }

    async updatePost(slug ,{title , content , featuredImage , status}){
        try {
            return await this.tablesDB.updateRow(
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
            console.log("Appwrite error :: updatePost :: error" , error);
        }

    }

    async deletePost(slug){
        try {
             await this.tablesDB.deleteRow(
                configs.appwriteDataBaseId,
                configs.appwriteCollectionId,
                slug
            )

            return true;
            
        } catch (error) {
            console.log("Apprite error :: deletePost :: error",error)
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.tablesDB.getRow(
                configs.appwriteDataBaseId,
                configs.appwriteCollectionId,
                slug,
            )
            
        } catch (error) {
            console,log("Appwrite error :: getPost :: error:",error)
        }
    }
    
    async getPosts(queries =[ Query.equal("status" ,"status")]){
        try {
            
           return  await this.tablesDB.listRows(
                configs.appwriteDataBaseId,
                configs.appwriteCollectionId,
                queries,
            )
            
        } catch (error) {
            console.log("Appwrite error :: getPosts :: error :" , error)
        }
    }

    // file upload services

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                configs.appwriteBucketId,
                ID.unique(),
                file
                
            )
            
        } catch (error) {
            console.log("Appwrite error :: uploadFile :: error : ", error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
             await this.bucket.deleteFile(
                configs.appwriteBucketId,
                fileId
                
            )
            return true;
            
        } catch (error) {
            console.log("Appwrite error :: deleteFile :: error :",error);
            return false;
        }
    }

    async getFilePreview(fileId){
        try {
            return await this.bucket.getFilePreview(
                configs.appwriteBucketId,
                fileId,

            )
            
        } catch (error) {
             console.log("Appwrite serive :: getFilePreview :: error", error);
            
        }
    }
}

const config = new Config();

export default config