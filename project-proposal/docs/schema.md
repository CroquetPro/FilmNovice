# Schema Information

## movies
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
director    | string      | not null
writer      | string      | not null
author_id   | integer   | not null, foreign key (references users), indexed
release_date| datetime  | not null,
plot        | string    |  


## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
movie_id    | string    | not null, foreign key (references movies), indexed
date        | datetime  | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
total votes     | integer   | not null

## votes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
up_or_down  | boolean   | not null
review_id   | integer   | not null, foreign key (references reviews)
voter_name  | integer   | not null, foreign key (references users), indexed, unique [review_id]
author_id   | integer   | not null, foreign key (references users), indexed


## casting
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
movie_id    | integer   | not null, foreign key (references movies), indexed
actor_id    | integer   | not null, foreign key (references actors), indexed
year        | integer   | not null
order       | integer   | not null

## actors
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
