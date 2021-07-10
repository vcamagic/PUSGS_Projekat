using Microsoft.EntityFrameworkCore.Migrations;

namespace WEB2BEKEND.Migrations
{
    public partial class renameHistory : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_History_SafetyDocuments_SafetyDocumentId",
                table: "History");

            migrationBuilder.DropIndex(
                name: "IX_History_SafetyDocumentId",
                table: "History");

            migrationBuilder.DropColumn(
                name: "SafetyDocumentId",
                table: "History");

            migrationBuilder.CreateTable(
                name: "HistorySafeDocs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(nullable: true),
                    State = table.Column<string>(nullable: true),
                    Date = table.Column<string>(nullable: true),
                    SafetyDocumentId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HistorySafeDocs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_HistorySafeDocs_SafetyDocuments_SafetyDocumentId",
                        column: x => x.SafetyDocumentId,
                        principalTable: "SafetyDocuments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_HistorySafeDocs_SafetyDocumentId",
                table: "HistorySafeDocs",
                column: "SafetyDocumentId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "HistorySafeDocs");

            migrationBuilder.AddColumn<int>(
                name: "SafetyDocumentId",
                table: "History",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_History_SafetyDocumentId",
                table: "History",
                column: "SafetyDocumentId");

            migrationBuilder.AddForeignKey(
                name: "FK_History_SafetyDocuments_SafetyDocumentId",
                table: "History",
                column: "SafetyDocumentId",
                principalTable: "SafetyDocuments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
