#!/bin/bash

# use this before run for the first time to give enough permissions:
# chmod +x create_dirs.bash

TARGET_DIR="components"

# Check if an argument was provided
if [ -z "$1" ]; then
  echo "Usage: $0 'dir1,dir2,dir3'"
  exit 1
fi

# Convert the comma-separated list into an array
IFS=',' read -ra DIRS <<< "$1"

# Loop through each directory name and create the directory
for dir in "${DIRS[@]}"; do
  # Create the directory
  mkdir -p "$TARGET_DIR/$dir"
  echo "Created directory: $dir"
done

echo "All directories created successfully!"