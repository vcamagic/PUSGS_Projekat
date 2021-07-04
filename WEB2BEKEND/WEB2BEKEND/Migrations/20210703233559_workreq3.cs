using Microsoft.EntityFrameworkCore.Migrations;

namespace WEB2BEKEND.Migrations
{
    public partial class workreq3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_WorkRequests",
                table: "WorkRequests");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "WorkRequests");

            migrationBuilder.AddColumn<string>(
                name: "WrId",
                table: "WorkRequests",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_WorkRequests",
                table: "WorkRequests",
                column: "WrId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_WorkRequests",
                table: "WorkRequests");

            migrationBuilder.DropColumn(
                name: "WrId",
                table: "WorkRequests");

            migrationBuilder.AddColumn<string>(
                name: "Id",
                table: "WorkRequests",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_WorkRequests",
                table: "WorkRequests",
                column: "Id");
        }
    }
}
