from json import load, dumps

icons = {}

with open('src/assets/icons.json') as f:
    icons: dict = load(f)

processed_icons = []

for icon in icons.keys():

    processed_styles = []

    for style in icons[icon]['styles']:
        processed_styles.append(style.capitalize())

    processed_icons.append({
        'name': icon,
        'terms': icons[icon]['search']['terms'],
        'unicode': icons[icon]['unicode'],
        'styles': processed_styles
    })


with open('src/assets/icons/icons.json', 'w') as f:
    f.write(dumps(processed_icons, indent=2))
