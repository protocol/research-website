---
# Display name
name: "{{ replace .Name "-" " " | title }}"

# Role/position (e.g., Professor of Artificial Intelligence)
role:

research-groups:

resources:
  - name: avatar
    src: avatar.jpg

interests:
  - Interest 1
  - Interest 2

education:
  courses:
  - course: Title course 1
    institution: Name of Institution
    year: 2012
  - course: Title course 1
    institution: Name of Institution
    year: 2012

# The icon must match exactly the icon name in /static/icons/<name>.png
social:
  - icon: envelope
    link: '#contact'  # For a direct email link, use "mailto:test@example.org".
  - icon: twitter
    link: https://twitter.com/USERNAME
  - icon: google-scholar
    link: https://scholar.google.com/citations?user=PERSON-ID
  - icon: github
    link: https://github.com/USERNAME
  - icon: orcid
    link: https://orcid.org/0000-0002-1825-0097

email: ""

# Organizational groups that you belong to (for author list route)
user_groups:
  - Researchers
  - Management and support
  - Alumni
  - Advisors

# For display at the top of the author details page
quote:
---
