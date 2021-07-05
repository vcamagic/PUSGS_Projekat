using Microsoft.EntityFrameworkCore.Migrations;

namespace WEB2BEKEND.Migrations
{
    public partial class kurcina3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "WorkRequests",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Type = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true),
                    Incident = table.Column<string>(nullable: true),
                    Street = table.Column<string>(nullable: true),
                    StartDate = table.Column<string>(nullable: true),
                    EndDate = table.Column<string>(nullable: true),
                    CreatedByUser = table.Column<string>(nullable: true),
                    Purpose = table.Column<string>(nullable: true),
                    PhoneNum = table.Column<string>(nullable: true),
                    Company = table.Column<string>(nullable: true),
                    Details = table.Column<string>(nullable: true),
                    Notes = table.Column<string>(nullable: true),
                    DateCreated = table.Column<string>(nullable: true),
                    History = table.Column<string>(nullable: true),
                    State = table.Column<string>(nullable: true),
                    Multimedia = table.Column<string>(nullable: true),
                    Equipment = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkRequests", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "WorkRequests");
        }
    }
}
