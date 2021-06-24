using Microsoft.EntityFrameworkCore.Migrations;

namespace WEB2BEKEND.Migrations
{
    public partial class IncidentElement : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "IncidentElement",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "IncidentElement",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Type",
                table: "IncidentElement",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "X",
                table: "IncidentElement",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Y",
                table: "IncidentElement",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Address",
                table: "IncidentElement");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "IncidentElement");

            migrationBuilder.DropColumn(
                name: "Type",
                table: "IncidentElement");

            migrationBuilder.DropColumn(
                name: "X",
                table: "IncidentElement");

            migrationBuilder.DropColumn(
                name: "Y",
                table: "IncidentElement");
        }
    }
}
