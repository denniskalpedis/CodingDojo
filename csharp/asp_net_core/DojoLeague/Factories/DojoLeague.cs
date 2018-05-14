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
            
            using (IDbConnection dbConnection = Connection){
                dbConnection.Open();
                var dojocount = dbConnection.QuerySingle<int>("SELECT COUNT(*) FROM Dojo");
                if (dojocount == 0)
                {
                    string query =  "INSERT INTO Dojo (Name) VALUES ('Rogue')";
                    dbConnection.Execute(query);
                    System.Console.WriteLine("Empty Dojo List!");
                }

            }
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
                string query =  "INSERT INTO Ninja (Name,Description,Level, Dojo_Id) VALUES (@Name, @Description, @Level, @Dojo_Id)";
                dbConnection.Open();
                dbConnection.Execute(query, item);
            }
        }

        public IEnumerable<Dojo> AllDojos(){
            using (IDbConnection dbConnection = Connection){
                dbConnection.Open();
                return dbConnection.Query<Dojo>("SELECT * FROM Dojo");
            }
        }

        public IEnumerable<Ninja> AllNinjas(){
            using (IDbConnection dbConnection = Connection){
                string query = "SELECT * FROM Ninja JOIN Dojo ON Ninja.Dojo_Id = Dojo.Id";
                dbConnection.Open();
                var allninjas = dbConnection.Query<Ninja, Dojo, Ninja>(query, (ninja, dojo) => { ninja.dojo = dojo; return ninja; });
                return allninjas;
            }
        }

        public Ninja NinjaByID(int id){
            using (IDbConnection dbConnection = Connection){
                string query = $"SELECT * FROM Ninja JOIN Dojo ON Ninja.Dojo_Id = Dojo.Id WHERE Ninja.id = {id}";
                dbConnection.Open();
                var SingleNinja = dbConnection.Query<Ninja, Dojo, Ninja>(query, (ninja, dojo) => { ninja.dojo = dojo; return ninja; }).FirstOrDefault();
                return SingleNinja;
            }
        }
        public Dojo DojoByID(int id){
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                string query =
                @"
                SELECT * FROM Dojo WHERE Id = @id;
                SELECT * FROM Ninja WHERE Dojo_Id = @id;
                ";

                using (var multi = dbConnection.QueryMultiple(query, new {Id = id}))
                {
                    var dojo = multi.Read<Dojo>().Single();
                    dojo.Ninjas = multi.Read<Ninja>().ToList();
                    return dojo;
                }
            }
        }
        public IEnumerable<Ninja> RogueNinja(){
            using (IDbConnection dbConnection = Connection){
                // string query = $"SELECT * FROM Ninja WHERE Ninja.Dojo_Id = 1";
                dbConnection.Open();
                // var SingleNinja = dbConnection.Query<Ninja, Dojo, Ninja>(query, (ninja, dojo) => { ninja.dojo = dojo; return ninja; }).FirstOrDefault();
                return dbConnection.Query<Ninja>("SELECT * FROM Ninja WHERE Ninja.Dojo_Id = 1");
            }
        }
        public void Banish(int id) {
            using (IDbConnection dbConnection = Connection) {
                string query = $"UPDATE Ninja SET Dojo_Id = 1 WHERE Ninja.Id = {id}";
                dbConnection.Open();
                dbConnection.Execute(query);
            }
        }

        public void Recruit(int d_id, int n_id) {
            using (IDbConnection dbConnection = Connection) {
                string query = $"UPDATE Ninja SET Dojo_Id = {d_id} WHERE Ninja.Id = {n_id}";
                dbConnection.Open();
                dbConnection.Execute(query);
            }
        }
    }
}
