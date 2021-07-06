using Microsoft.EntityFrameworkCore.Migrations;

namespace WEB2BEKEND.Migrations
{
    public partial class rename : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Calls",
                table: "Incidents");

            migrationBuilder.AddColumn<int>(
                name: "CallsNum",
                table: "Incidents",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CallsNum",
                table: "Incidents");

            migrationBuilder.AddColumn<int>(
                name: "Calls",
                table: "Incidents",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
