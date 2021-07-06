using Microsoft.EntityFrameworkCore.Migrations;

namespace WEB2BEKEND.Migrations
{
    public partial class idegas : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "WorkPlans",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Type = table.Column<string>(nullable: true),
                    WorkPlanss = table.Column<string>(nullable: true),
                    Incident = table.Column<string>(nullable: true),
                    Street = table.Column<string>(nullable: true),
                    StartDate = table.Column<string>(nullable: true),
                    EndDate = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true),
                    createdByUser = table.Column<string>(nullable: true),
                    Crew = table.Column<string>(nullable: true),
                    Purpouse = table.Column<string>(nullable: true),
                    Notes = table.Column<string>(nullable: true),
                    PhoneNum = table.Column<string>(nullable: true),
                    Company = table.Column<string>(nullable: true),
                    DateCreated = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkPlans", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "WorkPlans");
        }
    }
}
