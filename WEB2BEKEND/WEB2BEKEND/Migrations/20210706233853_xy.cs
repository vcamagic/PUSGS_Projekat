using Microsoft.EntityFrameworkCore.Migrations;

namespace WEB2BEKEND.Migrations
{
    public partial class xy : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "X",
                table: "IncidentElement");

            migrationBuilder.DropColumn(
                name: "Y",
                table: "IncidentElement");

            migrationBuilder.DropColumn(
                name: "X",
                table: "Elements");

            migrationBuilder.DropColumn(
                name: "Y",
                table: "Elements");

            migrationBuilder.AddColumn<string>(
                name: "CoordinateX",
                table: "IncidentElement",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CoordinateY",
                table: "IncidentElement",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CoordinateX",
                table: "Elements",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CoordinateY",
                table: "Elements",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CoordinateX",
                table: "IncidentElement");

            migrationBuilder.DropColumn(
                name: "CoordinateY",
                table: "IncidentElement");

            migrationBuilder.DropColumn(
                name: "CoordinateX",
                table: "Elements");

            migrationBuilder.DropColumn(
                name: "CoordinateY",
                table: "Elements");

            migrationBuilder.AddColumn<string>(
                name: "X",
                table: "IncidentElement",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Y",
                table: "IncidentElement",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "X",
                table: "Elements",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Y",
                table: "Elements",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
