import{MongoClient} from "mongodb";
export class connect{
user;
port;
#pass;
#host;
#cluster;
#dbName;
static instance;
constructor({user:u,port:p, pass: w, host: h,cluster:c, dbName: d}={
    user:"mongo",
    port:47797,
    pass: "PSmQbwecKrbuFTCqXmYoaqicgEZpFeF",
    host: "mongodb://",
    cluster: "monorail.proxy.rlwy.net",
    dbName: "test"


}){

    if(typeof connect.instance === "object"){
        return connect.instance;
     }
     this.user = u
     this.port = p
     this.setPass = w;
     this.setHost = h;
     this.setCluster = c;
     this.setDbName = d;
     this.#open();
     this.db= this.conexion.db(this.getDbName)
     connect.instance=this;
     return this;
     
     }
     set setPass(pass){
         this.#pass = pass;
     }
     set setHost(host){
         this.#host = host;
     }
     set setCluster(cluster){
         this.#cluster=cluster;
     }
     set detDbName(dbName){
         this.#dbName= dbName;
     }
     get getPass(){
         return this.#Pass;
     }
     get getHost(){
         return this.#Host;
     }
     get getCluster(){
         return this.#Cluster;
     }
     get getDbName(){
         return this.#DbName;
     }

     async #open(){
        this.conexion = new MongoClient((`${this.getHost}${this.user}:${this.getPass}@${this.getCluster}:${this.port}/`));
        await this.conexion.connect();

     }
     async reconnect(){
        await this.#open();
     }
