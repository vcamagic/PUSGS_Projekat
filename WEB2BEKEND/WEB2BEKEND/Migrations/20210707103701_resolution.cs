using Microsoft.EntityFrameworkCore.Migrations;

namespace WEB2BEKEND.Migrations
{
    public partial class resolution : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Cause",
                table: "IncidentResolution",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Construction",
                table: "IncidentResolution",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Material",
                table: "IncidentResolution",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SubCause",
                table: "IncidentResolution",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Cause",
                table: "IncidentResolution");

            migrationBuilder.DropColumn(
                name: "Construction",
                table: "IncidentResolution");

            migrationBuilder.DropColumn(
                name: "Material",
                table: "IncidentResolution");

            migrationBuilder.DropColumn(
                name: "SubCause",
                table: "IncidentResolution");
        }
    }
}
