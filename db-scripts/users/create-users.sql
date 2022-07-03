-- drop table if exists tea_mail.users;
create table if not exists tea_mail.users (
  id int primary key auto_increment,
  username varchar(255) unique not null,
  password varchar(255) not null,

  createdat datetime default now(),
  updatedat datetime default null on update now(),
  deletedat datetime default null
);

drop table if exists tea_mail.roles;
create table tea_mail.roles (
  id int primary key auto_increment,
  title varchar(255) not null,

  createdat datetime default now(),
  updatedat datetime default null on update now(),
  deletedat datetime default null
);

insert into tea_mail.roles (id, title) values (1, "Admin");
insert into tea_mail.roles (id, title) values (2, "User");

drop table if exists tea_mail.users_roles;
create table tea_mail.users_roles (
  userid int not null,
  roleid int not null,

  unique key userrolepair (userid, roleid)
);
