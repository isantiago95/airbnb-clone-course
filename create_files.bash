#!/bin/bash

# use this before run for the first time to give enough permissions:
# chmod +x create_files.bash

# Check if the correct number of arguments was provided
if [ "$#" -ne 2 ]; then
  echo "Usage: $0 'folder' 'file1,file2,file3'"
  exit 1
fi

# Define the target directory and files
TARGET_DIR="$1"
FILES="$2"

# Convert the comma-separated list into an array
IFS=',' read -ra FILE_ARRAY <<< "$FILES"

# Create the target directory if it doesn't exist
mkdir -p "$TARGET_DIR"

# Loop through each file name and create the file inside the target directory
for file in "${FILE_ARRAY[@]}"; do
  # Use the file name as provided without modification
  COMPONENT_NAME="${file%.*}"

  # Delete the file if it already exists
  if [ -f "$TARGET_DIR/$file" ]; then
    rm "$TARGET_DIR/$file"
    echo "Deleted existing file $TARGET_DIR/$file"
  fi

  # Create the file and add the specified code
  cat > "$TARGET_DIR/$file" <<EOL
function $COMPONENT_NAME() {
  return <div>$COMPONENT_NAME</div>;
}

export default $COMPONENT_NAME;
EOL

  echo "Created $TARGET_DIR/$file with component $COMPONENT_NAME"
done

echo "All files created successfully inside $TARGET_DIR!"
