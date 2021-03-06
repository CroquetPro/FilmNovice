# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151221223934) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "actors", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "actors", ["name"], name: "index_actors_on_name", unique: true, using: :btree

  create_table "castings", force: :cascade do |t|
    t.integer  "movie_id",   null: false
    t.integer  "actor_id",   null: false
    t.integer  "order",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "castings", ["actor_id"], name: "index_castings_on_actor_id", using: :btree
  add_index "castings", ["movie_id"], name: "index_castings_on_movie_id", using: :btree

  create_table "directors", force: :cascade do |t|
    t.text     "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "movies", force: :cascade do |t|
    t.string   "title",        null: false
    t.date     "release_date"
    t.string   "plot",         null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "director_id"
    t.text     "director"
    t.text     "actors"
    t.integer  "year"
    t.string   "image_url"
  end

  add_index "movies", ["director_id"], name: "index_movies_on_director_id", using: :btree
  add_index "movies", ["title"], name: "index_movies_on_title", unique: true, using: :btree

  create_table "reviews", force: :cascade do |t|
    t.string   "title",       null: false
    t.string   "body",        null: false
    t.string   "author_name", null: false
    t.integer  "movie_id",    null: false
    t.integer  "user_id",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "reviews", ["movie_id"], name: "index_reviews_on_movie_id", using: :btree
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

  create_table "votes", force: :cascade do |t|
    t.integer  "value",      null: false
    t.integer  "voter_id",   null: false
    t.integer  "review_id",  null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "votes", ["voter_id", "review_id"], name: "index_votes_on_voter_id_and_review_id", unique: true, using: :btree

end
