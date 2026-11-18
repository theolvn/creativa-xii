import json
from pathlib import Path

# Fichier contenant la liste des enchantements
input_file = Path("enchantments.txt")

# Dossier de sortie
output_dir = Path("generated")
output_dir.mkdir(exist_ok=True)

# Lire les enchantements
with input_file.open("r", encoding="utf-8") as f:
    enchantments = [
        line.strip()
        for line in f
        if line.strip()
    ]

for enchantment in enchantments:
    data = {
        "type": "betterarcheology:identifying",
        "ingredient": {
            "item": "betterarcheology:unidentified_artifact"
        },
        "result": {
            "id": "minecraft:enchanted_book",
            "count": 1,
            "components": {
                "minecraft:stored_enchantments": {
                    "levels": {
                        enchantment: 1
                    }
                }
            }
        }
    }

    # : devient _
    filename = enchantment.replace(":", "_") + ".json"

    output_file = output_dir / filename

    with output_file.open("w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

print(f"{len(enchantments)} fichiers générés dans : {output_dir}")