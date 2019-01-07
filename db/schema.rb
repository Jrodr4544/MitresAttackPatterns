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

ActiveRecord::Schema.define(version: 20181224012618) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attack_patterns", force: :cascade do |t|
    t.string "key"
    t.string "created_by_ref"
    t.string "name"
    t.text "description"
    t.text "definition_type"
    t.text "definition"
    t.string "type"
    t.string "x_mitre_version"
    t.string "x_mitre_detection"
    t.string "modified"
    t.string "created"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "x_mitre_data_sources", default: [], array: true
    t.text "x_mitre_platforms", default: [], array: true
    t.string "object_marking_refs", default: [], array: true
  end

  create_table "external_references", force: :cascade do |t|
    t.string "external_id"
    t.string "url"
    t.string "description"
    t.string "source_name"
    t.bigint "attack_pattern_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["attack_pattern_id"], name: "index_external_references_on_attack_pattern_id"
  end

  create_table "kill_chain_phases", force: :cascade do |t|
    t.string "phase_name"
    t.string "kill_chain_name"
    t.bigint "attack_pattern_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["attack_pattern_id"], name: "index_kill_chain_phases_on_attack_pattern_id"
  end

  add_foreign_key "external_references", "attack_patterns"
  add_foreign_key "kill_chain_phases", "attack_patterns"
end
