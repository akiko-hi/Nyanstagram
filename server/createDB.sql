drop table if exists User;
drop table if exists Post;
drop table if exists Comment;
drop table if exists "Like";

create table User (
id integer primary key,
user_name text,
profile_img text
);

create table Post (
id integer primary key,
date date,
caption text,
user_id integer,
foreign key (user_id) references User(id)
);

create table Comment (
id integer primary key,
post_id integer,
date date,
user_id integer,
comment text,
foreign key (user_id) references User(id),
foreign key (post_id) references Post(id)
);

create table "Like" (
id integer primary key,
user_id integer,
date date,
foreign key (user_id) references User(id)
);

insert into User (id, user_name, profile_img ) values
(1, 'amazing_mugi', 'https://www.odt.co.nz/sites/default/files/story/2020/07/gettyimages-138310605.jpg'),
(2, 'sumi_the_best', 'https://icc.govt.nz/wp-content/uploads/2019/03/cats-banner.jpg');