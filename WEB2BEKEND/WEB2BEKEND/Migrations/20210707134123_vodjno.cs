using Microsoft.EntityFrameworkCore.Migrations;

namespace WEB2BEKEND.Migrations
{
    public partial class vodjno : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Type",
                table: "UserRequests");

            migrationBuilder.AddColumn<string>(
                name: "InputState",
                table: "UserRequests",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "InputState",
                table: "UserRequests");

            migrationBuilder.AddColumn<string>(
                name: "Type",
                table: "UserRequests",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
