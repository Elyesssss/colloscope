import csv
import json

# Lire le fichier CSV et le convertir en JSON
csv_file = "Colloscope_G11.csv"
json_file = "colloscope_data.json"

data = []

with open(csv_file, encoding="utf-8") as file:
    reader = csv.DictReader(file)
    for row in reader:
        data.append(row)

# Sauvegarder le JSON dans un fichier
with open(json_file, "w", encoding="utf-8") as file:
    json.dump(data, file, ensure_ascii=False, indent=4)

print(f"Data from {csv_file} has been converted to {json_file}.")
