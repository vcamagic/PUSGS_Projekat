﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WEB2BEKEND.Data;

namespace WEB2BEKEND.Migrations
{
    [DbContext(typeof(DefaultConnection))]
    [Migration("20210701215525_call")]
    partial class call
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WEB2BEKEND.Models.Element", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Type")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("X")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Y")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Elements");
                });

            modelBuilder.Entity("WEB2BEKEND.Models.Incident", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("AffectedConsumers")
                        .HasColumnType("int");

                    b.Property<string>("Ata")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Calls")
                        .HasColumnType("int");

                    b.Property<bool>("Confirmed")
                        .HasColumnType("bit");

                    b.Property<string>("Creator")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Eta")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Etr")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Priority")
                        .HasColumnType("int");

                    b.Property<string>("SheduledTime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TimeOfIncident")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Type")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Voltage")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Incidents");
                });

            modelBuilder.Entity("WEB2BEKEND.Models.IncidentCall", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("IncidentId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("IncidentId");

                    b.ToTable("IncidentCall");
                });

            modelBuilder.Entity("WEB2BEKEND.Models.IncidentElement", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("IncidentId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Type")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("X")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Y")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("IncidentId");

                    b.ToTable("IncidentElement");
                });

            modelBuilder.Entity("WEB2BEKEND.Models.IncidentResolution", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("IncidentId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("IncidentId");

                    b.ToTable("IncidentResolution");
                });

            modelBuilder.Entity("WEB2BEKEND.Models.Multimedia", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("IncidentId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("IncidentId");

                    b.ToTable("Multimedia");
                });

            modelBuilder.Entity("WEB2BEKEND.Models.User", b =>
                {
                    b.Property<string>("Username")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ActiveStatus")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("BirthDate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("InputState")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Picture")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Username");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("WEB2BEKEND.Models.IncidentCall", b =>
                {
                    b.HasOne("WEB2BEKEND.Models.Incident", null)
                        .WithMany("Call")
                        .HasForeignKey("IncidentId");
                });

            modelBuilder.Entity("WEB2BEKEND.Models.IncidentElement", b =>
                {
                    b.HasOne("WEB2BEKEND.Models.Incident", null)
                        .WithMany("Elements")
                        .HasForeignKey("IncidentId");
                });

            modelBuilder.Entity("WEB2BEKEND.Models.IncidentResolution", b =>
                {
                    b.HasOne("WEB2BEKEND.Models.Incident", null)
                        .WithMany("Resolutions")
                        .HasForeignKey("IncidentId");
                });

            modelBuilder.Entity("WEB2BEKEND.Models.Multimedia", b =>
                {
                    b.HasOne("WEB2BEKEND.Models.Incident", null)
                        .WithMany("Multimedia")
                        .HasForeignKey("IncidentId");
                });
#pragma warning restore 612, 618
        }
    }
}
