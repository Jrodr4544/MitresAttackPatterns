# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
data = File.read('./db/enterprise-attack.json')

 attack_patterns = JSON.parse(data)

 attack_patterns["objects"].each do |pattern|
    object = AttackPattern.create!( key: pattern['id'], # Will need to update react front end to reflect this key attribute as the id
                            created_by_ref: pattern['created_by_ref'],
                            name: pattern['name'],
                            description: pattern['description'],
                            type: pattern['type'],
                            x_mitre_version: pattern['x_mitre_version'],
                            x_mitre_detection: pattern['x_mitre_detection'],
                            modified: pattern['modified'],
                            created: pattern['created'],
                            x_mitre_data_sources: pattern['x_mitre_data_sources'],
                            x_mitre_platforms: pattern['x_mitre_platforms'],
                            definition: pattern['definition'],
                            definition_type: pattern['definition_type']
                          )
    if pattern['external_references'] != nil
        pattern['external_references'].each do |reference| 
            object.external_references << ExternalReference.create!(reference)
        end
    elsif pattern['kill_chain_phases'] != nil
        pattern['kill_chain_phases'].each do |phase|
            object.kill_chain_phases << KillChainPhase.create!(phase)
        end
    end

    object.save!
 end
