drop table if exists tea_mail.tea_portions;
create table tea_mail.tea_portions (
  id int primary key auto_increment,
  title varchar(255) not null
);

insert into tea_mail.tea_portions (id, title) values (1, "5 г.");
insert into tea_mail.tea_portions (id, title) values (2, "10 г.");
insert into tea_mail.tea_portions (id, title) values (3, "15 г.");
insert into tea_mail.tea_portions (id, title) values (4, "25 г.");
insert into tea_mail.tea_portions (id, title) values (5, "50 г.");
insert into tea_mail.tea_portions (id, title) values (6, "100 г.");
insert into tea_mail.tea_portions (id, title) values (7, "200 г.");
insert into tea_mail.tea_portions (id, title) values (8, "1 шт.");
insert into tea_mail.tea_portions (id, title) values (9, "2 шт.");
insert into tea_mail.tea_portions (id, title) values (10, "3 шт.");
insert into tea_mail.tea_portions (id, title) values (11, "4 шт.");
insert into tea_mail.tea_portions (id, title) values (12, "5 шт.");
insert into tea_mail.tea_portions (id, title) values (13, "6 шт.");

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
insert into tea_mail.tea(id, title, price, teaType) values(2, "Сливчоный Виноградный Улун", 25, 5);
insert into tea_mail.tea(id, title, price, teaType) values(3, "Древний Улун", 100, 5);
insert into tea_mail.tea(id, title, price, teaType) values(4, "Заяц Гун Тин", 10, 2);
insert into tea_mail.tea(id, title, price, teaType) values(5, "Гу Тин в кирпиче (из почечного сырья)", 10, 2);

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
