using Microsoft.EntityFrameworkCore.Migrations;

namespace WEB2BEKEND.Migrations
{
    public partial class Incidents1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Incidents",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<string>(nullable: true),
                    Priority = table.Column<int>(nullable: false),
                    Confirmed = table.Column<bool>(nullable: false),
                    Status = table.Column<string>(nullable: true),
                    Eta = table.Column<string>(nullable: true),
                    Ata = table.Column<string>(nullable: true),
                    TimeOfIncident = table.Column<string>(nullable: true),
                    Etr = table.Column<string>(nullable: true),
                    Calls = table.Column<int>(nullable: false),
                    Voltage = table.Column<int>(nullable: false),
                    AffectedConsumers = table.Column<int>(nullable: false),
                    SheduledTime = table.Column<string>(nullable: true),
                    Creator = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Incidents", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "IncidentCall",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IncidentId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IncidentCall", x => x.Id);
                    table.ForeignKey(
                        name: "FK_IncidentCall_Incidents_IncidentId",
                        column: x => x.IncidentId,
                        principalTable: "Incidents",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "IncidentElement",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IncidentId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IncidentElement", x => x.Id);
                    table.ForeignKey(
                        name: "FK_IncidentElement_Incidents_IncidentId",
                        column: x => x.IncidentId,
                        principalTable: "Incidents",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "IncidentResolution",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IncidentId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IncidentResolution", x => x.Id);
                    table.ForeignKey(
                        name: "FK_IncidentResolution_Incidents_IncidentId",
                        column: x => x.IncidentId,
                        principalTable: "Incidents",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Multimedia",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IncidentId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Multimedia", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Multimedia_Incidents_IncidentId",
                        column: x => x.IncidentId,
                        principalTable: "Incidents",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_IncidentCall_IncidentId",
                table: "IncidentCall",
                column: "IncidentId");

            migrationBuilder.CreateIndex(
                name: "IX_IncidentElement_IncidentId",
                table: "IncidentElement",
                column: "IncidentId");

            migrationBuilder.CreateIndex(
                name: "IX_IncidentResolution_IncidentId",
                table: "IncidentResolution",
                column: "IncidentId");

            migrationBuilder.CreateIndex(
                name: "IX_Multimedia_IncidentId",
                table: "Multimedia",
                column: "IncidentId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "IncidentCall");

            migrationBuilder.DropTable(
                name: "IncidentElement");

            migrationBuilder.DropTable(
                name: "IncidentResolution");

            migrationBuilder.DropTable(
                name: "Multimedia");

            migrationBuilder.DropTable(
                name: "Incidents");
        }
    }
}
