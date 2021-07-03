using Microsoft.EntityFrameworkCore.Migrations;

namespace WEB2BEKEND.Migrations
{
    public partial class workreq : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "IncidentCall",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Comment",
                table: "IncidentCall",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Hazard",
                table: "IncidentCall",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "IncidentCall",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Priority",
                table: "IncidentCall",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Reason",
                table: "IncidentCall",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SurName",
                table: "IncidentCall",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "WorkRequests",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
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

            migrationBuilder.DropColumn(
                name: "Address",
                table: "IncidentCall");

            migrationBuilder.DropColumn(
                name: "Comment",
                table: "IncidentCall");

            migrationBuilder.DropColumn(
                name: "Hazard",
                table: "IncidentCall");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "IncidentCall");

            migrationBuilder.DropColumn(
                name: "Priority",
                table: "IncidentCall");

            migrationBuilder.DropColumn(
                name: "Reason",
                table: "IncidentCall");

            migrationBuilder.DropColumn(
                name: "SurName",
                table: "IncidentCall");
        }
    }
}
