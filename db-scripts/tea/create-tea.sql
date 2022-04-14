drop table if exists tea_mail.tea_units;
create table tea_mail.tea_units (
  id int primary key auto_increment,
  title varchar(255) not null,
  titleshort char(7) not null
);

insert into tea_mail.tea_units (id, title, titleshort) values (1, "граммы", "гр.");
insert into tea_mail.tea_units (id, title, titleshort) values (2, "штуки", "шт.");

## 

drop table if exists tea_mail.tea_types;
create table tea_mail.tea_types (
  id int primary key auto_increment,
  title varchar(255) not null,
  parentid int default null
);

insert into tea_mail.tea_types (id, title, parentid) values (1, "Пуэр", null);
insert into tea_mail.tea_types (id, title, parentid) values (2, "Шу Пуэр (чёрный)", 1);
insert into tea_mail.tea_types (id, title, parentid) values (3, "Шэн Пуэр (зелёный)", 1);
insert into tea_mail.tea_types (id, title, parentid) values (4, "Улун", null);
insert into tea_mail.tea_types (id, title, parentid) values (5, "Тайваньский Улун", 4);
insert into tea_mail.tea_types (id, title, parentid) values (6, "Тайский Улун", 4);

##

drop table if exists tea_mail.flavors;
create table tea_mail.flavors (
  id int primary key auto_increment,
  title varchar(255) not null
);

insert into tea_mail.flavors(id, title) values(1, "Выразительный");
insert into tea_mail.flavors(id, title) values(2, "Мягкий");
insert into tea_mail.flavors(id, title) values(3, "Сочный");
insert into tea_mail.flavors(id, title) values(4, "Травянистый");
insert into tea_mail.flavors(id, title) values(5, "Пряный");
insert into tea_mail.flavors(id, title) values(6, "Освежающий");
insert into tea_mail.flavors(id, title) values(7, "'Вкусненький'");
insert into tea_mail.flavors(id, title) values(8, "Древесный");

##

drop table if exists tea_mail.tea;
create table tea_mail.tea (
  id int primary key auto_increment,
  title varchar(255) not null,
  price float not null,
  units int not null,
  teatype int not null
);

insert into tea_mail.tea(id, title, price, units, teatype) values(1, "Молочный Улун", 10, 1, 5);

##

drop table if exists tea_mail.m2m_tea_flavors;
create table tea_mail.m2m_tea_flavors (
  id int primary key auto_increment,
  teaid int not null,
  flavorid int not null
);

insert into tea_mail.m2m_tea_flavors(id, teaid, flavorid) values(1, 1, 1);
insert into tea_mail.m2m_tea_flavors(id, teaid, flavorid) values(2, 1, 2);
insert into tea_mail.m2m_tea_flavors(id, teaid, flavorid) values(3, 1, 7);
