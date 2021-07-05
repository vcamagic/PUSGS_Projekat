using Microsoft.EntityFrameworkCore.Migrations;

namespace WEB2BEKEND.Migrations
{
    public partial class elemn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "InSafetyDocument",
                table: "Elements",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "InSafetyDocument",
                table: "Elements");
        }
    }
}
