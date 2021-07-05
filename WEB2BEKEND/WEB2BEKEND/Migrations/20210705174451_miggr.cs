using Microsoft.EntityFrameworkCore.Migrations;

namespace WEB2BEKEND.Migrations
{
    public partial class miggr : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "History",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    DocumentId = table.Column<string>(nullable: true),
                    DateChange = table.Column<string>(nullable: true),
                    ChangeBy = table.Column<string>(nullable: true),
                    NewStatus = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_History", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "History");
        }
    }
}
