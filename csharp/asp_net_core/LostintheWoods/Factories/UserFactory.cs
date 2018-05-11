using System.Collections.Generic;
using System.Linq;
using Dapper;
using System.Data;
using MySql.Data.MySqlClient;
using LostintheWoods.Models;
using System;

namespace LostintheWoods.Factory{
    public class TrailsFactory:IFactory<Trails>{
        private string info;

        public TrailsFactory(){
            info = "server=localhost;userid=root;password=root;port=3306;database=trails;SslMode=None";
        }

        internal IDbConnection Connection{
            get{
                return new MySqlConnection(info);
            }
        }

        public void Add(Trails item){
            using (IDbConnection dbConnection = Connection){
                string query =  "INSERT INTO Trails (Name,Description,Length,Elevation,Latitude,Longitude,created_at,updated_at) VALUES (@Name, @Description, @Length, @Elevation, @Latitude, @Longitude, NOW(), NOW())";
                dbConnection.Open();
                dbConnection.Execute(query, item);
            }
        }

        public IEnumerable<Trails> FindAll(){
            using (IDbConnection dbConnection = Connection){
                dbConnection.Open();
                return dbConnection.Query<Trails>("SELECT * FROM Trails");
            }
        }

        public Trails FindByID(int id){
            using (IDbConnection dbConnection = Connection){
                dbConnection.Open();
                return dbConnection.Query<Trails>("SELECT * FROM Trails WHERE id = @Id", new { Id = id }).FirstOrDefault();
            }
        }
    }
}
