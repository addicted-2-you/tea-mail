drop table if exists tea_mail.tea_portions;
create table tea_mail.tea_portions (
  id int primary key auto_increment,
  title varchar(255) not null,
  quantor float not null
);

insert into tea_mail.tea_portions (id, title, quantor) values (1, "5 г.", 0.5);
insert into tea_mail.tea_portions (id, title, quantor) values (2, "10 г.", 1);
insert into tea_mail.tea_portions (id, title, quantor) values (3, "15 г.", 1.5);
insert into tea_mail.tea_portions (id, title, quantor) values (4, "25 г.", 2.5);
insert into tea_mail.tea_portions (id, title, quantor) values (5, "50 г.", 5);
insert into tea_mail.tea_portions (id, title, quantor) values (6, "100 г.", 10);
insert into tea_mail.tea_portions (id, title, quantor) values (7, "200 г.", 20);
insert into tea_mail.tea_portions (id, title, quantor) values (8, "1 шт.", 1);
insert into tea_mail.tea_portions (id, title, quantor) values (9, "2 шт.", 2);
insert into tea_mail.tea_portions (id, title, quantor) values (10, "3 шт.", 3);
insert into tea_mail.tea_portions (id, title, quantor) values (11, "4 шт.", 4);
insert into tea_mail.tea_portions (id, title, quantor) values (12, "5 шт.", 5);
insert into tea_mail.tea_portions (id, title, quantor) values (13, "6 шт.", 6);

##

drop table if exists tea_mail.tea_types;
create table tea_mail.tea_types (
  id int primary key auto_increment,
  title varchar(255) not null,
  parentId int default null
);

insert into tea_mail.tea_types (id, title, parentId) values (1, "Пуэр", null);
insert into tea_mail.tea_types (id, title, parentId) values (2, "Шу Пуэр (чёрный)", 1);
insert into tea_mail.tea_types (id, title, parentId) values (3, "Шэн Пуэр (зелёный)", 1);
insert into tea_mail.tea_types (id, title, parentId) values (4, "Улун", null);
insert into tea_mail.tea_types (id, title, parentId) values (5, "Тайваньский Улун", 4);
insert into tea_mail.tea_types (id, title, parentId) values (6, "Тайский Улун", 4);

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
  teaType int not null
);

insert into tea_mail.tea(id, title, price, teaType) values(1, "Молочный Улун", 10, 5);
insert into tea_mail.tea(id, title, price, teaType) values(2, "Сливочный Виноградный Улун", 25, 5);
insert into tea_mail.tea(id, title, price, teaType) values(3, "Древний Улун", 100, 5);
insert into tea_mail.tea(id, title, price, teaType) values(4, "Заяц Гун Тин", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(5, "Гу Тин в кирпиче (из почечного сырья)", 10, 2);

insert into tea_mail.tea(id, title, price, teaType) values(6, "Черный Пуэр тест-1", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(7, "Черный Пуэр тест-2", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(8, "Черный Пуэр тест-3", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(9, "Черный Пуэр тест-4", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(10, "Черный Пуэр тест-5", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(11, "Черный Пуэр тест-6", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(12, "Черный Пуэр тест-7", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(13, "Черный Пуэр тест-8", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(14, "Черный Пуэр тест-9", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(15, "Черный Пуэр тест-10", 10, 2);

insert into tea_mail.tea(id, title, price, teaType) values(16, "Черный Пуэр тест-11", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(17, "Черный Пуэр тест-12", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(18, "Черный Пуэр тест-13", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(19, "Черный Пуэр тест-14", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(20, "Черный Пуэр тест-15", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(21, "Черный Пуэр тест-16", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(22, "Черный Пуэр тест-17", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(23, "Черный Пуэр тест-18", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(24, "Черный Пуэр тест-19", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(25, "Черный Пуэр тест-20", 10, 2);

insert into tea_mail.tea(id, title, price, teaType) values(26, "Черный Пуэр тест-21", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(27, "Черный Пуэр тест-22", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(28, "Черный Пуэр тест-23", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(29, "Черный Пуэр тест-24", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(30, "Черный Пуэр тест-25", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(31, "Черный Пуэр тест-26", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(32, "Черный Пуэр тест-27", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(33, "Черный Пуэр тест-28", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(34, "Черный Пуэр тест-29", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(35, "Черный Пуэр тест-30", 10, 2);

##

drop table if exists tea_mail.m2m_tea_flavors;
create table tea_mail.m2m_tea_flavors (
  id int primary key auto_increment,
  teaId int not null,
  flavorId int not null
);

insert into tea_mail.m2m_tea_flavors(id, teaId, flavorId) values(1, 1, 1);
insert into tea_mail.m2m_tea_flavors(id, teaId, flavorId) values(2, 1, 2);
insert into tea_mail.m2m_tea_flavors(id, teaId, flavorId) values(3, 1, 7);

##

drop table if exists tea_mail.m2m_tea_portions;
create table tea_mail.m2m_tea_portions (
 teaId int not null,
 portionId int not null
);

insert into tea_mail.m2m_tea_portions(teaId, portionId) values (1, 1);
insert into tea_mail.m2m_tea_portions(teaId, portionId) values (1, 2);
insert into tea_mail.m2m_tea_portions(teaId, portionId) values (1, 3);
insert into tea_mail.m2m_tea_portions(teaId, portionId) values (1, 4);
insert into tea_mail.m2m_tea_portions(teaId, portionId) values (1, 5);
insert into tea_mail.m2m_tea_portions(teaId, portionId) values (1, 6);
insert into tea_mail.m2m_tea_portions(teaId, portionId) values (1, 7);

insert into tea_mail.m2m_tea_portions(teaId, portionId) values (2, 1);
insert into tea_mail.m2m_tea_portions(teaId, portionId) values (2, 2);
insert into tea_mail.m2m_tea_portions(teaId, portionId) values (2, 3);
insert into tea_mail.m2m_tea_portions(teaId, portionId) values (2, 4);
insert into tea_mail.m2m_tea_portions(teaId, portionId) values (2, 5);
insert into tea_mail.m2m_tea_portions(teaId, portionId) values (2, 6);

insert into tea_mail.m2m_tea_portions(teaId, portionId) values (3, 1);
insert into tea_mail.m2m_tea_portions(teaId, portionId) values (3, 2);
insert into tea_mail.m2m_tea_portions(teaId, portionId) values (3, 3);
insert into tea_mail.m2m_tea_portions(teaId, portionId) values (3, 4);
insert into tea_mail.m2m_tea_portions(teaId, portionId) values (3, 5);
insert into tea_mail.m2m_tea_portions(teaId, portionId) values (3, 6);

insert into tea_mail.m2m_tea_portions(teaId, portionId) values (4, 1);
insert into tea_mail.m2m_tea_portions(teaId, portionId) values (4, 2);
insert into tea_mail.m2m_tea_portions(teaId, portionId) values (4, 3);
insert into tea_mail.m2m_tea_portions(teaId, portionId) values (4, 4);
insert into tea_mail.m2m_tea_portions(teaId, portionId) values (4, 5);
insert into tea_mail.m2m_tea_portions(teaId, portionId) values (4, 6);

insert into tea_mail.m2m_tea_portions(teaId, portionId) values (5, 1);
insert into tea_mail.m2m_tea_portions(teaId, portionId) values (5, 2);
insert into tea_mail.m2m_tea_portions(teaId, portionId) values (5, 3);
insert into tea_mail.m2m_tea_portions(teaId, portionId) values (5, 4);
insert into tea_mail.m2m_tea_portions(teaId, portionId) values (5, 5);
insert into tea_mail.m2m_tea_portions(teaId, portionId) values (5, 6);

##

drop table if exists tea_mail.orders;
create table tea_mail.orders (
  id int primary key auto_increment,
  userId int default null,
  userphone varchar(255) default null,
  status enum('new', 'inprogress', 'done', 'cancelled') default 'new',
  createdAt datetime default now(),
  updatedAt datetime default null on update now()
);

drop table if exists tea_mail.m2m_tea_orders;
create table tea_mail.m2m_tea_orders (
  id int primary key auto_increment,
  orderId int not null,
  teaId int not null,
  portionId int not null
);
