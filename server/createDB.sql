drop table if exists User;
drop table if exists Post;
drop table if exists Comment;
drop table if exists "Like";

create table User (
id integer primary key,
user_name text,
profile_img text,
email text
);

create table Post (
id integer primary key,
postImg text,
date text,
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

create table Post_Comment ( 
post_id integer,
comment_id integer,
foreign key (post_id) references Post(id),
foreign key (comment_id) references Comment(id)
);


create table "Like" (
id integer primary key,
user_id integer,
date date,
foreign key (user_id) references User(id)
);

insert into User (id, user_name, profile_img, email ) values
(1, 'amazing_mugi', 'https://www.odt.co.nz/sites/default/files/story/2020/07/gettyimages-138310605.jpg', 'mugi@nyansta.com'),
(2, 'sumi_the_best', 'https://icc.govt.nz/wp-content/uploads/2019/03/cats-banner.jpg', 'sumi@nyansta.com');

insert into Post (id, postImg, date, caption, user_id) values
(1, 'https://a.rgbimg.com/users/t/tz/tzooka/600/mC092u6.jpg', '14/09/2020', 'test', 1),
(2, 'https://www.odt.co.nz/sites/default/files/story/2020/07/gettyimages-138310605.jpg', '13/09/2020', 'test2', 2);