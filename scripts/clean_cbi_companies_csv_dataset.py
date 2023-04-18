# Cleans the csv file with the companies that comes from CBI
# Example usage: python3 clean_cbi_companies_csv_dataset.py ../res/cbi_4.csv

import sys

def clean(csv_path):
  # Read the file and make modifications
  f = open(csv_path, "r")
  columns = f.readline().split(",")
  replacements = [
    [" ", "_"],
    ["(", ""],
    [")", ""],
    ["%", "percent"],
    ["-", "_"],
    ["$", "dollars"],
    ["companies", "company"],
  ]
  new_columns = []

  for c in columns:
    c = c.lower()

    for r in replacements:
      c = c.replace(r[0], r[1])

    new_columns.append(c)

  rest_of_file = f.read()
  f.close()

  # Write the new version of the file
  f = open(csv_path, "w")
  f.write(",".join(new_columns))
  f.write(rest_of_file)
  f.close()

if __name__ == "__main__":
  args = sys.argv

  if len(args) < 2:
    print("You need 1 argument: input csv to be cleaned")
  else:
    clean(args[1])

