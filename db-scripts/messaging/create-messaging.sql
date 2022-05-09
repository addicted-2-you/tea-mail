drop table if exists tea_mail.users;
create table tea_mail.users (
  id int primary key auto_increment,
  username varchar(255) not null,
  password varchar(255) not null,

  createdat datetime default now(),
  updatedat datetime default null on update now(),
  deletedat datetime default null
);

drop table if exists tea_mail.chats;
create table tea_mail.chats (
  id int primary key auto_increment,
  title varchar(255) default null,

  createdat datetime default now(),
  updatedat datetime default null on update now(),
  deletedat datetime default null
);

drop table if exists tea_mail.users_chats;
create table tea_mail.users_chats (
  chatid int not null,
  userid int not null
);

drop table if exists tea_mail.messages;
create table tea_mail.messages (
  id int primary key auto_increment,
  text varchar(255) default null,
  url  varchar(255) default null,
  senderid int not null,
  chatid int not null,
  
  createdat datetime default now(),
  updatedat datetime default null on update now(),
  deletedat datetime default null
  
  constraint message_complete check (text is not null or url is not null)
);


