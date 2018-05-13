using System.Collections.Generic;
using System.Linq;
using Dapper;
using System.Data;
using MySql.Data.MySqlClient;
using DojoLeague.Models;
using System;

namespace DojoLeague.Factory{
    public class DojoLeagueFactory:IFactory<Dojo>{
        private string info;

        public DojoLeagueFactory(){
            info = "server=localhost;userid=root;password=root;port=3306;database=DojoLeague;SslMode=None";
        }

        internal IDbConnection Connection{
            get{
                return new MySqlConnection(info);
            }
        }

        public void AddDojo(Dojo item){
            using (IDbConnection dbConnection = Connection){
                string query =  "INSERT INTO Dojo (Name,Location,Information) VALUES (@Name, @Location, @Information)";
                dbConnection.Open();
                dbConnection.Execute(query, item);
            }
        }
        public void AddNinja(Ninja item){
            using (IDbConnection dbConnection = Connection){
                string query =  "INSERT INTO Ninja (Name,Description,Level) VALUES (@Name, @Description, @Level)";
                dbConnection.Open();
                dbConnection.Execute(query, item);
            }
        }

        public IEnumerable<Dojo> FindAll(){
            using (IDbConnection dbConnection = Connection){
                dbConnection.Open();
                return dbConnection.Query<Dojo>("SELECT * FROM DojoLeagues");
            }
        }

        public Dojo FindByID(int id){
            using (IDbConnection dbConnection = Connection){
                dbConnection.Open();
                return dbConnection.Query<Dojo>("SELECT * FROM DojoLeagues WHERE id = @Id", new { Id = id }).FirstOrDefault();
            }
        }
    }
}
