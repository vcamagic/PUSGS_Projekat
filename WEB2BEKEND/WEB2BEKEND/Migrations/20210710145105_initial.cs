using Microsoft.EntityFrameworkCore.Migrations;

namespace WEB2BEKEND.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Calls",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Reason = table.Column<string>(nullable: true),
                    Hazard = table.Column<string>(nullable: true),
                    Comment = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    SurName = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    Priority = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Calls", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Consumers",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Surname = table.Column<string>(nullable: true),
                    Street = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true),
                    Postal = table.Column<string>(nullable: true),
                    Priority = table.Column<int>(nullable: false),
                    Phone = table.Column<string>(nullable: true),
                    Type = table.Column<string>(nullable: true),
                    Deleted = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Consumers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CrewRequests",
                columns: table => new
                {
                    Name = table.Column<string>(nullable: false),
                    Id = table.Column<string>(nullable: true),
                    CrewMembers = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CrewRequests", x => x.Name);
                });

            migrationBuilder.CreateTable(
                name: "Elements",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    CoordinateX = table.Column<string>(nullable: true),
                    CoordinateY = table.Column<string>(nullable: true),
                    InSafetyDocument = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Elements", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "HistoryWP",
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
                    table.PrimaryKey("PK_HistoryWP", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Maps",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    IncidentId = table.Column<int>(nullable: false),
                    X = table.Column<string>(nullable: true),
                    Y = table.Column<string>(nullable: true),
                    CrewName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Maps", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SafetyDocuments",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<string>(nullable: true),
                    SwitchingPlan = table.Column<int>(nullable: false),
                    Status = table.Column<string>(nullable: true),
                    Creator = table.Column<string>(nullable: true),
                    Crew = table.Column<string>(nullable: true),
                    Details = table.Column<string>(nullable: true),
                    Notes = table.Column<string>(nullable: true),
                    Phone = table.Column<string>(nullable: true),
                    State = table.Column<string>(nullable: true),
                    Date = table.Column<string>(nullable: true),
                    OperationsComplited = table.Column<bool>(nullable: false),
                    TagsRemoved = table.Column<bool>(nullable: false),
                    GroundingRemoved = table.Column<bool>(nullable: false),
                    ReadyForService = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SafetyDocuments", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Streets",
                columns: table => new
                {
                    Name = table.Column<string>(nullable: false),
                    dPriority = table.Column<int>(nullable: false),
                    cPriority = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Streets", x => x.Name);
                });

            migrationBuilder.CreateTable(
                name: "UserRequests",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Username = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    BirthDate = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    ImageData = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    InputState = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserRequests", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Username = table.Column<string>(nullable: false),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    BirthDate = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    InputState = table.Column<string>(nullable: true),
                    Picture = table.Column<string>(nullable: true),
                    ActiveStatus = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Username);
                });

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
                    Address = table.Column<string>(nullable: true),
                    CrewName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Incidents", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Incidents_CrewRequests_CrewName",
                        column: x => x.CrewName,
                        principalTable: "CrewRequests",
                        principalColumn: "Name",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "History",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    DocumentId = table.Column<string>(nullable: true),
                    DateChange = table.Column<string>(nullable: true),
                    ChangeBy = table.Column<string>(nullable: true),
                    NewStatus = table.Column<string>(nullable: true),
                    SafetyDocumentId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_History", x => x.Id);
                    table.ForeignKey(
                        name: "FK_History_SafetyDocuments_SafetyDocumentId",
                        column: x => x.SafetyDocumentId,
                        principalTable: "SafetyDocuments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Notifications",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Deleted = table.Column<bool>(nullable: false),
                    Visible = table.Column<bool>(nullable: false),
                    Type = table.Column<string>(nullable: true),
                    Text = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true),
                    TimeStamp = table.Column<string>(nullable: true),
                    Username = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Notifications", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Notifications_Users_Username",
                        column: x => x.Username,
                        principalTable: "Users",
                        principalColumn: "Username",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "IncidentCall",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Reason = table.Column<string>(nullable: true),
                    Hazard = table.Column<string>(nullable: true),
                    Comment = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    SurName = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    Priority = table.Column<int>(nullable: false),
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
                    Type = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    CoordinateX = table.Column<string>(nullable: true),
                    CoordinateY = table.Column<string>(nullable: true),
                    IncidentId = table.Column<int>(nullable: true),
                    SafetyDocumentId = table.Column<int>(nullable: true)
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
                    table.ForeignKey(
                        name: "FK_IncidentElement_SafetyDocuments_SafetyDocumentId",
                        column: x => x.SafetyDocumentId,
                        principalTable: "SafetyDocuments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "IncidentResolution",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Cause = table.Column<string>(nullable: true),
                    SubCause = table.Column<string>(nullable: true),
                    Construction = table.Column<string>(nullable: true),
                    Material = table.Column<string>(nullable: true),
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
                    Url = table.Column<string>(nullable: true),
                    IncidentId = table.Column<int>(nullable: true),
                    SafetyDocumentId = table.Column<int>(nullable: true)
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
                    table.ForeignKey(
                        name: "FK_Multimedia_SafetyDocuments_SafetyDocumentId",
                        column: x => x.SafetyDocumentId,
                        principalTable: "SafetyDocuments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_History_SafetyDocumentId",
                table: "History",
                column: "SafetyDocumentId");

            migrationBuilder.CreateIndex(
                name: "IX_IncidentCall_IncidentId",
                table: "IncidentCall",
                column: "IncidentId");

            migrationBuilder.CreateIndex(
                name: "IX_IncidentElement_IncidentId",
                table: "IncidentElement",
                column: "IncidentId");

            migrationBuilder.CreateIndex(
                name: "IX_IncidentElement_SafetyDocumentId",
                table: "IncidentElement",
                column: "SafetyDocumentId");

            migrationBuilder.CreateIndex(
                name: "IX_IncidentResolution_IncidentId",
                table: "IncidentResolution",
                column: "IncidentId");

            migrationBuilder.CreateIndex(
                name: "IX_Incidents_CrewName",
                table: "Incidents",
                column: "CrewName");

            migrationBuilder.CreateIndex(
                name: "IX_Multimedia_IncidentId",
                table: "Multimedia",
                column: "IncidentId");

            migrationBuilder.CreateIndex(
                name: "IX_Multimedia_SafetyDocumentId",
                table: "Multimedia",
                column: "SafetyDocumentId");

            migrationBuilder.CreateIndex(
                name: "IX_Notifications_Username",
                table: "Notifications",
                column: "Username");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Calls");

            migrationBuilder.DropTable(
                name: "Consumers");

            migrationBuilder.DropTable(
                name: "Elements");

            migrationBuilder.DropTable(
                name: "History");

            migrationBuilder.DropTable(
                name: "HistoryWP");

            migrationBuilder.DropTable(
                name: "IncidentCall");

            migrationBuilder.DropTable(
                name: "IncidentElement");

            migrationBuilder.DropTable(
                name: "IncidentResolution");

            migrationBuilder.DropTable(
                name: "Maps");

            migrationBuilder.DropTable(
                name: "Multimedia");

            migrationBuilder.DropTable(
                name: "Notifications");

            migrationBuilder.DropTable(
                name: "Streets");

            migrationBuilder.DropTable(
                name: "UserRequests");

            migrationBuilder.DropTable(
                name: "WorkPlans");

            migrationBuilder.DropTable(
                name: "WorkRequests");

            migrationBuilder.DropTable(
                name: "Incidents");

            migrationBuilder.DropTable(
                name: "SafetyDocuments");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "CrewRequests");
        }
    }
}
