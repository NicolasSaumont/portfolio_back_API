site(id, name, description, site_link, github_link, top_site, #state_id)
picture(id, name, #site_id)
techno(id, name)
state(id, name)
user(id, username, email, password)

site_use_techno(#site(id), #techno(id))
