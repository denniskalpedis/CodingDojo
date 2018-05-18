using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace WeddingPlanner.Migrations
{
    public partial class First : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    created_at = table.Column<DateTime>(nullable: false),
                    email = table.Column<string>(nullable: true),
                    first_name = table.Column<string>(nullable: true),
                    last_name = table.Column<string>(nullable: true),
                    password = table.Column<string>(nullable: true),
                    updated_at = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Wedding",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    address = table.Column<string>(nullable: true),
                    created_at = table.Column<DateTime>(nullable: false),
                    date = table.Column<DateTime>(nullable: true),
                    updated_at = table.Column<DateTime>(nullable: false),
                    userid = table.Column<int>(nullable: true),
                    wedderone = table.Column<string>(nullable: true),
                    weddertwo = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Wedding", x => x.id);
                    table.ForeignKey(
                        name: "FK_Wedding_Users_userid",
                        column: x => x.userid,
                        principalTable: "Users",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "RSVP",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    created_at = table.Column<DateTime>(nullable: false),
                    updated_at = table.Column<DateTime>(nullable: false),
                    userid = table.Column<int>(nullable: true),
                    weddingid = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RSVP", x => x.id);
                    table.ForeignKey(
                        name: "FK_RSVP_Users_userid",
                        column: x => x.userid,
                        principalTable: "Users",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_RSVP_Wedding_weddingid",
                        column: x => x.weddingid,
                        principalTable: "Wedding",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RSVP_userid",
                table: "RSVP",
                column: "userid");

            migrationBuilder.CreateIndex(
                name: "IX_RSVP_weddingid",
                table: "RSVP",
                column: "weddingid");

            migrationBuilder.CreateIndex(
                name: "IX_Wedding_userid",
                table: "Wedding",
                column: "userid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RSVP");

            migrationBuilder.DropTable(
                name: "Wedding");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
