# Modified version of https://www.geeksforgeeks.org/convert-csv-to-json-using-python/
# Example usage: python3 csv_to_json.py ../res/cbi.csv ../res/cbi.json

import sys
import csv
import json


# Function to convert a CSV to JSON
# Takes the file paths as arguments
def make_json(csvFilePath, jsonFilePath):

	# create a dictionary
	data = []

	# Open a csv reader called DictReader
	with open(csvFilePath, encoding='utf-8') as csvf:
		csvReader = csv.DictReader(csvf)

		# Convert each row into a dictionary
		# and add it to data
		for i, rows in enumerate(csvReader):

			# Assuming a column named 'No' to
			# be the primary key
      # key = rows[indexColumn]
			rows["id"] = i
			data.append(rows)

	# Open a json writer, and use the json.dumps()
	# function to dump data
	with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
		jsonf.write(json.dumps(data, indent=4))

# Driver Code
if __name__ == "__main__":
  args = sys.argv

  if len(args) < 3:
	  print("You need 2 arguments: input csv, output json")
  else:
	  make_json(args[1], args[2])


# Decide the two file paths according to your
# computer system
# csvFilePath = r'Names.csv'
# jsonFilePath = r'Names.json'

# Call the make_json function
# make_json(csvFilePath, jsonFilePath)
